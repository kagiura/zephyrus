"use client";
import {
  BoxProps,
  Button,
  Card,
  Checkbox,
  Flex,
  Text,
  TextField,
} from "@radix-ui/themes";
import useMap from "@/utils/useMap";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { MultiPolygon, Position } from "geojson";
import { Polygon, polygon } from "leaflet";

import { Polygonal } from "@/types/imdf";
import styles from "./SVGLayersPanel.module.css";

function makeMultiPolygon(value: Polygonal) {
  if (value.type === "Polygon") {
    return {
      type: "MultiPolygon",
      coordinates: [value.coordinates],
    } as MultiPolygon;
  }
  return value;
}

function SVGLayersPanel({
  // value,
  // setValue = () => {},
  setCoordinatesValue = () => {},
  title = "SVG Layers",
  description = "Select SVG layers to add to the polygon.",
  children,
  ...props
}: BoxProps &
  Omit<TextField.RootProps, "value"> & {
    // value: string[];
    // setValue?: React.Dispatch<React.SetStateAction<string[]>>;
    setCoordinatesValue?: React.Dispatch<React.SetStateAction<Position[][][]>>;

    title?: React.ReactNode;
    description?: React.ReactNode;
    children?: React.ReactNode;
  }) {
  const { mapRef, mapLoaded, layers, setLayers } = useMap();
  const [isVisible, setIsVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedLayersToAdd, setSelectedLayersToAdd] = useState<string[]>([]);

  const highlightedSVGLayers = useRef<[string, Polygon][]>([]);

  const highlightSVGLayer = useCallback(
    (layerId: string) => {
      const layer = layers.find((l) => l.id === layerId);
      if (layer?.transformedCoordinates && mapRef.current) {
        const poly = polygon(
          layer.transformedCoordinates.map((path) =>
            path.map((v) => [v.x, v.y] as [number, number]),
          ),
        );
        mapRef.current.addLayer(poly);
        highlightedSVGLayers.current.push([layerId, poly]);
      }
    },
    [layers],
  );

  const unHighlightSVGLayer = useCallback((layerId: string) => {
    const index = highlightedSVGLayers.current.findIndex(
      ([id]) => id === layerId,
    );
    if (index !== -1) {
      const [_, poly] = highlightedSVGLayers.current[index];
      mapRef.current?.removeLayer(poly);
      highlightedSVGLayers.current.splice(index, 1);
    }
  }, []);

  useEffect(() => {
    if (isEditing) {
      // console.log("Editing mode enabled");
      setLayers((prev) =>
        prev.map((layer) => ({
          ...layer,
          opacity: 0.3,
        })),
      );
    } else {
      // console.log("Editing mode disabled");
      setLayers((prev) =>
        prev.map((layer) => ({
          ...layer,
          opacity: 1,
        })),
      );
      highlightedSVGLayers.current.forEach(([id, poly]) => {
        mapRef.current?.removeLayer(poly);
      });
      highlightedSVGLayers.current = [];
    }
  }, [isEditing, setLayers, mapRef]);

  const selectAll = useCallback(() => {
    setSelectedLayersToAdd(() =>
      layers.filter((l) => !l.hidden).map((l) => l.id),
    );
  }, [layers]);

  useEffect(() => {
    if (selectedLayersToAdd.length > 0) {
      const newCoords = selectedLayersToAdd.reduce<Position[][][]>(
        (acc, id) => {
          const layer = layers.find((l) => l.id === id);
          if (!layer) return [];
          // if (layer?.transformedCoordinates) {
          //   return layer.transformedCoordinates.map((p) =>
          //     p.map((v) => [v.x, v.y] as Position)
          //   );
          // }
          // return [];
          acc.push(...layer.transformedPolygon.geometry.coordinates);
          return acc;
        },
        [],
      );
      setCoordinatesValue(newCoords);
    }
  }, [selectedLayersToAdd]);
  return (
    <Card my="3">
      <Text size="2" weight="bold" as="p">
        {title}
      </Text>
      {layers.length === 0 && (
        <Text color="gray" size="2">
          Upload an SVG file to see the layers here.
        </Text>
      )}
      {layers.length > 0 && (
        <>
          <Text size="1" color="gray" as="p">
            {description}
          </Text>
          <Flex mt="2" justify="end">
            <Button variant="surface" color="gray" size="1" onClick={selectAll}>
              Select All
            </Button>
          </Flex>
          <Flex direction="column" mt="3">
            {layers
              .filter((l) => !l.hidden)
              .map((layer, index) => (
                <Flex
                  key={layer.id}
                  align="center"
                  mb="2"
                  onMouseEnter={() => highlightSVGLayer(layer.id)}
                  onMouseLeave={() => unHighlightSVGLayer(layer.id)}
                  onClick={() =>
                    setSelectedLayersToAdd((prev) =>
                      prev.includes(layer.id)
                        ? prev.filter((id) => id !== layer.id)
                        : [...prev, layer.id],
                    )
                  }
                >
                  <Card
                    className={styles.svgPreview}
                    dangerouslySetInnerHTML={{
                      __html: layer.previewSvg || "",
                    }}
                  ></Card>

                  <Flex direction="column" mx="3" style={{ flex: 1 }}>
                    <Text size="2" weight="bold">
                      Layer {index + 1}
                    </Text>
                    <Text size="1" color="gray">
                      {/* first eight letters of the uuid */}
                      {layer.id.slice(0, 8)}
                    </Text>
                  </Flex>
                  <Checkbox checked={selectedLayersToAdd.includes(layer.id)} />
                </Flex>
              ))}
          </Flex>
          {children}
        </>
      )}
    </Card>
  );
}
export default SVGLayersPanel;
