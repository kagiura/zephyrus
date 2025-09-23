// @ts-ignore
import { createInterpolator } from "svg-path-interpolator";
import generateUUID from "./generateUUID";
import { cleanCoords } from "@turf/clean-coords";
import { polygon } from "@turf/helpers";
import { Feature, MultiPolygon, Polygon } from "geojson";

export interface Coordinate {
  x: number;
  y: number;
  id: string;
}

export interface SVGPlacementLayer {
  id: string;
  svg: Element;

  /**
   * @deprecated
   */
  coordinates: Coordinate[][];
  /**
   * @deprecated
   */
  transformedCoordinates?: Coordinate[][];

  originalPolygon: Feature<MultiPolygon>;
  transformedPolygon: Feature<MultiPolygon>;

  color: string;
  frame?: boolean;
  hidden: boolean;
  previewSvg?: string;
  opacity?: number;
}

export const getDimensionsFromSvg = (svg: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svg, "image/svg+xml");
  const svgElement = doc.querySelector("svg");
  if (!svgElement) return null;
  const viewBox = svgElement.getAttribute("viewBox");
  if (!viewBox) return null;
  // viewbox may be delimited with spaces or commas
  const [x, y, width, height] = viewBox.split(/[\s,]+/).map(parseFloat);
  return {
    x,
    y,
    width,
    height,
    viewbox: [x, y, width, height] as [number, number, number, number],
    size: [width, height] as [number, number], // for convenience
  };
};

export const simplifyPath: (_c: Coordinate[]) => Coordinate[] = (
  coords: Coordinate[],
) => {
  // // if along any three points, the middle point is within 0.1 of the line between the other two, remove it
  // const simplified: Coordinate[] = [];
  // for (let i = 0; i < coords.length; i++) {
  //   const current = coords[i];
  //   if (i === 0 || i === coords.length - 1) {
  //     simplified.push(current);
  //     continue;
  //   }
  //   const prev = coords[i - 1];
  //   const next = coords[i + 1];

  //   // calculate the distance from the middle point to the line between the other two
  //   const distance =
  //     Math.abs(
  //       (next.y - prev.y) * current.x -
  //         (next.x - prev.x) * current.y +
  //         next.x * prev.y -
  //         next.y * prev.x
  //     ) / Math.sqrt((next.y - prev.y) ** 2 + (next.x - prev.x) ** 2);

  //   if (distance > 0.1) {
  //     simplified.push(current);
  //   }
  // }

  // // run again until no more points are removed
  // if (simplified.length !== coords.length) {
  //   return simplifyPath(simplified);
  // }
  // // return the simplified path
  // return simplified;

  //  add first point to the end of the array
  const coordsWithFirst = [...coords, coords[0]];

  const cleaned = cleanCoords(
    polygon([coordsWithFirst.map((c) => [c.x, c.y])]),
  ) as Feature<Polygon>;
  // convert to Coordinate[]
  console.log("cleaned", cleaned);
  const simplified: Coordinate[] = cleaned.geometry.coordinates[0].map(
    (c, i) => ({
      x: c[0],
      y: c[1],
      id: generateUUID(),
    }),
  );
  return simplified;
};

const INTERPOLATOR_OPTIONS = {
  joinPathData: true,
  minDistance: 0.5,
  roundToNearest: 0.25,
  sampleFrequency: 0.01,
};

const int = await createInterpolator(INTERPOLATOR_OPTIONS, "/sax-wasm.wasm");
export const interpolateSvg = (
  // @ts-ignore
  bytes: Uint8Array<ArrayBuffer>,
  simplify = true,
) => {
  const interpolatedPath = int.processSVG(bytes) as number[];

  // output looks like [x1,y1,x2,y2,...] so we can convert it to an array of vertices
  const interpolatedVertices: Coordinate[] = [];
  for (let i = 0; i < interpolatedPath.length; i += 2) {
    const x = interpolatedPath[i];
    const y = -interpolatedPath[i + 1];
    interpolatedVertices.push({
      x,
      y,
      id: generateUUID(),
    });
  }

  if (simplify) return simplifyPath(interpolatedVertices);
  return interpolatedVertices;
};
