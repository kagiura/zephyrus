// using seraph-pin-shadow.svg and seraph-pin.svg,
// make a leaflet marker component.
// both are 100w x 120h, and their center is at (50, 100)

// use the normal leaflet library
import { icon } from "leaflet";

const sizeMultiplier = 0.3;

export const seraphIcon = icon({
  iconUrl: "/seraph-pin.svg",
  shadowUrl: "/seraph-pin-shadow.svg",

  iconSize: [100 * sizeMultiplier, 120 * sizeMultiplier],
  iconAnchor: [50 * sizeMultiplier, 100 * sizeMultiplier],
  shadowSize: [100 * sizeMultiplier, 120 * sizeMultiplier],
  shadowAnchor: [50 * sizeMultiplier, 100 * sizeMultiplier],
  popupAnchor: [0 * sizeMultiplier, -100 * sizeMultiplier],
});
