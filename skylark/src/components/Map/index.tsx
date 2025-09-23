"use client";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import {
	CSSProperties,
	Dispatch,
	SetStateAction,
	useCallback,
	useEffect,
	useMemo,
} from "react";
import ReactMapGL, {
	Layer,
	Source,
	useMap,
	ViewStateChangeEvent,
} from "react-map-gl/mapbox";
import { useWindowSize } from "usehooks-ts";

import MapMarkerYou from "./MapMarkerYou";

import BusLayer from "./BusLayer";
import IMDFLayer from "./IMDFLayer";

import { IMDF_AMENITIES, IMDF_UNITS } from "@/data/imdf";
import isbStopsGeojson from "@/data/isbStopsGeojson";
import { SINGAPORE_BOUNDS } from "@/data/singaporeBounds";
import { useMapState } from "@/utils/mapState";

const MAPBOX_ACCESSTOKEN =
	"pk.eyJ1IjoiYWR3ZW50dXJlcyIsImEiOiJjbTEzOWpzcGsxYWhlMmtyM2Vrc3QzMjd2In0.DHDRbSzDNBAFst6h9hHTbQ";
mapboxgl.accessToken = MAPBOX_ACCESSTOKEN;

const mapStyles: CSSProperties = {
	width: "100vw",
	height: "100vh",
	position: "fixed",
	top: 0,
	marginBottom: "-100vh",
};

export default function Map({
	pushAwayCard,
	pullBackCard,
	mapLoaded,
	setMapLoaded,
	lat,
	setLat,
	lng,
	setLng,
	zoom,
	setZoom,
}: {
	pushAwayCard: () => void;
	pullBackCard: () => void;
	mapLoaded: boolean;
	setMapLoaded: (loaded: boolean) => void;
	lat: number;
	setLat: Dispatch<SetStateAction<number>>;
	lng: number;
	setLng: Dispatch<SetStateAction<number>>;
	zoom: number;
	setZoom: Dispatch<SetStateAction<number>>;
}) {
	const router = useRouter();
	const { width: pageWidth, height } = useWindowSize();

	// const mapContainer = useRef<HTMLDivElement>(null);

	const { resetFocusedState } = useMapState();
	const { resolvedTheme: theme, themes } = useTheme();

	const desktop = useMemo(() => pageWidth > 768, [pageWidth]);

	const onMapMove = useCallback(
		(e: ViewStateChangeEvent) => {
			setLng(e.viewState.longitude);
			setLat(e.viewState.latitude);
			setZoom(e.viewState.zoom);

			const originalEvent = (e as any).originalEvent;
			if (!originalEvent) return;

			let lowestX = pageWidth;
			let lowestY = 0;
			if (
				originalEvent.type === "mousemove" &&
				typeof (originalEvent as MouseEvent).clientX === "number" &&
				typeof (originalEvent as MouseEvent).clientY === "number"
			) {
				lowestX = (originalEvent as MouseEvent).clientX;
				lowestY = (originalEvent as MouseEvent).clientY;
			}
			if (
				originalEvent.type === "touchmove" &&
				(originalEvent as TouchEvent).touches.length > 0
			)
				[...(originalEvent as TouchEvent).touches].forEach((touch) => {
					lowestX = Math.min(lowestX, touch.clientX);
					lowestY = Math.max(lowestY, touch.clientY);
				});

			if (desktop && lowestX < 350 + 16 * 1.5 * 2) {
				pushAwayCard();
			} else if (!desktop && lowestY > height * 0.45) {
				pushAwayCard();
			}
		},
		[desktop, height, pageWidth, pushAwayCard, setLat, setLng, setZoom],
	);

	const { map } = useMap();

	const syncMapLightPreset = useCallback(
		(theme: string) => {
			if (!map) return;
			const currentPreset = map.getConfigProperty("basemap", "lightPreset");
			const isDark = theme === "dark";
			const isMapDark = currentPreset === "night";
			if (isDark === isMapDark) return; // no change needed
			map.setConfigProperty(
				"basemap",
				"lightPreset",
				theme === "dark" ? "night" : "day",
			);
		},
		[map, theme],
	);
	useEffect(() => {
		if (!map || !theme) return;
		syncMapLightPreset(theme);
	}, [map, theme]);

	return (
		<ReactMapGL
			reuseMaps
			id="map"
			mapboxAccessToken={MAPBOX_ACCESSTOKEN}
			// @ts-ignore
			mapLib={import("mapbox-gl")}
			latitude={lat}
			longitude={lng}
			zoom={zoom}
			maxPitch={60}
			minZoom={11}
			maxBounds={[
				SINGAPORE_BOUNDS.geometry.coordinates[0][1] as [number, number],
				SINGAPORE_BOUNDS.geometry.coordinates[0][3] as [number, number],
			]}
			style={mapStyles}
			onMove={onMapMove}
			mapStyle={
				// theme === "light" ? "mapbox://styles/adwentures/cm19fgou1029101piep72bm11" :
				"mapbox://styles/adwentures/cm6lgtbc200na01s24mkm30a0/draft"
			}
			config={{
				basemap: {
					lightPreset: theme === "light" ? "day" : "night",
				},
			}}
			// ISB-flat\
			onLoad={(e) => {
				const map = e.target;
				map.loadImage("/circle2.png", (error, image) => {
					if (error || !image) {
						console.error("Failed to load image circle", error);
						throw error;
					}
					// add image to the active style and make it SDF-enabled
					map.addImage("circle", image, { sdf: true });
					syncMapLightPreset(theme || themes[0]);
					setMapLoaded(true);
				});

				// map.on("styleimagemissing", () => {
				// 	console.warn("A styleimagemissing event occurred.");

				// 	map.loadImage("/circle2.png", (error, image) => {
				// 		if (error || !image) {
				// 			console.error("Failed to load image circle", error);
				// 			throw error;
				// 		}
				// 		// add image to the active style and make it SDF-enabled
				// 		map.addImage("circle", image, { sdf: true });
				// 	});
				// });
			}}
			interactiveLayerIds={[
				...isbStopsGeojson.features.map(
					(feature) => "isb-stops-layer" + feature.properties?.name,
				),
				...isbStopsGeojson.features.map(
					(feature) => "isb-stops-layer" + feature.properties?.name + "subtle",
				),
				...IMDF_UNITS.features.map((unit) => `unit-${unit.id}`),
				...IMDF_UNITS.features.map((unit) => `unit-label-${unit.id}`),
				...IMDF_AMENITIES.features.map((amenity) => `amenity-${amenity.id}`),
			]}
			onClick={(e) => {
				// console.log("Clicked features ", e.features, e);
				const feature = e.features?.[0];
				if (typeof feature === "undefined") {
					router.push("/");
					resetFocusedState();
					return;
				}
				console.info("Clicked feature:", feature);
				if (feature.source?.startsWith("isb-stops")) {
					const stopName = feature.properties?.name;
					const stop = isbStopsGeojson.features.find(
						(feature) => feature.properties?.name === stopName,
					);
					const service = feature.layer?.metadata
						? (feature.layer?.metadata as any)?.["mapbox:subtleService"]
						: undefined;
					if (typeof service === "string") {
						router.push(`/stops/${stopName}/${service}`);
					} else if (typeof stopName === "string") {
						router.push(`/stops/${stopName}`);
					}
				} else if (feature.layer?.id.startsWith("unit-label")) {
					const unitID = feature.layer.id.replace("unit-label-", "");
					const unit = IMDF_UNITS.features.find((u) => u.id === unitID);
					if (unit) {
						router.push(`/venue/${unitID}`);
					}
				} else if (feature.layer?.id.startsWith("amenity-")) {
					const amenityID = feature.layer.id.replace("amenity-", "");
					const amenity = IMDF_AMENITIES.features.find(
						(a) => a.id === amenityID,
					);
					if (amenity) {
						router.push(`/facility/${amenityID}`);
					}
				} else {
					router.push("/");
					resetFocusedState();
				}
			}}
		>
			<BaseMap />
			{mapLoaded && (
				<>
					<MapMarkerYou />
					<IMDFLayer />
					<BusLayer />
				</>
			)}
		</ReactMapGL>
	);
}

