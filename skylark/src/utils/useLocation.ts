// react hook to get user's current location

import { useGeolocation } from "@uidotdev/usehooks";

// interface GeolocationPositionError {
// 	message: string;
// }

// interface GeolocationPosition {
// 	coords: {
// 		latitude: number;
// 		longitude: number;
// 	};
// }

type Location =
	| {
			location: null;
			timestamp: null;
			error: null;
			loading: true;
	  }
	| {
			location: {
				lat: number;
				lng: number;
			};
			timestamp: number;
			error: false;
			loading: false;
	  }
	| {
			location: null;
			timestamp: null;
			error: GeolocationPositionError;
			loading: false;
	  };

// wrapper for useGeoLocation
export default function useLocation() {
	// const [loading, setLoading] = useState(true);
	// const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
	// 	null,
	// );
	// const [error, setError] = useState<GeolocationPositionError | null>(null);

	// // above, but keep watching for location changes
	// useEffect(() => {
	// 	if (!navigator.geolocation) {
	// 		setError({ message: "Geolocation is not supported" });
	// 		return;
	// 	}

	// 	function getLocation() {
	// 		function success(position: GeolocationPosition) {
	// 			setLocation({
	// 				lat: position.coords.latitude,
	// 				lng: position.coords.longitude,
	// 			});
	// 			setLoading(false);
	// 		}

	// 		function failure(error: GeolocationPositionError) {
	// 			setError(error);
	// 			setLoading(false);
	// 		}

	// 		const watchId = navigator.geolocation.watchPosition(success, failure);
	// 		return watchId;
	// 	}

	// 	let watchId = getLocation();

	// 	setTimeout(
	// 		() => {
	// 			navigator.geolocation.clearWatch(watchId);
	// 			const newWatchId = getLocation();
	// 			watchId = newWatchId;
	// 		},
	// 		1000 * 60 * 1,
	// 	); // every 1 minutes

	// 	return () => {
	// 		navigator.geolocation.clearWatch(watchId);
	// 	};
	// }, []);

	const { latitude, longitude, error, timestamp, loading } = useGeolocation({
		enableHighAccuracy: true,
		maximumAge: 1000 * 20, // 20 secs
	});
	if (loading) {
		return {
			location: null,
			error: null,
			loading,
			timestamp: null,
		} as Location;
	}
	if (error || !latitude || !longitude || !timestamp) {
		console.error(error, {
			latitude,
			longitude,
			timestamp,
		});
		return {
			location: null,
			error,
			loading,
			timestamp,
		} as Location;
	}

	return {
		location: {
			lat: latitude,
			lng: longitude,
		},
		error: false,
		loading,
		timestamp,
	} as Location;
}
