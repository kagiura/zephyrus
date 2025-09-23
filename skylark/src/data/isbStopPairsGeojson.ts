// {
//   "type": "FeatureCollection",
//   "features": [
//     {
//       "type": "Feature",
//       "properties": {},
//       "geometry": {
//         "coordinates": [
//           [
//             103.81140059340129,
//             1.3346051766680773
//           ],
//         ],
//         "type": "LineString"
//       }
//     }
//   ]
// }

import { Feature, FeatureCollection } from "geojson";
import { lineString } from "@turf/helpers";
import smooth from "to-smooth";
import simplify from "@turf/simplify";

import isbStopPairs from "./isbStopPairs";

function turfSimplify(coordinates: number[][]) {
	const line = lineString(coordinates);
	const simplified = simplify(line, {
		mutate: true,
		tolerance: 0.000002,
	});
	return simplified.geometry.coordinates;
}

function chaikinSmooth(coordinates: number[][]) {
	return smooth(coordinates, {
		factor: 0.75,
		iteration: 4,
	});
}

export default function isbStopPairGeojson(fromName: string, toName: string) {
	const stopPair = isbStopPairs.find(
		(pair) => pair.fromName === fromName && pair.toName === toName,
	);
	if (!stopPair)
		return {
			type: "FeatureCollection",
			features: [],
		} as FeatureCollection;

	const coordinates = chaikinSmooth(turfSimplify(stopPair.coordinates));
	return {
		type: "FeatureCollection",
		features: [
			{
				type: "Feature",
				properties: {
					...stop,
				},
				geometry: {
					coordinates: coordinates,
					type: "LineString",
				},
				id: `${fromName}__${toName}`,
			},
		] as Feature[],
	} as FeatureCollection;
}