function BaseMap() {
	const { resolvedTheme: theme } = useTheme();
	return (
		<>
			<Source
				id="composite"
				type="vector"
				url="mapbox://mapbox.mapbox-streets-v8"
			/>
			<Layer
				{...{
					id: "poi-label",
					type: "symbol",
					metadata: {
						"mapbox:featureComponent": "point-of-interest-labels",
						"mapbox:group": "Point of interest labels, poi-labels",
					},
					source: "composite",
					"source-layer": "poi_label",
					minzoom: 6,
					filter: [
						"all",
						[
							"<=",
							["get", "filterrank"],
							[
								"+",
								["step", ["zoom"], 0, 16, 1, 17, 2],
								[
									"match",
									["get", "class"],
									"arts_and_entertainment",
									0,
									"commercial_services",
									0,
									"education",
									3,
									"food_and_drink",
									0,
									"food_and_drink_stores",
									0,
									"historic",
									0,
									"industrial",
									0,
									"landmark",
									0,
									"lodging",
									0,
									"medical",
									0,
									"motorist",
									0,
									"park_like",
									0,
									"place_like",
									0,
									"public_facilities",
									0,
									"religion",
									0,
									"sport_and_leisure",
									0,
									"store_like",
									0,
									"visitor_amenities",
									3,
									4,
								],
							],
						],
						[
							"step",
							["pitch"],
							true,
							50,
							["<", ["distance-from-center"], 2],
							60,
							["<", ["distance-from-center"], 2.5],
							70,
							["<", ["distance-from-center"], 3],
						],
					],
					layout: {
						"text-size": [
							"step",
							["zoom"],
							["step", ["get", "sizerank"], 18, 5, 12],
							17,
							["step", ["get", "sizerank"], 18, 13, 12],
						],
						"icon-image": "",
						"text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"],
						"text-offset": [0, 0],
						"text-anchor": [
							"step",
							["zoom"],
							["step", ["get", "sizerank"], "center", 5, "top"],
							17,
							["step", ["get", "sizerank"], "center", 13, "top"],
						],
						"text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
					},
					paint: {
						"text-halo-color":
							theme === "dark" ? "hsl(0, 0%, 20%)" : "hsl(0, 0%, 100%)",
						"text-halo-width": 0.5,
						"text-halo-blur": 0.5,
						"text-color": "hsl(0, 0%, 60%)",
					},
				}}
			/>
		</>
	);
}
