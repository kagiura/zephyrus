import isbStops from "@/data/isbStops";

function latitudeToMetres(lat: number) {
	return lat * 111_000;
}

function longitudeToMetres(lng: number) {
	return lng * 85_000;
}

export default function getClosestStops(lat: number, lng: number, max = -1) {
	const stops = isbStops.map((stop) => {
		const distance = Math.sqrt(
			Math.pow(latitudeToMetres(lat - stop.latitude), 2) +
				Math.pow(longitudeToMetres(lng - stop.longitude), 2),
		);
		return { ...stop, distance };
	});
	if (max < 1) return stops.sort((a, b) => a.distance - b.distance);
	return stops.sort((a, b) => a.distance - b.distance).slice(0, max);
}
