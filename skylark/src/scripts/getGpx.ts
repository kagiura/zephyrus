import fs from "fs";

import fetch from "node-fetch";

import isbServices from "@/data/isbServices.json";
import isbStops from "@/data/isbStops.json";

// use this api to get the route between 2 points
// http://router.project-osrm.org/route/v1/driving/13.388860,52.517037;13.397634,52.529407;13.428555,52.523219?overview=full&geometries=geojson

// save deduped pairs to a file

type CoordinatesTuple = [number, number];
type Coordinates = {
	lat: number;
	lng: number;
};

type StopPair = {
	fromName: string;
	toName: string;
	fromCoords: Coordinates;
	toCoords: Coordinates;
};

type StopPairWithPaths = StopPair & {
	coordinates: CoordinatesTuple[];
};

const stopPairs: {
	fromName: string;
	toName: string;
	fromCoords: Coordinates;
	toCoords: Coordinates;
}[] = [];

isbServices.forEach((service) => {
	for (let i = 0; i < service.stops.length - 1; i++) {
		const fromStop = isbStops.find((stop) => stop.name === service.stops[i]);
		const toStop = isbStops.find((stop) => stop.name === service.stops[i + 1]);

		if (fromStop && toStop) {
			stopPairs.push({
				fromName: fromStop.name,
				toName: toStop.name,
				fromCoords: {
					lat: fromStop.latitude,
					lng: fromStop.longitude,
				},
				toCoords: {
					lat: toStop.latitude,
					lng: toStop.longitude,
				},
			});
		}
	}

	// insert last stop to first stop
	const fromStop = isbStops.find(
		(stop) => stop.name === service.stops[service.stops.length - 1],
	);
	const toStop = isbStops.find((stop) => stop.name === service.stops[0]);

	if (fromStop && toStop) {
		stopPairs.push({
			fromName: fromStop.name,
			toName: toStop.name,
			fromCoords: {
				lat: fromStop.latitude,
				lng: fromStop.longitude,
			},
			toCoords: {
				lat: toStop.latitude,
				lng: toStop.longitude,
			},
		});
	}
});

// dedupe stop pairs
const dedupedStopPairs = stopPairs.filter((pair, index, self) => {
	const firstOccurrence = self.findIndex(
		(p) => p.fromName === pair.fromName && p.toName === pair.toName,
	);
	return firstOccurrence === index;
});

// create new stop pairs
const stopPairsWithPaths: StopPairWithPaths[] = [];

for (const pair of dedupedStopPairs) {
	console.log(`Fetching path for ${pair.fromName} to ${pair.toName}... `);
	const response = await fetch(
		`http://router.project-osrm.org/route/v1/driving/${pair.fromCoords.lng},${pair.fromCoords.lat};${pair.toCoords.lng},${pair.toCoords.lat}?overview=full&geometries=geojson`,
	);
	const data = await response.json();
	stopPairsWithPaths.push({
		...pair,
		coordinates: (data as any).routes[0].geometry.coordinates,
	});
}
fs.writeFileSync(
	"./src/data/isbStopPairs.json",
	JSON.stringify(stopPairsWithPaths, null, 2),
);
console.log("Script executed successfully!");
