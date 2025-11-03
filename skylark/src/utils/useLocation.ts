// react hook to get user's current location
import { ISB_BOUNDS, NUS_CAMPUS_BOUNDS, SINGAPORE_BOUNDS } from "@/data/bounds";
import { booleanPointInPolygon } from "@turf/boolean-point-in-polygon";
import { useGeolocation } from "@uidotdev/usehooks";
import { useMemo } from "react";

const IT_LAT = 1.29731;
const IT_LNG = 103.77281;

const DEFUALT_LOCATION = {
	// lat: IT_LAT,
	// lng: IT_LNG,
	// latitude: IT_LAT,
	// longitude: IT_LNG,
};

type LocationDetails = {
	withinSingaporeBounds: boolean;
	withinNusBounds: boolean;
	withinIsbBounds: boolean;
};

type Location = (
	| {
			isLocationActive: false;
			timestamp: null;
			error: null;
			loading: true;
			lat: undefined;
			lng: undefined;
			latitude: undefined;
			longitude: undefined;
	  }
	| {
			isLocationActive: true;
			timestamp: number;
			error: false;
			loading: false;
			lat: number;
			lng: number;
			latitude: number;
			longitude: number;
	  }
	| {
			isLocationActive: false;
			timestamp: null;
			error: GeolocationPositionError;
			loading: false;
			lat: undefined;
			lng: undefined;
			latitude: undefined;
			longitude: undefined;
	  }
) &
	LocationDetails;

// wrapper for useGeoLocation
export default function useLocation() {
	const {
		// latitude, longitude,
		error,
		timestamp,
		loading,
	} = useGeolocation({
		enableHighAccuracy: true,
		maximumAge: 1000 * 20, // 20 secs
	});

	const [latitude, longitude] = [1.2951672158718233, 103.77116009853599];
	// const latitude = IT_LAT;
	// const longitude = IT_LNG;

	const withinSingaporeBounds = useMemo(() => {
		if (!latitude || !longitude) return false;
		return booleanPointInPolygon([longitude, latitude], SINGAPORE_BOUNDS);
	}, [latitude, longitude]);

	const withinNusBounds = useMemo(() => {
		if (!latitude || !longitude) return false;
		return (
			NUS_CAMPUS_BOUNDS.features.findIndex((f) => {
				return booleanPointInPolygon([longitude, latitude], f);
			}) !== -1
		);
	}, [latitude, longitude]);

	const withinIsbBounds = useMemo(() => {
		if (!latitude || !longitude) return false;
		return (
			ISB_BOUNDS.features.findIndex((f) => {
				return booleanPointInPolygon([longitude, latitude], f);
			}) !== -1
		);
	}, [latitude, longitude]);

	if (loading) {
		return {
			isLocationActive: false,
			error: null,
			loading,
			timestamp: null,
			withinSingaporeBounds,
			withinNusBounds,
			withinIsbBounds,
			...DEFUALT_LOCATION,
		} as Location;
	}
	if (error || !latitude || !longitude || !timestamp) {
		console.error(error, {
			latitude,
			longitude,
			timestamp,
		});
		return {
			isLocationActive: false,
			error,
			loading,
			timestamp,
			withinSingaporeBounds,
			withinNusBounds,
			withinIsbBounds,
			...DEFUALT_LOCATION,
		} as Location;
	}

	return {
		isLocationActive: true,
		error: false,
		loading,
		timestamp,
		withinSingaporeBounds,
		withinNusBounds,
		withinIsbBounds,
		lat: latitude,
		lng: longitude,
		latitude,
		longitude,
	} as Location;
}
