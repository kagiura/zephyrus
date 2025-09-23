// special thanks to ma1508e

import { LatLngExpression } from "leaflet";

export const distance = (a: [number, number], b: [number, number]) => {
  return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2);
};

/**
 * Kabsch algorithm to find the transformation between two sets of points.
 * @param ax1 - x coordinate of first point in set A
 * @param ay1 - y coordinate of first point in set A
 * @param ax2 - x coordinate of second point in set A
 * @param ay2 - y coordinate of second point in set A
 * @param bx1 - x coordinate of first point in set B
 * @param by1 - y coordinate of first point in set B
 * @param bx2 - x coordinate of second point in set B
 * @param by2 - y coordinate of second point in set B
 * @param flipVertical - whether to flip the y coordinate (default: false)
 * @returns An object containing the transformation parameters:
 * - scale: The scaling factor between the two sets of points.
 * - angle: The rotation angle in degrees between the two sets of points.
 * - translationX: The x translation needed to align the two sets of points.
 * - translationY: The y translation needed to align the two sets of points.
 * - scaleCenterX: The x coordinate of the center of scaling.
 * - scaleCenterY: The y coordinate of the center of scaling.
 * - function: A function that takes x and y coordinates and returns the transformed coordinates as an object with x, y, and latlng properties.
 */
export const kabsch = (
  ax1: number,
  ay1: number,
  ax2: number,
  ay2: number,
  bx1: number,
  by1: number,
  bx2: number,
  by2: number,
  flipVertical: boolean = false,
) => {
  // find set of transformations to be done to A to get B
  // https://en.wikipedia.org/wiki/Kabsch_algorithm
  //
  // The algorithm can be broken down into three main steps,
  // simplified to 2 points
  // 1. Find the center of mass for each point set.
  // 2. Find scaling factor and translation vector.
  // 3. Find the optimal rotation angle.

  // 1. Find the center of mass for each point set.
  const ax = (ax1 + ax2) / 2;
  const ay = (ay1 + ay2) / 2;
  const bx = (bx1 + bx2) / 2;
  const by = (by1 + by2) / 2;

  const aDist = Math.sqrt((ax1 - ax2) ** 2 + (ay1 - ay2) ** 2);
  const bDist = Math.sqrt((bx1 - bx2) ** 2 + (by1 - by2) ** 2);

  // 2. Find scaling factor and translation vector.
  const scale = bDist / aDist;
  const translationX = bx - ax;
  const translationY = by - ay;

  // 3. Find the optimal rotation angle. (in degrees)
  const aBearing = Math.atan2(ay2 - ay1, ax2 - ax1);
  const bBearing = Math.atan2(by2 - by1, bx2 - bx1);

  const angleRadians = bBearing - aBearing; // in radians
  const angle = angleRadians * (180 / Math.PI);

  const transformFunction = (x: number, y: number) => {
    // scale around the center
    const scaledX = scale * (x - ax) + ax;
    const scaledY = scale * (y - ay) + ay;

    // rotate around the center
    const rotatedX =
      Math.cos(angleRadians) * (scaledX - ax) -
      Math.sin(angleRadians) * (scaledY - ay) +
      ax;
    const rotatedY =
      Math.sin(angleRadians) * (scaledX - ax) +
      Math.cos(angleRadians) * (scaledY - ay) +
      ay;

    // translate
    const translatedX = rotatedX + translationX;
    const translatedY = rotatedY + translationY;
    return {
      x: translatedX,
      y: translatedY * (flipVertical ? -1 : 1), // flip vertical if needed
      latlng: [translatedX, translatedY] as LatLngExpression,
    };
  };

  return {
    scale,
    angle,
    translationX,
    translationY,
    scaleCenterX: ax,
    scaleCenterY: ay,
    function: transformFunction,
  };
};

export const translate = (
  oldLatLng: [number, number],
  newLatLng: [number, number],
) => {
  const deltaX = newLatLng[0] - oldLatLng[0];
  const deltaY = newLatLng[1] - oldLatLng[1];

  const transform = ([x, y]: [number, number]) => {
    // translate by delta
    return [x + deltaX, y + deltaY] as [number, number];
  };
  return transform;
};

export const rotate = (
  center: [number, number],
  oldLatLng: [number, number],
  newLatLng: [number, number],
) => {
  const originalAngle = Math.atan2(
    oldLatLng[1] - center[1],
    oldLatLng[0] - center[0],
  );
  const currentAngle = Math.atan2(
    newLatLng[1] - center[1],
    newLatLng[0] - center[0],
  );
  const angleDiff = currentAngle - originalAngle;

  const transform = ([x, y]: [number, number]) => {
    // rotate around the center
    return [
      center[0] +
        (x - center[0]) * Math.cos(angleDiff) -
        (y - center[1]) * Math.sin(angleDiff),
      center[1] +
        (x - center[0]) * Math.sin(angleDiff) +
        (y - center[1]) * Math.cos(angleDiff),
    ] as [number, number];
  };
  return transform;
};

export const scale = (
  center: [number, number],
  oldLatLng: [number, number],
  newLatLng: [number, number],
) => {
  const oldDistance = distance(oldLatLng, center);
  const newDistance = distance(newLatLng, center);
  const scale = newDistance / oldDistance;

  const transform = ([x, y]: [number, number]) => {
    // scale around the center
    return [
      center[0] + scale * (x - center[0]),
      center[1] + scale * (y - center[1]),
    ] as [number, number];
  };
  return transform;
};

const kabschScaleAndRotate = (
  center: [number, number],
  oldLatLng: [number, number],
  newLatLng: [number, number],
) => {
  const oldDeltaX = oldLatLng[0] - center[0];
  const oldDeltaY = oldLatLng[1] - center[1];
  const newDeltaX = newLatLng[0] - center[0];
  const newDeltaY = newLatLng[1] - center[1];

  const oldOpposite = [
    oldLatLng[0] - oldDeltaX - oldDeltaX,
    oldLatLng[1] - oldDeltaY - oldDeltaY,
  ] as [number, number];

  const newOpposite = [
    newLatLng[0] - newDeltaX - newDeltaX,
    newLatLng[1] - newDeltaY - newDeltaY,
  ] as [number, number];
  const transform = kabsch(
    ...oldOpposite,
    ...oldLatLng,
    ...newOpposite,
    ...newLatLng,
  );

  return ([x, y]: [number, number]) => transform.function(x, y);
};
