import { Feature, FeatureCollection } from "geojson";

import isbStops from "./isbStops";

const isbStopsGeojson: FeatureCollection = {
	type: "FeatureCollection",
	features: [
		...isbStops.map((stop, index) => ({
			type: "Feature",
			properties: {
				...stop,
			},
			geometry: {
				coordinates: [stop.longitude, stop.latitude],
				type: "Point",
			},
			id: index,
		})),
	] as Feature[],
};

export default isbStopsGeojson;
