"use client";
import styles from "./SVGPlacement.module.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { Marker, useMap } from "react-leaflet";

import {
  divIcon,
  LeafletEvent,
  LeafletEventHandlerFnMap,
  Map,
  Marker as LeafletMarker,
} from "leaflet";

const SVGPlacementVertex = function SVGPlacementVertex({
  position,
  setPosition,
  onDrag = () => {},
  onDragEnd = () => {},
  className = "",
  ghost = false,
}: {
  position: [number, number];
  setPosition: (position: [number, number]) => void;
  onDrag?: (e: LeafletEvent, map: Map) => void;
  onDragEnd?: (
    oldLatLng: [number, number],
    newLatLng: [number, number],
    map: Map,
  ) => void;
  className?: string;
  ghost?: boolean;
}) {
  const map = useMap();
  const markerRef = useRef<LeafletMarker | null>(null);
  const [savedPosition, setSavedPosition] =
    useState<[number, number]>(position);
  const eventHandlers = useMemo<LeafletEventHandlerFnMap>(
    () => ({
      dragend() {
        console.info("Drag end");
        const marker = markerRef.current;
        if (marker != null) {
          const latLng = [marker.getLatLng().lat, marker.getLatLng().lng] as [
            number,
            number,
          ];
          setPosition(latLng);
          onDragEnd(savedPosition, latLng, map);
          setSavedPosition(latLng);
        }
      },
      drag(e) {
        console.info("Dragging", e);
        const marker = markerRef.current;
        if (marker != null) {
          onDrag(e, map);
        }
      },
    }),
    [savedPosition],
  );

  useEffect(() => {
    setSavedPosition(position);
  }, [position]);

  return (
    <Marker
      draggable={!ghost}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
      icon={divIcon({
        className: "custom-marker",
        html: `<div class="${styles.mapMarker} ${className}"></div>`,
      })}
      zIndexOffset={ghost ? 0 : 1000} // make sure the marker is on top of the other markers
    ></Marker>
  );
};

export default SVGPlacementVertex;
