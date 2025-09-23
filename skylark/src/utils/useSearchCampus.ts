import { IMDF_AMENITIES, IMDF_OCCUPANTS, IMDF_UNITS } from "@/data/imdf";
import isbStops from "@/data/isbStops";
import { ISBStop } from "@/types/schema";
import { Amenity, Occupant, Unit } from "@dazzlegarden/types/imdf";
import Fuse, { FuseResult } from "fuse.js";
import { useMemo } from "react";
import { useDebounceValue } from "usehooks-ts";

const searchData = [
	...IMDF_UNITS.features.map((feature) => ({ type: "unit", feature })),
	...IMDF_AMENITIES.features.map((feature) => ({
		type: "amenity",
		feature,
	})),
	...IMDF_OCCUPANTS.features.map((feature) => ({
		type: "occupant",
		feature,
	})),
	...isbStops.map((feature) => ({ type: "stop", feature })),
];
const fuse = new Fuse(searchData, {
	keys: [
		"feature.properties.name.en",
		"feature.properties.alt_name.en",
		"feature.name",
		"stop.LongName",
		"stop.ShortName",
	],
	threshold: 0.3,
});

export default function useSearchCampus(query: string) {
	const [debouncedQuery] = useDebounceValue(query, 250);

	const results = useMemo(() => {
		if (!debouncedQuery) return [];
		const searchResults = fuse.search(debouncedQuery);
		return searchResults;
	}, [debouncedQuery]);

	// console.log(searchData);

	return {
		results: results as SearchResults,
		loading: query !== debouncedQuery,
	};
}

export type SearchResults = FuseResult<
	| {
			type: string;
			feature: Unit;
	  }
	| {
			type: string;
			feature: Amenity;
	  }
	| {
			type: string;
			feature: Occupant;
	  }
	| {
			type: string;
			feature: ISBStop;
	  }
>[];
