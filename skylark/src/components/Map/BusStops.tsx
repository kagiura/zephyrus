"use client";
import getDistance from "geolib/es/getPreciseDistance";
import "mapbox-gl/dist/mapbox-gl.css";
import { useTheme } from "next-themes";
import { useMemo } from "react";
import { Layer, Source } from "react-map-gl/mapbox";

import isbStopsGeojson from "@/data/isbStopsGeojson";
import { useMapState } from "@/utils/mapState";

function BusStops() {
	return (
		<>
			<Layer id="isb-stops" type="slot" />
			{isbStopsGeojson.features.map((feature) => {
				return <ISBStop key={feature.properties?.name} feature={feature} />;
			})}
		</>
	);
}
export default BusStops;

const DISALLOWED_PROXIMITY = 40; //metres
function ISBStop({
	feature,
}: {
	feature: (typeof isbStopsGeojson.features)[0];
}) {
	const { resolvedTheme: theme } = useTheme();
	const { focusedStop, focusedStops } = useMapState();

	const newGeoJson = {
		...isbStopsGeojson,
		features: [feature],
	};
	const id = feature.properties?.name;

	const status = useMemo(() => {
		if (!focusedStop) return "visible";
		if (focusedStop.name === feature.properties?.name) return "hidden";
		// if distance is less than 20m, hide
		const dist = getDistance(
			{
				longitude: (feature.geometry as any).coordinates[0],
				latitude: (feature.geometry as any).coordinates[1],
			},
			focusedStop,
		);

		return dist > DISALLOWED_PROXIMITY ? "visible" : "faded";
	}, [focusedStop]);

	const visibility = status !== "hidden";

	const subtleStopsVisible = focusedStops.length > 0;

	const subtleStop = focusedStops.find((s) => s.name === id);

	return (
		<>
			<Source
				id={"isb-stops" + id}
				type="geojson"
				data={newGeoJson}
				key={"source" + id}
			>
				<Layer
					slot="isb-stops"
					key={"layer" + id}
					id={"isb-stops-layer" + id}
					type="symbol"
					layout={{
						"symbol-sort-key": feature?.properties?.priority || 1,
						visibility: visibility && !subtleStopsVisible ? "visible" : "none",

						"icon-image": "nus-isb",
						"icon-size": 0.16,
						"text-field": ["get", "ShortName"],
						"text-variable-anchor": ["left", "right", "top", "bottom"],
						"text-radial-offset": 0.75,
						"text-justify": "auto",
						"text-font": [
							// 'DINosaur Medium',
							"DIN Pro Medium",
							"Open Sans Regular",
							"Arial Unicode MS Regular",
						],
						"text-size": 14,
					}}
					paint={{
						"text-color": theme === "dark" ? "#ffffff" : "#111111",
						"text-halo-color": theme === "dark" ? "#111111" : "#ffffff",
						"text-halo-width": 2,
						"icon-opacity": status === "faded" ? 0.25 : 1,
						"text-opacity": status === "faded" ? 0.25 : 1,
						//@ts-ignore
					}}
				/>
				<Layer
					slot="isb-stops"
					key={
						"layer" + id + "subtle" + (!!subtleStop ? "loaded" : "notloaded")
					}
					id={"isb-stops-layer" + id + "subtle"}
					type="symbol"
					layout={{
						visibility: subtleStop ? "visible" : "none",

						"icon-image": "circle",
						"icon-size": 0.5,
						"icon-allow-overlap": true,
						"text-allow-overlap": false,
						"text-field": ["get", "ShortName"],
						"text-variable-anchor": ["left", "right", "top", "bottom"],
						"text-radial-offset": 0.5,
						"text-justify": "auto",
						"text-font": [
							// 'DINosaur Medium',
							"DIN Pro Medium",
							"Open Sans Regular",
							"Arial Unicode MS Regular",
						],
						"text-size": 14,
					}}
					paint={{
						"icon-color": "#fff",
						// "icon-halo-color": "#f00000",
						"icon-halo-color": subtleStop?.color || "#000",
						"icon-halo-width": 1.25,
						// "icon-halo-blur": 0,
						"text-color": theme === "dark" ? "#ffffff" : "#111111",
						"text-halo-color": theme === "dark" ? "#111111" : "#ffffff",
						"text-halo-width": 2,
						// "icon-opacity": status === "faded" ? 0.25 : 1,
						// "text-opacity": status === "faded" ? 0.25 : 1,
					}}
					metadata={{
						"mapbox:subtleStop": !!subtleStop,
						"mapbox:subtleService": subtleStop?.service,
					}}
				/>
			</Source>
		</>
	);
}
