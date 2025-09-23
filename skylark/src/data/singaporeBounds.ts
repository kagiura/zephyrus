import { Feature, FeatureCollection, Polygon } from "geojson";

export const SINGAPORE_BOUNDS = {
	type: "Feature",
	properties: {},
	geometry: {
		coordinates: [
			[
				[103.44528813166659, 1.6870442063019766],
				[103.44528813166659, 1.020037735977823],
				[104.18861771303943, 1.020037735977823],
				[104.18861771303943, 1.6870442063019766],
				[103.44528813166659, 1.6870442063019766],
			],
		],
		type: "Polygon",
	},
} as Feature<Polygon>;
