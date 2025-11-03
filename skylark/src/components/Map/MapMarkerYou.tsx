"use client";

import { booleanPointInPolygon } from "@turf/boolean-point-in-polygon";
import { useEffect, useMemo, useState } from "react";
import { Marker } from "react-map-gl/mapbox";

import styles from "./MapMarkerYou.module.css";

import { ISB_BOUNDS, SINGAPORE_BOUNDS } from "@/data/bounds";
import { useMapState } from "@/utils/mapState";
import useLocation from "@/utils/useLocation";
import { usePathname } from "next/navigation";

export default function MapMarkerYou() {
	const { latitude, longitude, isLocationActive, withinIsbBounds } =
		useLocation();
	const { flyTo } = useMapState();
	const pathname = usePathname();
	const isOnFirstPage = useMemo(() => {
		return pathname === "/";
	}, [pathname]);

	const [zoomedToUserLocation, setZoomedToUserLocation] = useState(false);
	// if user's location became available,zoom to user location
	useEffect(() => {
		if (!zoomedToUserLocation && isLocationActive && flyTo) {
			if (!withinIsbBounds) {
				// alert("Your location is outside of Singapore. Please allow location access only if you are in Singapore.");
				setZoomedToUserLocation(true);
				return;
			}
			if (!isOnFirstPage) {
				return;
			}
			flyTo([longitude, latitude]);
			setZoomedToUserLocation(true);
		}
	}, [
		location,
		withinIsbBounds,
		isLocationActive,
		flyTo,
		zoomedToUserLocation,
	]);

	if (!isLocationActive || !withinIsbBounds) {
		return null;
	}
	return (
		<Marker latitude={latitude} longitude={longitude} anchor="center">
			<div className={styles.youMarker} />
		</Marker>
	);
}
