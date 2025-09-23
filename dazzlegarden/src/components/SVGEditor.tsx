"use client";
import {
  Box,
  Button,
  Card,
  DataList,
  Flex,
  IconButton,
  Progress,
  Separator,
  Text,
  TextField,
} from "@radix-ui/themes";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "react-toastify";
import styles from "./SVGEditor.module.css";

import type { LatLngExpression, Polyline as LeafletPolyline } from "leaflet";

import generateUUID from "@/utils/generateUUID";
import { kabsch } from "@/utils/math";
import {
  Coordinate,
  getDimensionsFromSvg,
  interpolateSvg,
  SVGPlacementLayer,
} from "@/utils/svg";
import { Element, SVG } from "@svgdotjs/svg.js";
// import { MapLibreTileLayer } from "./MapLibreTileLayer";
// import SVGPlacement from "./SVGPlacement";

// dynamically import the MapContainer to avoid SSR issues
import { svgToGeoJson } from "@/utils/svgToGeoJson";
import useMap from "@/utils/useMap";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { cleanCoords } from "@turf/clean-coords";
import { multiPolygon } from "@turf/helpers";
import { rewind } from "@turf/rewind";
import { truncate } from "@turf/truncate";
import clsx from "clsx";
import { Feature, FeatureCollection, MultiPolygon, Polygon } from "geojson";
import dynamic from "next/dynamic";
import { useDropzone } from "react-dropzone";
import { useLocalStorage } from "usehooks-ts";

const SVGPlacement = dynamic(() => import("./SVGPlacement"), { ssr: false });

const NUS_COORDS = [
  1.296, // latitude
  103.773, // longitude
] as [number, number];

const MARKER_1 = [NUS_COORDS[0] + 0.0025, NUS_COORDS[1] + 0.0025] as [
  number,
  number,
];
const MARKER_2 = [NUS_COORDS[0] - 0.0025, NUS_COORDS[1] - 0.0025] as [
  number,
  number,
];
const COLORS = [
  "#dd7878",
  "#ea76cb",
  "#8839ef",
  "#d20f39",
  "#e64553",
  "#fe640b",
  "#df8e1d",
  "#40a02b",
  "#179299",
  "#04a5e5",
  "#209fb5",
  "#1e66f5",
  "#7287fd",
].sort(() => Math.random() - 0.5);
const COLORS_LENGTH = COLORS.length;

function parseCoordinates(value: string) {
  // attempt to parse the value as a coordinate pair
  // if fail, return null
  const coords = value.split(",").map((c) => parseFloat(c.trim()));
  if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
    return coords as [number, number];
  }
  return null;
}

