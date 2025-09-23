"use client";
import styles from "./SVGPlacement.module.css";
import { Dispatch, memo, SetStateAction } from "react";

// leaflet css
import "leaflet/dist/leaflet.css";
import {
  LatLngExpression,
  Marker as LeafletMarker,
  Polyline as LeafletPolyline,
} from "leaflet";
import { GeoJSON } from "react-leaflet/GeoJSON";
import { Coordinate, SVGPlacementLayer } from "@/utils/svg";
import { rotate, scale, translate } from "@/utils/math";
import SVGPlacementVertex from "./SVGPlacementVertex";
import { MapPortal } from "./MapPortal";
const SVGPlacement = memo(function SVGPlacement({
  layers,
  marker1,
  setMarker1,
  marker2,
  setMarker2,
  marker3,
  setMarker3,
  marker4,
  setMarker4,
  marker5,
  setMarker5,
  frame,
  frameRef,
  visible = true,
}: {
  layers: SVGPlacementLayer[];
  marker1: [number, number];
  marker2: [number, number];
  marker3: [number, number];
  marker4: [number, number];
  marker5: [number, number];
  setMarker1: Dispatch<SetStateAction<[number, number]>>;
  setMarker2: Dispatch<SetStateAction<[number, number]>>;
  setMarker3: Dispatch<SetStateAction<[number, number]>>;
  setMarker4: Dispatch<SetStateAction<[number, number]>>;
  setMarker5: Dispatch<SetStateAction<[number, number]>>;
  frame: Coordinate[][] | null;
  frameRef: React.RefObject<LeafletPolyline | null>;
  visible?: boolean;
}) {
  console.log("SVGPlacement", layers);
  if (!visible) return null;
  return (
    <MapPortal id="svg-editor-map-portal">
      {layers.map((layer) =>
        !layer.hidden ? (
          <GeoJSON
            // force mutation to update the layer
            key={layer.id + JSON.stringify(layer.transformedPolygon)}
            data={layer.transformedPolygon}
            style={{
              color: layer.color,
              fill: !layer.frame,
              fillColor: layer.color,
              fillOpacity: 0.2 * (layer.opacity || 1),
              weight: 2,
              opacity: layer.opacity || 1,
            }}
            pathOptions={layer.opacity ? { opacity: layer.opacity } : {}}
          />
        ) : null,
      )}
      <SVGPlacementVertex position={marker1} setPosition={setMarker1} />
      <SVGPlacementVertex position={marker2} setPosition={setMarker2} />

      <SVGPlacementVertex
        position={marker3}
        setPosition={setMarker3}
        onDrag={(e, map) => {
          const thisMarker = e.target as LeafletMarker;
          const currentLatLng = thisMarker.getLatLng();

          const transform = translate(marker3, [
            currentLatLng.lat,
            currentLatLng.lng,
          ] as [number, number]);

          if (frameRef.current && frame) {
            frameRef.current.setLatLngs(
              frame.map((coord) => {
                return coord.map((p) => {
                  return transform([p.x, p.y]);
                });
              }),
            );
          }
        }}
        onDragEnd={(oldLatLng, newLatLng) => {
          const transform = translate(oldLatLng, newLatLng);
          setMarker1(transform);
          setMarker2(transform);
        }}
        className={styles.marker3}
      />
      <SVGPlacementVertex
        key="marker4"
        position={marker4}
        setPosition={setMarker4}
        // on drag, keep this marker's position the same distance from the center
        onDrag={(e) => {
          const thisMarker = e.target as L.Marker;
          const currentLatLng = thisMarker.getLatLng();
          const transform = rotate(marker3, marker4, [
            currentLatLng.lat,
            currentLatLng.lng,
          ] as [number, number]);

          const newLatLng = transform(marker4);
          thisMarker.setLatLng(newLatLng);

          if (frameRef.current && frame) {
            frameRef.current.setLatLngs(
              frame.map((coord) => {
                return coord.map((p) => {
                  return transform([p.x, p.y]);
                });
              }),
            );
          }
        }}
        onDragEnd={(old, latlng) => {
          const transform = rotate(marker3, old, latlng as [number, number]);
          setMarker1(transform);
          setMarker2(transform);
        }}
        className={styles.marker4}
      />
      <SVGPlacementVertex
        position={marker5}
        setPosition={setMarker5}
        onDrag={(e) => {
          const thisMarker = e.target as LeafletMarker;
          const currentLatLng = thisMarker.getLatLng();
          const transform = scale(marker3, marker5, [
            currentLatLng.lat,
            currentLatLng.lng,
          ] as [number, number]);

          const newLatLng = transform(marker5);
          thisMarker.setLatLng(newLatLng);

          if (frameRef.current && frame) {
            const newTransformedFrameCoordinates: LatLngExpression[][] =
              frame.map((coord) => {
                return coord.map((p) => {
                  return transform([p.x, p.y]);
                });
              });
            frameRef.current.setLatLngs(newTransformedFrameCoordinates);
          }
        }}
        onDragEnd={(oldLatLng, newLatLng) => {
          const transform = scale(marker3, oldLatLng, newLatLng);
          setMarker1(transform);
          setMarker2(transform);
        }}
        className={styles.marker5}
      />
    </MapPortal>
  );
});

export default SVGPlacement;
