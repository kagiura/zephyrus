"use client";
import "mapbox-gl/dist/mapbox-gl.css";
import { memo, useMemo } from "react";
import { Layer, Source, useMap } from "react-map-gl/mapbox";

import isbStopPairs from "@/data/isbStopPairs";
import isbStopPairGeojson from "@/data/isbStopPairsGeojson";
import { FocusedSegment, useMapState } from "@/utils/mapState";

function BusSegments() {
	const { focusedSegments } = useMapState();
	const stopPairSource = useMemo(() => {
		return isbStopPairs.map((pair) => {
			return (
				<Source
					key={pair.fromName + "__" + pair.toName}
					id={pair.fromName + "__" + pair.toName}
					type="geojson"
					data={isbStopPairGeojson(pair.fromName, pair.toName)}
				/>
			);
		});
	}, []);
	return (
		<>
			<Layer id="isb-segments" type="slot" />
			{stopPairSource}
			{isbStopPairs.map((pair) => {
				const focus = focusedSegments?.find(
					(segment) =>
						segment.from === pair.fromName && segment.to === pair.toName,
				);

				return (
					<MemoizedBusSegment
						key={pair.fromName + "__" + pair.toName}
						pair={pair}
						focusedSegment={focus}
					/>
				);
			})}
		</>
	);
}
export default BusSegments;

const MemoizedBusSegment = memo(function BusSegment({
	pair,
	focusedSegment,
}: {
	pair: (typeof isbStopPairs)[0];
	focusedSegment?: FocusedSegment;
}) {
	const paint = focusedSegment
		? {
				"line-color": focusedSegment.color,
				"line-width": 4.5,
				"line-opacity": 1,
				"line-emissive-strength": 1,
			}
		: {
				"line-color": "#ffffff",
				"line-width": 0,
				"line-opacity": 0,
				"line-emissive-strength": 1,
			};

	return (
		<Layer
			key={pair.fromName + "__" + pair.toName}
			id={pair.fromName + "__" + pair.toName}
			type="line"
			source={pair.fromName + "__" + pair.toName}
			layout={{
				"line-join": "round",
				"line-cap": "round",
			}}
			paint={paint}
			slot="isb-segments"
		/>
	);
});
