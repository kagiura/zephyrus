import { DEFAULT_LAT, DEFAULT_LNG } from "@/data/geographicDefaults";
import { IMDF_AMENITIES, IMDF_UNITS } from "@/data/imdf";
import isbStops from "@/data/isbStops";
import { ISBStop } from "@/types/schema";
import { Amenity, Unit } from "@dazzlegarden/types/imdf";
import { useDebounce } from "@uidotdev/usehooks";
import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";
import { LngLatLike, useMap } from "react-map-gl/mapbox";
import { useWindowSize } from "usehooks-ts";
import { useDodgeUI } from "./useDodgeUI";

export type FocusedSegment = {
	from: string;
	to: string;
	// Hex WITH the #
	color: string;
};

export type FocusedStop = {
	name: string;
	color: string;
	interchange?: boolean;
	service?: string;
};

export const MapStateContext = createContext<{
	loaded: boolean;
	flyTo: (_: LngLatLike, _z?: number) => void;
	pushAwayCard: () => void;
	pullBackCard: () => void;
	levelOrdinal: number;
	setLevelOrdinal: React.Dispatch<React.SetStateAction<number>>;
	focusedUnitIDs: string[] | null;
	focusedUnits: (Unit | null)[] | null;
	focusedAmenityID: string | null;
	focusedAmenity: Amenity | null;
	focusedStopName: string | null;
	focusedStop: ISBStop | null;
	focusedStops: FocusedStop[];
	focusedSegments: FocusedSegment[];
	setFocusedUnitIDs: React.Dispatch<React.SetStateAction<string[] | null>>;
	setFocusedAmenityID: React.Dispatch<React.SetStateAction<string | null>>;
	setFocusedStopName: React.Dispatch<React.SetStateAction<string | null>>;
	setFocusedStops: React.Dispatch<React.SetStateAction<FocusedStop[]>>;
	setFocusedSegments: React.Dispatch<React.SetStateAction<FocusedSegment[]>>;
	resetFocusedState: () => void;
	lng: number;
	lat: number;
	debouncedLng: number;
	debouncedLat: number;
}>({
	loaded: false,
	flyTo: (_: LngLatLike) => {},
	levelOrdinal: 0,
	setLevelOrdinal: () => {},
	pushAwayCard: () => {},
	pullBackCard: () => {},
	setFocusedStopName: () => {},
	setFocusedStops: () => {},
	setFocusedSegments: () => {},
	setFocusedUnitIDs: () => {},
	setFocusedAmenityID: () => {},
	focusedUnitIDs: null,
	focusedUnits: null,
	focusedAmenityID: null,
	focusedAmenity: null,
	focusedStopName: null,
	focusedStop: null,
	focusedStops: [],
	focusedSegments: [],
	resetFocusedState: () => {},
	lng: DEFAULT_LNG,
	lat: DEFAULT_LAT,
	debouncedLng: DEFAULT_LNG,
	debouncedLat: DEFAULT_LAT,
});

export function useMapState() {
	return useContext(MapStateContext);
}

export function MapStateProvider({
	children,
	loaded,
	pushAwayCard = () => {},
	pullBackCard = () => {},
	lng,
	lat,
}: {
	children: React.ReactNode;
	loaded: boolean;
	pushAwayCard: () => void;
	pullBackCard: () => void;
	lng: number;
	lat: number;
}) {
	const { map } = useMap();

	const [levelOrdinal, setLevelOrdinal] = useState<number>(0);
	const [focusedStopName, setFocusedStopName] = useState<string | null>(null);
	const [focusedStops, setFocusedStops] = useState<FocusedStop[]>([]);
	const [focusedSegments, setFocusedSegments] = useState<FocusedSegment[]>([]);
	const [focusedUnitIDs, setFocusedUnitIDs] = useState<string[] | null>(null);
	const [focusedAmenityID, setFocusedAmenityID] = useState<string | null>(null);

	const focusedStop = useMemo(
		() => isbStops.find((stop) => stop.name === focusedStopName) || null,
		[focusedStopName],
	);
	const focusedUnits = useMemo(
		() =>
			focusedUnitIDs?.map(
				(id) => IMDF_UNITS.features.find((u) => u.id === id) || null,
			) || null,
		[focusedUnitIDs],
	);
	const focusedAmenity = useMemo(
		() =>
			IMDF_AMENITIES.features.find(
				(amenity) => amenity.id === focusedAmenityID,
			) || null,
		[focusedAmenityID],
	);

	const { dodge } = useDodgeUI();
	const flyTo = useCallback(
		(position: LngLatLike, minZoom?: number) => {
			if (typeof map === "undefined") {
				// run it again when the map is ready
				setTimeout(() => flyTo(position, minZoom), 500);
				return;
			}

			const zoom = map.getZoom();
			const targetZoom = Math.max(minZoom || 16, zoom);
			// set the map's center to the spotlight point
			const adjustedPosition = dodge(position, targetZoom) || position;
			map.flyTo({
				center: adjustedPosition,
				zoom: targetZoom,
			});
		},
		[map, dodge],
	);

	const resetFocusedState = useCallback(() => {
		setFocusedStopName(null);
		setFocusedStops([]);
		setFocusedSegments([]);
	}, []);

	const debouncedLng = useDebounce(lng, 300);
	const debouncedLat = useDebounce(lat, 300);

	return (
		<MapStateContext.Provider
			value={{
				loaded,
				flyTo,
				levelOrdinal,
				setLevelOrdinal,
				pushAwayCard,
				pullBackCard,
				focusedUnitIDs,
				focusedUnits,
				focusedAmenityID,
				focusedAmenity,
				focusedStopName,
				focusedStop,
				focusedStops,
				focusedSegments,
				setFocusedUnitIDs,
				setFocusedAmenityID,
				setFocusedStopName,
				setFocusedStops,
				setFocusedSegments,
				resetFocusedState,
				lng,
				lat,
				debouncedLng,
				debouncedLat,
			}}
		>
			{children}
		</MapStateContext.Provider>
	);
}
