"use client";
import {
  Button,
  Flex,
  FlexProps,
  IconButton,
  Text,
  TextField,
} from "@radix-ui/themes";
import FieldWrapper, { FieldProps } from "./FieldWrapper";
import useMap from "@/utils/useMap";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { MultiPolygon, Position } from "geojson";
// import { Polygon, polygon } from "leaflet";
import {
  ArrowTopRightIcon,
  Cross1Icon,
  PlusIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { Polygonal } from "@/types/imdf";
import ControlPanelPortal from "@/components/ControlPanelPortal";
import styles from "./FieldGeoMultiPolygon.module.css";
import { MapPortal } from "../MapPortal";
// import { GeoJSON } from "react-leaflet/GeoJSON";

import { multiPolygon } from "@turf/helpers";
import truncate from "@turf/truncate";
import dynamic from "next/dynamic";
import cleanCoords from "@turf/clean-coords";

const SVGLayersPanel = dynamic(() => import("@/components/SVGLayersPanel"), {
  ssr: false,
});
// dynamically import GeoJSON to avoid SSR issues
const GeoJSON = dynamic(
  () => import("react-leaflet/GeoJSON").then((mod) => mod.GeoJSON),
  {
    ssr: false,
  }
);

function makeMultiPolygon(value: Polygonal) {
  if (value.type === "Polygon") {
    return {
      type: "MultiPolygon",
      coordinates: [value.coordinates],
    } as MultiPolygon;
  }
  return value;
}

function FieldGeoMultiPolygon({
  value,
  setValue = () => {},
  name,
  description,
  valueKey,
  wrapperProps,
  required = false,
  ...props
}: FieldProps &
  Omit<TextField.RootProps, "value"> & {
    value: Polygonal;
    setValue?: React.Dispatch<React.SetStateAction<Polygonal>>;
    required?: boolean;
    wrapperProps?: FlexProps;
  }) {
  const { mapRef, mapLoaded, layers, setLayers } = useMap();
  const [isVisible, setIsVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  // const [selectedLayersToAdd, setSelectedLayersToAdd] = useState<string[]>([]);

  // const highlightedSVGLayers = useRef<[string, Polygon][]>([]);

  // const highlightSVGLayer = useCallback(
  //   (layerId: string) => {
  //     const layer = layers.find((l) => l.id === layerId);
  //     if (layer?.transformedCoordinates && mapRef.current) {
  //       const poly = polygon(
  //         layer.transformedCoordinates.map((path) =>
  //           path.map((v) => [v.x, v.y] as [number, number])
  //         )
  //       );
  //       mapRef.current.addLayer(poly);
  //       highlightedSVGLayers.current.push([layerId, poly]);
  //     }
  //   },
  //   [layers]
  // );

  // const unHighlightSVGLayer = useCallback((layerId: string) => {
  //   const index = highlightedSVGLayers.current.findIndex(
  //     ([id]) => id === layerId
  //   );
  //   if (index !== -1) {
  //     const [_, poly] = highlightedSVGLayers.current[index];
  //     mapRef.current?.removeLayer(poly);
  //     highlightedSVGLayers.current.splice(index, 1);
  //   }
  // }, []);

  useEffect(() => {
    if (isEditing) {
      // console.log("Editing mode enabled");
      setLayers((prev) =>
        prev.map((layer) => ({
          ...layer,
          opacity: 0.3,
        }))
      );
    } else {
      // console.log("Editing mode disabled");
      setLayers((prev) =>
        prev.map((layer) => ({
          ...layer,
          opacity: 1,
        }))
      );
      // highlightedSVGLayers.current.forEach(([id, poly]) => {
      //   mapRef.current?.removeLayer(poly);
      // });
      // highlightedSVGLayers.current = [];
    }
  }, [isEditing, setLayers, mapRef]);

  const polygons = useMemo(() => {
    if (value.type === "Polygon") {
      if (value.coordinates.length === 0) {
        return [];
      }
      return [value.coordinates];
    }
    return value.coordinates;
  }, [value]);

  const [highlightedLayers, setHighlightedLayers] = useState<number[]>([]);

  const polygonLayers = useMemo(() => {
    return polygons.map((p, i) => {
      const highlighted = highlightedLayers.includes(i);
      return (
        <GeoJSON
          key={`polygon-${i}` + JSON.stringify(p)}
          data={multiPolygon([p])}
          style={
            highlighted
              ? {
                  color: "var(--accent-10)",
                  fillColor: "var(--accent-9)",
                  fillOpacity: 0.2,
                  weight: 2,
                  opacity: 1,
                }
              : {
                  color: "var(--accent-8)",
                  fillColor: "var(--accent-9)",
                  fillOpacity: 0.1,
                  weight: 2,
                  opacity: 1,
                }
          }
        />
      );
    });
  }, [polygons.length, highlightedLayers]);

  // useEffect(() => {
  //   const leafletPolygons = [] as Polygon[];
  //   // when value is updated, render the polygons on the map
  //   // return a remove function to clear the polygons
  //   if (mapRef.current && value && (isEditing || isVisible)) {
  //     const polygonsToAdd = polygons.map((coords, i) => {
  //       const isHighlighted = highlightedLayers.includes(i);
  //       return polygon(
  //         coords.map((path) => path.map((v) => v as [number, number])),
  //         isHighlighted
  //           ? {
  //               color: "cyan",
  //               fillColor: "cyan",
  //               weight: 2,
  //               opacity: 1,
  //             }
  //           : {
  //               color: "blue",
  //               fillColor: "blue",
  //               weight: 2,
  //               opacity: 1,
  //             }
  //       );
  //     });
  //     leafletPolygons.push(...polygonsToAdd);
  //     // console.log("Rendering polygons on map", polygonsToAdd);
  //     leafletPolygons.forEach((poly) => {
  //       mapRef.current?.addLayer(poly);
  //     });
  //     // console.log("Polygons added to map", polygonsToAdd);
  //   }
  //   return () => {
  //     leafletPolygons.forEach((poly) => {
  //       mapRef.current?.removeLayer(poly);
  //     });
  //   };
  // }, [JSON.stringify(value), isEditing, isVisible, highlightedLayers]);

  const [coordinatesValue, setCoordinatesValue] = useState<Position[][][]>([]);

  const addPolygons = useCallback(
    (newPolygons: Position[][][]) => {
      console.log("Adding polygons", newPolygons);
      setValue((value) => {
        let currentPolygons = makeMultiPolygon(value);

        currentPolygons.coordinates.push(...newPolygons);
        return cleanCoords(
          truncate(currentPolygons, {
            precision: 7,
          })
        );
      });
    },
    [setValue]
  );
  return (
    <FieldWrapper
      name={name}
      description={description}
      valueKey={valueKey}
      {...wrapperProps}
    >
      {(isEditing || isVisible) && (
        <MapPortal id={"field-geo-multi-polygon-map"}>
          {polygonLayers}
        </MapPortal>
      )}
      <Flex gap="2">
        <Button
          onClick={() => setIsVisible((prev) => !prev)}
          variant="surface"
          style={{ flex: 2 }}
        >
          {isVisible
            ? "Hide Polygons"
            : `Show ${polygons.length} Polygon${
                polygons.length !== 1 ? "s" : ""
              }`}
        </Button>
        <Button onClick={() => setIsEditing(true)} style={{ flex: 1 }}>
          Edit
        </Button>
      </Flex>
      <ControlPanelPortal active={isEditing}>
        <Flex direction="column" gap="2" className={styles.controlPanel}>
          <Flex align="center" mt="3">
            <Text size="4" weight="bold" style={{ flex: 1 }}>
              Edit polygons
            </Text>

            <IconButton
              m="2"
              variant="ghost"
              onClick={() => setIsEditing(false)}
            >
              <Cross1Icon />
            </IconButton>
          </Flex>
          {polygons.length === 0 && (
            <Text color="gray" size="2">
              No polygons to edit. Use the SVG Layers to add new polygons.
            </Text>
          )}
          {polygons.map((polygonLayer, index) => (
            <Flex
              key={index}
              gap="2"
              align="center"
              onMouseEnter={() => {
                setHighlightedLayers((prev) => [...prev, index]);
              }}
              onMouseLeave={() => {
                setHighlightedLayers((prev) => prev.filter((i) => i !== index));
              }}
            >
              <Text style={{ flex: 1 }}>Polygon {index + 1}</Text>

              <IconButton
                variant="ghost"
                color="red"
                mr="1"
                onClick={() => {
                  setValue((p) => {
                    const prev = makeMultiPolygon(p);
                    return {
                      ...prev,
                      coordinates: prev.coordinates.filter(
                        (_, i) => i !== index
                      ),
                    };
                  });
                  setHighlightedLayers([]);
                }}
              >
                <TrashIcon />
              </IconButton>
              <IconButton
                // onClick={() => {
                //   if (!mapRef.current || !value) return;
                //   const coords = polygonLayer.map((p) =>
                //     p.map((c) => [c[1], c[0]] as Position)
                //   );
                //   const poly = polygon(
                //     coords.map((c) => c.map((v) => v as [number, number]))
                //   );
                //   // console.log("Flying to polygon", poly, poly.getBounds());
                //   mapRef.current.flyTo(poly.getBounds().getCenter(), 18, {
                //     animate: true,
                //     duration: 1,
                //   });
                // }}
                disabled
              >
                <ArrowTopRightIcon />
              </IconButton>
            </Flex>
          ))}
        </Flex>

        <SVGLayersPanel
          title="Add Polygons from SVG Layers"
          description="Select SVG layers to add their polygons to the map."
          setCoordinatesValue={setCoordinatesValue}
        >
          <Button
            variant="surface"
            size="1"
            color="gray"
            onClick={() => {
              if (coordinatesValue.length === 0) {
                console.warn("No coordinates to add");
                return;
              }
              addPolygons(coordinatesValue);
            }}
            disabled={coordinatesValue.length === 0}
          >
            <PlusIcon />
            Add Selected Layers
          </Button>
        </SVGLayersPanel>
      </ControlPanelPortal>
    </FieldWrapper>
  );
}
export default FieldGeoMultiPolygon;
