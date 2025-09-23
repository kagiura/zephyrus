import { seraphIcon } from "@/utils/leaflet";
import { Marker, MarkerProps } from "react-leaflet";

function SeraphMarker(props: MarkerProps) {
  return <Marker icon={seraphIcon} {...props} />;
}
export default SeraphMarker;