export default function SVGEditor({
  // active,
  children,
}: {
  active?: boolean;
  children?: React.ReactNode;
}) {
  //   debugger;
  const [progress, setProgress] = useState(-1);

  // SVG PLACEMENT
  // 5 markers for manipulating SVG: top right, bottom left, center, top left, bottom right
  // in order: free transform, free transform, translate, rotate, scale
  const [marker1, setMarker1] = useLocalStorage<[number, number]>(
    "marker1",
    MARKER_1
  );
  const [marker2, setMarker2] = useLocalStorage<[number, number]>(
    "marker2",
    MARKER_2
  );
  const [marker3, setMarker3] = useState<[number, number]>([0, 0]);
  const [marker4, setMarker4] = useState<[number, number]>([0, 0]);
  const [marker5, setMarker5] = useState<[number, number]>([0, 0]);

  const [frame, setFrame] = useState<Coordinate[][] | null>(null);
  const frameRef = useRef<LeafletPolyline | null>(null);

  const [filename, setFilename] = useState<string | null>(null);
  const { dimensions, setDimensions, layers, setLayers, mapRef } = useMap();
  const renderPolygons = useCallback(
    (
      dimensions: { width: number; height: number },
      marker1: number[],
      marker2: number[],
      newLayers?: SVGPlacementLayer[]
    ) => {
      if (!dimensions) return;

      const transformation = kabsch(
        dimensions.width,
        dimensions.height,
        0,
        0,
        marker1[0],
        -marker1[1],
        marker2[0],
        -marker2[1],
        true
      );

      setLayers((prev) =>
        (newLayers || prev).map((layer) => ({
          ...layer,
          transformedPolygon: layer.originalPolygon
            ? {
                ...layer.originalPolygon,
                geometry: {
                  ...layer.originalPolygon.geometry,
                  coordinates: layer.originalPolygon.geometry.coordinates.map(
                    (coords) =>
                      coords.map((v) =>
                        v.map((c) => [
                          transformation.function(c[0], c[1]).y,
                          transformation.function(c[0], c[1]).x,
                        ])
                      )
                  ),
                },
              }
            : layer.transformedPolygon,
        }))
      );
      setMarker3([
        (marker1[0] + marker2[0]) / 2,
        (marker1[1] + marker2[1]) / 2,
      ]);
      // for 4 and 5 we can just use the transformation function
      setMarker4([
        transformation.function(0, dimensions.height).x,
        transformation.function(0, dimensions.height).y,
      ]);
      setMarker5([
        transformation.function(dimensions.width, 0).x,
        transformation.function(dimensions.width, 0).y,
      ]);

      // set the ghost markers
      if (!frameRef.current && mapRef.current) {
        const polyline = require("leaflet").polyline;
        frameRef.current = polyline(
          [
            [0, 0],
            [dimensions.width, 0],
            [dimensions.width, dimensions.height],
            [0, dimensions.height],
            [0, 0],
          ] as LatLngExpression[],
          {
            color: "#0d8bfa",
            weight: 2,
            opacity: 1,
            // dotted
            // dashArray: "0.01, 6",
            interactive: false,
          }
        );
        if (frameRef.current) {
          mapRef.current.addLayer(frameRef.current);
        }
      }
      const newTransformedFrameCoordinates: LatLngExpression[] = [
        [0, 0],
        [dimensions.width, 0],
        [dimensions.width, dimensions.height],
        [0, dimensions.height],
        [0, 0],
      ].map((coord) => {
        const { x, y } = transformation.function(coord[0], coord[1]);
        return [x, y] as LatLngExpression;
      });
      frameRef.current?.setLatLngs(newTransformedFrameCoordinates);

      setFrame([
        newTransformedFrameCoordinates
          .map((coord) => coord as number[])
          .map(
            (coord) =>
              ({ x: coord[0], y: coord[1], id: generateUUID() }) as Coordinate
          ),
      ]);
    },
    [setLayers]
  );

  // use kabsch to get transformation from SVG coordinates to real world coordinates (markers)
  useEffect(() => {
    if (!dimensions || !marker1 || !marker2) return;
    renderPolygons(dimensions, marker1, marker2);
  }, [renderPolygons, dimensions, marker1, marker2]);

  const handleSvgUpload = useCallback(
    async (file: File) => {
      if (!file) return;

      setFilename(file.name);
      const reader = new FileReader();
      reader.onload = async (event) => {
        const svg = event.target?.result as string;
        const dimensions = getDimensionsFromSvg(svg);
        if (!dimensions) {
          toast.error("Invalid SVG file: No dimensions found.");
          return;
        }
        setDimensions(dimensions);

        // separate svg file into multiple svg files (layers),
        // with each svg file containing one path

        const svgLayers: Element[] = [];
        const svgPaths = SVG(svg).find("path");
        svgPaths.forEach((path) => {
          const newSvg = SVG()
            .add(path)
            .size(...dimensions.size)
            .viewbox(...dimensions.viewbox);
          svgLayers.push(newSvg);
        });

        // interpolate every layer using svg-path-interpolator
        const newLayers: SVGPlacementLayer[] = [];
        let progressCount = 0;
        setProgress(0);

        for (const layer of svgLayers) {
          const progressRatio = ++progressCount / svgLayers.length;

          // detect the path attribute, and split the path data string at every M command
          // this lets us handle paths with multiple segments, i.e. holes
          const pathElement = layer.findOne("path");
          const pathData = pathElement?.attr("d");
          if (
            !pathElement ||
            !pathData ||
            pathData.length === 0 ||
            typeof pathData !== "string"
          ) {
            console.warn("No path data found in layer", layer);
            continue;
          }

          const pathSegments = pathData.split(/(?=[Mm])/);
          const pathSegmentSVGs = pathSegments.map((segment) => {
            const newSvg = SVG()
              .add(SVG(`<path d="${segment}" />`))
              .size(dimensions.width, dimensions.height)
              .viewbox(...dimensions.viewbox);
            return newSvg;
          });

          const paths: Coordinate[][] = [];
          const polygons: FeatureCollection<Polygon>[] = [];
          for (const segmentSvg of pathSegmentSVGs) {
            const fileBytes = new TextEncoder().encode(segmentSvg.svg());
            const bytes = new Uint8Array(fileBytes);
            const path = interpolateSvg(bytes);
            paths.push(path);
            // get dom node for svg
            const svgNode = segmentSvg.node;
            const scale = 1;
            const a = svgToGeoJson(
              [
                [dimensions.height / scale, dimensions.width / scale],
                [0, 0],
              ],
              svgNode,
              9
            ) as FeatureCollection<Polygon>;
            if (a) {
              polygons.push(a);
            } else {
              console.warn("No polygon found for segment", segmentSvg);
            }
            // console.log("SVG to GeoJSON result", a);
          }
          // console.log(polygons, "POLY");

          const multipolygon = cleanCoords(
            rewind(
              truncate(
                cleanCoords(
                  multiPolygon([
                    polygons.map((p) => p.features[0].geometry.coordinates[0]),
                  ]),
                  {
                    mutate: true,
                  }
                ),
                { precision: 7, mutate: true }
              )
            )
          ) as Feature<MultiPolygon>;
          console.log(
            "Multipolygon",
            multipolygon
            // multiPolygon([
            //   polygons.map((p) => p.features[0].geometry.coordinates[0]),
            // ])
          );

          const generatedUUID = generateUUID();
          const color = COLORS[newLayers.length % COLORS_LENGTH];

          // generate a preview svg by
          // trimming the SVG to remove unnecessary space
          const path = layer.find("path")[0];
          const pathSize = path.bbox();
          // set viewbox
          const previewSVG = SVG()
            .add(path)
            .size(pathSize.width, pathSize.height)
            .viewbox(pathSize.x, pathSize.y, pathSize.width, pathSize.height);

          previewSVG.find("path").forEach((p) => {
            p.fill("none").stroke({ color, width: 1 });
            p.fill({ color, opacity: 0.2 });
            p.attr("vector-effect", "non-scaling-stroke");
          });
          newLayers.push({
            id: generatedUUID,
            // @ts-ignore
            svg: layer,
            coordinates: paths,
            color,
            previewSvg: previewSVG.svg(),
            originalPolygon: multipolygon,
            transformedPolygon: multipolygon,
          });

          setProgress(progressRatio * 100);
        }

        setLayers(newLayers);
        renderPolygons(dimensions, marker1, marker2, newLayers);
        setProgress(-1);
      };

      reader.readAsText(file);
    },
    [marker1, marker2, renderPolygons]
  );

  useEffect(() => {
    if (!mapRef.current || !frameRef.current) return;
    const shouldAddFrame = frame && frame.length > 0;
    if (shouldAddFrame && !mapRef.current.hasLayer(frameRef.current)) {
      // console.log("Adding frame layer");
      mapRef.current.addLayer(frameRef.current);
    } else if (!shouldAddFrame && mapRef.current.hasLayer(frameRef.current)) {
      // console.log("Removing frame layer");
      mapRef.current.removeLayer(frameRef.current);
    }

    return () => {
      if (mapRef.current && frameRef.current) {
        mapRef.current.removeLayer(frameRef.current);
      }
    };
  }, [frame]);

  const dataColumnWidth = useMemo(() => "80px", []);

  const {
    getRootProps,
    getInputProps,
    open,
    acceptedFiles,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    accept: {
      "image/svg+xml": [".svg"],
    },
    multiple: false,
  });

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      handleSvgUpload(acceptedFiles[0]);
    }
  }, [acceptedFiles, handleSvgUpload]);

  const [marker1Text, setMarker1Text] = useState(
    `${marker1[0].toFixed(8)}, ${marker1[1].toFixed(8)}`
  );
  const [marker2Text, setMarker2Text] = useState(
    `${marker2[0].toFixed(8)}, ${marker2[1].toFixed(8)}`
  );

  useEffect(() => {
    // only set value if parsed value is different
    if (!marker1 || !marker2) return;
    if (!marker1Text || !marker2Text) return;
    const parsedMarker1 = parseCoordinates(marker1Text);
    const parsedMarker2 = parseCoordinates(marker2Text);
    if (
      parsedMarker1 &&
      (parsedMarker1[0] !== marker1[0] || parsedMarker1[1] !== marker1[1])
    ) {
      setMarker1Text(`${marker1[0].toFixed(8)}, ${marker1[1].toFixed(8)}`);
    }
    if (
      parsedMarker2 &&
      (parsedMarker2[0] !== marker2[0] || parsedMarker2[1] !== marker2[1])
    ) {
      setMarker2Text(`${marker2[0].toFixed(8)}, ${marker2[1].toFixed(8)}`);
    }
  }, [marker1, marker2]);

  useEffect(() => {
    // if can be parsed correctly, set marker1Text to the formatted string
    try {
      const coords = marker1Text.split(",").map((c) => parseFloat(c.trim()));
      if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
        setMarker1([coords[0], coords[1]]);
      }
    } catch (e) {
      console.error("Invalid marker1Text format", e);
    }
  }, [marker1Text]);
  useEffect(() => {
    // if can be parsed correctly, set marker2Text to the formatted string
    try {
      const coords = marker2Text.split(",").map((c) => parseFloat(c.trim()));
      if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
        setMarker2([coords[0], coords[1]]);
      }
    } catch (e) {
      console.error("Invalid marker2Text format", e);
    }
  }, [marker2Text]);

  return (
    <>
      <Box
        {...getRootProps({})}
        className={clsx(
          styles.dropzone,
          (isFocused || isDragAccept || isDragReject) && styles.focused,
          isDragAccept && styles.accepted,
          isDragReject && styles.rejected
        )}
        py="3"
        px="4"
      >
        <input
          {...getInputProps()}
          // onChange={handleSvgUpload}
        />
        {progress >= 0 && <Progress value={progress} max={100} radius="none" />}

        {children}
        <Flex justify="start" align="center" mb="3" gap="2">
          <Text size="2" color="gray">
            Drag and drop or
          </Text>
          <Button onClick={open} size="1" variant="surface" color="gray">
            Upload file
          </Button>
        </Flex>
        <Separator size="4" />
        {/* <input type="file" /> */}
        <DataList.Root mt="4" size="1">
          <DataList.Item>
            <DataList.Label width={dataColumnWidth} minWidth={dataColumnWidth}>
              File Name
            </DataList.Label>
            <DataList.Value>{filename || "No file uploaded"}</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label width={dataColumnWidth} minWidth={dataColumnWidth}>
              Layers
            </DataList.Label>
            <DataList.Value>{layers.length}</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label width={dataColumnWidth} minWidth={dataColumnWidth}>
              Vertices
            </DataList.Label>
            <DataList.Value>
              {layers.reduce(
                (acc, layer) =>
                  acc + layer.coordinates.reduce((a, b) => a + b.length, 0),
                0
              )}
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label width={dataColumnWidth} minWidth={dataColumnWidth}>
              Dimensions
            </DataList.Label>
            <DataList.Value>
              {dimensions
                ? `${dimensions.width} × ${dimensions.height} px`
                : "Unknown"}
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label width={dataColumnWidth} minWidth={dataColumnWidth}>
              Marker 1
            </DataList.Label>
            <DataList.Value>
              <TextField.Root
                value={marker1Text}
                onChange={(e) => setMarker1Text(e.target.value)}
                placeholder="1.296, 103.773"
                size="1"
                style={{ width: "100%" }}
              />
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label width={dataColumnWidth} minWidth={dataColumnWidth}>
              Marker 2
            </DataList.Label>
            <DataList.Value>
              <TextField.Root
                value={marker2Text}
                onChange={(e) => setMarker2Text(e.target.value)}
                placeholder="1.293, 103.770"
                size="1"
                style={{ width: "100%" }}
              />
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label width={dataColumnWidth} minWidth={dataColumnWidth}>
              Reset Marker
            </DataList.Label>
            <DataList.Value>
              <Button
                size="1"
                variant="soft"
                onClick={() =>
                  setMarker1Text(
                    `${MARKER_1[0].toFixed(8)}, ${MARKER_1[1].toFixed(8)}`
                  )
                }
              >
                1
              </Button>
              <Button
                ml="2"
                size="1"
                variant="soft"
                onClick={() =>
                  setMarker2Text(
                    `${MARKER_2[0].toFixed(8)}, ${MARKER_2[1].toFixed(8)}`
                  )
                }
              >
                2
              </Button>
            </DataList.Value>
          </DataList.Item>
        </DataList.Root>

        {layers.length > 0 && (
          <Flex direction="column" mt="4">
            {layers.map((layer, index) => (
              <Flex key={layer.id} align="center" mb="2">
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
                    {layer.id.slice(0, 8)}
                  </Text>
                </Flex>
                <IconButton
                  ml="auto"
                  size="1"
                  variant="ghost"
                  onClick={() => {
                    setLayers((prev) =>
                      prev.map((l, i) =>
                        i === index ? { ...l, hidden: !l.hidden } : l
                      )
                    );
                  }}
                >
                  {layer.hidden ? <EyeClosedIcon /> : <EyeOpenIcon />}
                </IconButton>
              </Flex>
            ))}
          </Flex>
        )}
      </Box>

      <SVGPlacement
        layers={layers}
        marker1={marker1}
        setMarker1={setMarker1}
        marker2={marker2}
        setMarker2={setMarker2}
        marker3={marker3}
        setMarker3={setMarker3}
        marker4={marker4}
        setMarker4={setMarker4}
        marker5={marker5}
        setMarker5={setMarker5}
        frame={frame}
        frameRef={frameRef}
        visible
      />
    </>
  );
}
