// import { MapLibreTileLayer } from "./MapLibreTileLayer";

// dynamically import the MapContainer to avoid SSR issues
import dynamic from "next/dynamic";
import { Pane } from "react-leaflet";
import MapPortalInsert from "./MapPortal";
import { DzgLeafletPanes } from "@/types/dzg";

import styles from "./LeafletMap.module.css";
// import { MapLibreTileLayer } from "./MapLibreTileLayer";
import { memo } from "react";
import { useTheme } from "next-themes";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  {
    ssr: false,
    loading: () => <div className={styles.map}>Loading map...</div>,
  },
);
const MapLibreTileLayer = dynamic(
  () =>
    import("./MapLibreTileLayer").then(
      (mod) =>
        mod.MapLibreTileLayer as typeof import("./MapLibreTileLayer").MapLibreTileLayer,
    ),
  { ssr: false },
);

const NUS_COORDS = [
  1.296, // latitude
  103.773, // longitude
] as [number, number];

const LeafletMap = memo(function LeafletMap({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { resolvedTheme } = useTheme();
  return (
    <MapContainer
      // ref={setMap}
      center={NUS_COORDS}
      zoom={16}
      scrollWheelZoom={true}
      className={styles.map}
      style={{ width: "100%" }}
      // maxZoom={20}
      maxZoom={30}
      zoomDelta={0.5}
    >
      {children}
      <Pane name={DzgLeafletPanes.level} style={{ zIndex: 330 }} />
      <Pane name={DzgLeafletPanes.units} style={{ zIndex: 350 }} />
      <Pane name={DzgLeafletPanes.unitsHighlighted} style={{ zIndex: 351 }} />
      <Pane name={DzgLeafletPanes.unitNumbers} style={{ zIndex: 352 }} />
      <Pane name={DzgLeafletPanes.openings} style={{ zIndex: 360 }} />
      <Pane
        name={DzgLeafletPanes.openingsInteractive}
        style={{ zIndex: 361 }}
      />
      <Pane name={DzgLeafletPanes.markers} style={{ zIndex: 470 }} />
      <MapLibreTileLayer
        attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
        url={
          resolvedTheme === "light"
            ? "https://tiles.stadiamaps.com/styles/alidade_smooth.json"
            : "https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json"
        }
      />
      <MapPortalInsert />
    </MapContainer>
  );
});
export default LeafletMap;
