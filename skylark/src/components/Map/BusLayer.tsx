import BusAnimatedMarker from "./BusAnimatedMarker";
import BusLiveMarker from "./BusLiveMarker";
import BusSegments from "./BusSegments";
import BusStops from "./BusStops";

function BusLayer() {
	return (
		<>
			<BusSegments />
			<BusStops />
			<BusLiveMarker />
			<BusAnimatedMarker />
		</>
	);
}
export default BusLayer;
