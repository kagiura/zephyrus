"use client";

import { booleanPointInPolygon } from "@turf/boolean-point-in-polygon";
import { useEffect, useMemo, useState } from "react";
import { Marker } from "react-map-gl/mapbox";

import styles from "./MapMarkerYou.module.css";

import { SINGAPORE_BOUNDS } from "@/data/singaporeBounds";
import { useMapState } from "@/utils/mapState";
import useLocation from "@/utils/useLocation";
import { usePathname } from "next/navigation";

export default function MapMarkerYou() {
	const { location, loading } = useLocation();
	const { flyTo } = useMapState();
	const pathname = usePathname();
	const isOnFirstPage = useMemo(() => {
		return pathname === "/";
	}, [pathname]);

	const withinBounds = useMemo(() => {
		if (!location) return false;
		return booleanPointInPolygon(
			[location.lng, location.lat],
			SINGAPORE_BOUNDS,
		);
	}, [location]);

	const [zoomedToUserLocation, setZoomedToUserLocation] = useState(false);
	// if user's location became available,zoom to user location
	useEffect(() => {
		if (!zoomedToUserLocation && location && flyTo) {
			if (!withinBounds) {
				// alert("Your location is outside of Singapore. Please allow location access only if you are in Singapore.");
				setZoomedToUserLocation(true);
				return;
			}
			if (!isOnFirstPage) {
				return;
			}
			flyTo(location);
			setZoomedToUserLocation(true);
		}
	}, [location, withinBounds, loading, flyTo, zoomedToUserLocation]);

	if (loading || !location || !withinBounds) {
		return null;
	}
	return (
		<Marker latitude={location.lat} longitude={location.lng} anchor="center">
			<div className={styles.youMarker} />
		</Marker>
	);
}
