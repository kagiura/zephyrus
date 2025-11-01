import { useCallback, useMemo } from "react";
import { LngLatLike, useMap } from "react-map-gl/mapbox";
import { useWindowSize } from "usehooks-ts";
import { useMapState } from "./mapState";

export function useDodgeUI() {
	const { map } = useMap();
	const { debouncedLng, debouncedLat } = useMapState();
	const { width: pageWidth, height: pageHeight } = useWindowSize();
	const desktop = useMemo(() => pageWidth > 768, [pageWidth]);

	const dodge = useCallback(
		(position: LngLatLike, _targetZoom?: number) => {
			if (typeof map === "undefined") {
				// run it again when the map is ready
				setTimeout(() => dodge(position, _targetZoom), 500);
				return;
			}

			const zoom = map.getZoom();
			const targetZoom = _targetZoom || zoom;
			const zoomAdjustment = Math.pow(2, zoom - targetZoom);
			// set the map's center to the spotlight point

			const lng = Array.isArray(position)
				? position[0]
				: "lon" in position
					? position.lon
					: position.lng;
			const lat = Array.isArray(position) ? position[1] : position.lat;

			if (desktop) {
				const sidebarWidth = 350 + 16 * 2;
				// dodge the sidebar by adjusting the lng

				// first, project the center of the map
				const centerPoint = map.project([lng, lat]);
				// then, move the point to the left by half the sidebar width
				const leftPoint = centerPoint.x - (sidebarWidth / 2) * zoomAdjustment;
				// unproject the new point to get the new latlng
				const adjustedLng = map.unproject([leftPoint, centerPoint.y]).lng;

				return [adjustedLng, lat] as [number, number];
			} else {
				const footerHeight = pageHeight - (pageHeight * 0.75 - 120);
				const centerPoint = map.project([lng, lat]);
				const topPoint = centerPoint.y + (footerHeight / 2) * zoomAdjustment;
				const adjustedLat = map.unproject([centerPoint.x, topPoint]).lat;

				return [lng, adjustedLat] as [number, number];
			}
		},
		[desktop, map, pageHeight],
	);

	/** return the point that's actually in the "center" of the map, with the ui accounted for
	 * should be the inverse of dodge
	 */
	const undodge = useMemo(() => {
		if (typeof map === "undefined") {
			return undefined;
		}
		const zoom = map.getZoom();
		const targetZoom = zoom;
		const zoomAdjustment = Math.pow(2, zoom - targetZoom);

		const lng = debouncedLng;
		const lat = debouncedLat;

		if (desktop) {
			const sidebarWidth = 350 + 16 * 2;
			// UNdodge the sidebar by adjusting the lng
			const centerPoint = map.project([lng, lat]);
			const rightPoint = centerPoint.x + (sidebarWidth / 2) * zoomAdjustment;
			const adjustedLng = map.unproject([rightPoint, centerPoint.y]).lng;

			return [adjustedLng, lat] as [number, number];
		} else {
			const footerHeight = pageHeight - (pageHeight * 0.75 - 120);
			const centerPoint = map.project([lng, lat]);
			const bottomPoint = centerPoint.y - (footerHeight / 2) * zoomAdjustment;
			const adjustedLat = map.unproject([centerPoint.x, bottomPoint]).lat;

			return [lng, adjustedLat] as [number, number];
		}
	}, [dodge, debouncedLat, debouncedLng]);

	return { dodge, correctedCenter: undodge };
}
