import { featureCollection, lineString, polygon } from "@turf/helpers";
import { intersect } from "@turf/intersect";
import {
  Feature,
  FeatureCollection,
  LineString,
  MultiLineString,
  MultiPolygon,
  Point,
  Polygon,
} from "geojson";
import { Polygonal } from "@/types/imdf";
import explode from "@turf/explode";
import { polygonToLine } from "@turf/polygon-to-line";
import { booleanPointOnLine } from "@turf/boolean-point-on-line";
import { booleanPointInPolygon } from "@turf/boolean-point-in-polygon";
import { buffer } from "@turf/buffer";
import { pointToPolygonDistance } from "@turf/point-to-polygon-distance";
import cleanCoords from "@turf/clean-coords";

export function multiPolygonToPolygons(
  feature: Feature<Polygonal>,
): Feature<Polygon>[] {
  if (feature.geometry.type === "MultiPolygon") {
    const polygons = feature.geometry.coordinates.map((coords) =>
      polygon(coords),
    );
    return polygons;
  }
  const poly = polygon(feature.geometry.coordinates);
  return [poly];
}

export function getTouchingBorderBounds(
  feature1: Feature<any>,
  feature2: Feature<any>,
) {
  // inspiration gotten thanks to this guy https://gis.stackexchange.com/a/452034
  const int = intersect(featureCollection([feature1, feature2]));
  if (!int) {
    return false;
  }
  const geometries = multiPolygonToPolygons(int);
  return geometries;
}

export function multiLineToLines(
  feature:
    | Feature<LineString | MultiLineString>
    | FeatureCollection<LineString | MultiLineString>,
) {
  const lines: Feature<LineString>[] = [];
  if (feature.type === "FeatureCollection") {
    feature.features.forEach((line) => {
      if (line.geometry.type === "LineString") {
        lines.push(lineString(line.geometry.coordinates));
      } else if (line.geometry.type === "MultiLineString") {
        line.geometry.coordinates.forEach((coords) => {
          lines.push(lineString(coords));
        });
      }
    });
  } else if (feature.geometry.type === "LineString") {
    lines.push(lineString(feature.geometry.coordinates));
  } else if (feature.geometry.type === "MultiLineString") {
    feature.geometry.coordinates.forEach((coords) => {
      lines.push(lineString(coords));
    });
  }
  return lines;
}

export function getTouchingBorders(
  featureA: Feature<Polygonal>,
  featureB: Feature<Polygonal>,
) {
  const unitABuffered = buffer(featureA.geometry, 0.000025) as
    | Feature<Polygonal>
    | undefined;
  const unitBBuffered = buffer(featureB.geometry, 0.000025) as
    | Feature<Polygonal>
    | undefined;
  if (!unitABuffered || !unitBBuffered) {
    console.warn("Buffering failed for one of the features");
    return null;
  }
  const intersections = getTouchingBorderBounds(unitABuffered, unitBBuffered);
  if (!intersections) {
    return null;
  }

  return intersections
    .map((intersectionBounds) => {
      const pointsA = explode(featureA).features;
      const pointsB = explode(featureB).features;
      const multiLinesA = polygonToLine(featureA);
      const multiLinesB = polygonToLine(featureB);
      const linesA = multiLineToLines(multiLinesA);
      const linesB = multiLineToLines(multiLinesB);

      let polyAPointsInBounds = pointsA
        .filter((point) => booleanPointInPolygon(point, intersectionBounds))
        .filter(
          (point) =>
            linesB.some((l) => booleanPointOnLine(point, l.geometry)) ||
            pointToPolygonDistance(point, featureB) < 0.00005,
        );
      let polyBPPointsInBounds = pointsB
        .filter((point) => booleanPointInPolygon(point, intersectionBounds))
        .filter(
          (point) =>
            linesA.some((l) => booleanPointOnLine(point, l.geometry)) ||
            pointToPolygonDistance(point, featureA) < 0.00005,
        );

      const polyPointsInBounds = [
        ...polyAPointsInBounds,
        ...polyBPPointsInBounds,
      ];
      if (polyPointsInBounds.length < 2) {
        // console.warn("No points found in bounds for polygon A");
        return null;
      }
      const combinedLineString = cleanCoords(
        lineString(
          polyPointsInBounds.map((point) => point.geometry.coordinates),
        ),
      ) as Feature<LineString>;
      // remove duplicate points
      const cleanedCombinedLineString = lineString(
        combinedLineString.geometry.coordinates.filter(
          (coord, index, self) =>
            index ===
            self.findIndex((c) => c[0] === coord[0] && c[1] === coord[1]),
        ),
      );
      if (cleanedCombinedLineString.geometry.coordinates.length < 2) {
        // console.warn("Not enough points to form a line");
        return null;
      }
      return cleanedCombinedLineString;
    })
    .filter((line) => line !== null);
}

export function findEnclosingPolygonIndex(
  point: Point,
  polygons: (Polygon | MultiPolygon)[],
): number {
  for (let i = 0; i < polygons.length; i++) {
    const polygon = polygons[i];
    if (booleanPointInPolygon(point, polygon)) {
      return i;
    }
  }
  return -1; // Not found
}
