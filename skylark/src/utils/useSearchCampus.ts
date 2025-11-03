import {
	IMDF_AMENITIES,
	IMDF_ANCHORS,
	IMDF_OCCUPANTS,
	IMDF_UNITS,
} from "@/data/imdf";
import isbStops from "@/data/isbStops";
import distance from "@turf/distance";
import pointToPolygonDistance from "@turf/point-to-polygon-distance";
import Fuse, { FuseResult } from "fuse.js";
import { useMemo } from "react";
import { useDebounceValue } from "usehooks-ts";
import useLocation from "./useLocation";

const searchData = [
	...IMDF_UNITS.features.map((feature) => ({ type: "unit" as const, feature })),
	...IMDF_AMENITIES.features.map((feature) => ({
		type: "amenity" as const,
		feature,
	})),
	...IMDF_OCCUPANTS.features.map((feature) => ({
		type: "occupant" as const,
		feature,
	})),
	...isbStops.map((feature) => ({ type: "stop" as const, feature })),
];

type SearchableItem = (typeof searchData)[number];

const fuse = new Fuse(searchData, {
	keys: [
		"feature.properties.name.en",
		"feature.properties.alt_name.en",
		"feature.name",
		"stop.LongName",
		"stop.ShortName",
	],

	threshold: 0.3,
	includeScore: true,
});

export default function useSearchCampus(
	query: string,
	filter: (item: SearchableItem) => boolean = () => true,
) {
	const { latitude, longitude, isLocationActive } = useLocation();

	const [debouncedQuery] = useDebounceValue(query, 250);

	const results = useMemo(() => {
		if (!debouncedQuery) return [];
		let searchResults = fuse.search(debouncedQuery);
		const searchResultsWithDistance = searchResults
			.filter(({ item }) => filter(item))
			.map(({ item, ...others }) => {
				if (!isLocationActive) return { item, ...others, distance: Infinity };
				let dist = 0;

				switch (item.type) {
					case "stop":
						dist = distance(
							[longitude, latitude],
							[item.feature.longitude, item.feature.latitude],
							{
								units: "meters",
							},
						);

						break;
					case "occupant":
						const anchorId = item.feature.properties.anchor_id;
						const anchor = IMDF_ANCHORS.features.find((a) => a.id === anchorId);
						if (anchor) {
							dist = distance(
								[longitude, latitude],
								anchor?.geometry.coordinates,
								{
									units: "meters",
								},
							);
						}

						break;
					case "amenity":
						dist = distance(
							[longitude, latitude],
							item.feature.geometry.coordinates,
							{
								units: "meters",
							},
						);

						break;
					case "unit":
						dist = pointToPolygonDistance(
							[longitude, latitude],
							item.feature.geometry,
							{
								units: "meters",
							},
						);
				}

				return { item, distance: dist, ...others };
			})
			.map(({ item, ...others }) => {
				// boost score based on distance
				let score = others.score ?? 1;
				if (others.distance < 50) {
					score *= Math.pow(10, -1.5);
				} else if (others.distance < 100) {
					score *= Math.pow(10, -1);
				} else if (others.distance < 200) {
					score *= Math.pow(10, -0.5);
				}
				// boost score for occupants and amenities and stops
				if (item.type === "occupant") {
					score *= Math.pow(10, -0.3);
				} else if (item.type === "amenity") {
					score *= Math.pow(10, -0.3);
				} else if (item.type === "stop") {
					score *= Math.pow(10, -0.2);
				}
				return { item, ...others, score };
			});
		// sort score ascending
		// if score is equal, go in order of occupant, amenity, stop, unit
		// if same, sort by distance
		return searchResultsWithDistance.sort((a, b) => {
			if (a.score! < b.score!) return -1;
			if (a.score! > b.score!) return 1;
			const typeOrder = ["occupant", "amenity", "stop", "unit"];
			if (typeOrder.indexOf(a.item.type) < typeOrder.indexOf(b.item.type))
				return -1;
			if (typeOrder.indexOf(a.item.type) > typeOrder.indexOf(b.item.type))
				return 1;
			return a.distance - b.distance;
		});
	}, [debouncedQuery]);

	// console.log(searchData);

	return {
		results: results as SearchResults,
		loading: query !== debouncedQuery,
	};
}

export type SearchResults = FuseResult<SearchableItem>[];
