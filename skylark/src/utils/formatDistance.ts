function formatDistance(distanceInMeters: number): string {
	if (distanceInMeters < 0) return "";
	if (distanceInMeters === 0) return "0m";
	if (distanceInMeters < 500) return `${distanceInMeters.toFixed(0)}m`;
	if (distanceInMeters < 10 * 1000)
		return `${(distanceInMeters / 1000).toFixed(1)}km`;
	return `${(distanceInMeters / 1000).toFixed(0)}km`;
}

export default formatDistance;
