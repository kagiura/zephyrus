import { IMDF_AMENITIES, IMDF_UNITS } from "@/data/imdf";
import isbStops from "@/data/isbStops";
import { ISBStop } from "@/types/schema";
import { Amenity, Unit } from "@dazzlegarden/types/imdf";
import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";
import { LngLatLike, useMap } from "react-map-gl/mapbox";
import { useWindowSize } from "usehooks-ts";

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
	flyTo: (_: LngLatLike) => void;
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
});

export function useMapState() {
	return useContext(MapStateContext);
}

export function MapStateProvider({
	children,
	loaded,
	pushAwayCard = () => {},
	pullBackCard = () => {},
}: {
	children: React.ReactNode;
	loaded: boolean;
	pushAwayCard: () => void;
	pullBackCard: () => void;
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

	const { width: pageWidth, height: pageHeight } = useWindowSize();
	const desktop = useMemo(() => pageWidth > 768, [pageWidth]);

	const flyTo = useCallback(
		(position: LngLatLike) => {
			if (typeof map === "undefined") {
				// run it again when the map is ready
				setTimeout(() => flyTo(position), 200);
				return;
			}

			const zoom = map.getZoom();
			const targetZoom = Math.max(16, zoom);
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

				map.flyTo({
					center: [adjustedLng, lat],
					zoom: targetZoom,
				});
			} else {
				const footerHeight = pageHeight - (pageHeight * 0.75 - 120);
				const centerPoint = map.project([lng, lat]);
				const topPoint = centerPoint.y + (footerHeight / 2) * zoomAdjustment;
				const adjustedLat = map.unproject([centerPoint.x, topPoint]).lat;
				map.flyTo({
					center: [lng, adjustedLat],
					zoom: targetZoom,
				});
			}
		},
		[desktop, map, pageHeight],
	);

	const resetFocusedState = useCallback(() => {
		setFocusedStopName(null);
		setFocusedStops([]);
		setFocusedSegments([]);
	}, []);

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
			}}
		>
			{children}
		</MapStateContext.Provider>
	);
}
