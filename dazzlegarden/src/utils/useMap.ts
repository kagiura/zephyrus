"use client";
import { Map } from "leaflet";
import { SVGPlacementLayer } from "./svg";
import { createContext, useContext } from "react";

export interface SVGDimensions {
  x: number;
  y: number;
  width: number;
  height: number;
  viewbox: [number, number, number, number];
}

// context to provide all child layers with map, layers, and dimensions
interface MapContextProps {
  mapRef: React.MutableRefObject<Map | null>;
  dimensions: SVGDimensions | null;
  setDimensions: React.Dispatch<React.SetStateAction<SVGDimensions | null>>;
  layers: SVGPlacementLayer[];
  setLayers: React.Dispatch<React.SetStateAction<SVGPlacementLayer[]>>;
  mapLoaded: boolean;
}

// react context
export const MapContext = createContext<MapContextProps | null>(null);

// export hooks to use the context
export default function useMap() {
  const context = useContext(MapContext);
  if (!context) {
    console.error("useMapContext must be used within a MapProvider");
    throw new Error("useMapContext must be used within a MapProvider");
  }
  return context;
  // return {};
}
