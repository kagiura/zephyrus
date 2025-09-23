"use client";
import { Box, Button, Flex, ScrollArea, Text } from "@radix-ui/themes";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Layout.module.css";

import type { Map } from "leaflet";

import { SVGPlacementLayer } from "@/utils/svg";
// import { MapLibreTileLayer } from "./MapLibreTileLayer";

// dynamically import the MapContainer to avoid SSR issues
import { PortalContext } from "@/components/ControlPanelPortal";
import { MapContext, SVGDimensions } from "@/utils/useMap";
import clsx from "clsx";
import dynamic from "next/dynamic";
import { useMap } from "react-leaflet";
import DzgLogo from "./DzgLogo";
import { MapPortalContext, Node } from "./MapPortal";
import SVGEditorPanel from "./SVGEditorPanel";
import IMDFExport from "./IMDFExport";
import DzgExportImport from "./DzgExportImport";

const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
});

export default function Layout({ children }: { children?: React.ReactNode }) {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [portalActive, setPortalActive] = useState(false);
  const mapRef = useRef<Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const [dimensions, setDimensions] = useState<SVGDimensions | null>(null);

  const [portalRef, setPortalRef] = useState<HTMLElement | null>(null);
  const [layers, setLayers] = useState<SVGPlacementLayer[]>([]);

  const MemoLeafletMap = LeafletMap;

  const mapContext = useMemo(
    () => ({
      mapRef,
      dimensions,
      setDimensions,
      layers,
      setLayers,
      mapLoaded,
    }),
    [mapRef, dimensions, layers, mapLoaded],
  );

  return (
    <MapPortalContext.Provider value={{ nodes, setNodes }}>
      <PortalContext.Provider value={{ portalRef, setActive: setPortalActive }}>
        <MapContext.Provider value={mapContext}>
          <Box className={styles.pageWrapper}>
            <Flex className={styles.header} px="4" align="center">
              <DzgLogo className={styles.logo} />

              <Box style={{ flex: 1 }} />
              <DzgExportImport />
              <IMDFExport />
              <SVGEditorPanel>
                <Button size="2">Place SVG</Button>
              </SVGEditorPanel>
            </Flex>
            <Flex className={styles.page}>
              <Box asChild>
                <ScrollArea className={styles.controls}>
                  <Box ref={setPortalRef} px="4" />
                  <Box
                    className={clsx(portalActive && styles.activePortal)}
                    px="4"
                  >
                    <Box style={{ minHeight: "100vh" }}>{children}</Box>
                    <Box my="6">
                      <Text size="1" align="center" as="p" color="gray">
                        Dazzlegarden by Kyuu
                      </Text>
                    </Box>
                  </Box>
                </ScrollArea>
              </Box>
              <MemoLeafletMap>
                <InitiateMapInstance
                  mapRef={mapRef}
                  setMapLoaded={setMapLoaded}
                />
              </MemoLeafletMap>
            </Flex>
          </Box>
        </MapContext.Provider>
      </PortalContext.Provider>
    </MapPortalContext.Provider>
  );
}

function InitiateMapInstance({
  mapRef,
  setZoom,
  setMapLoaded,
}: {
  mapRef: React.MutableRefObject<Map | null>;
  setZoom?: (zoom: number) => void;
  setMapLoaded: (loaded: boolean) => void;
}) {
  const map = useMap();

  useEffect(() => {
    console.info("Map loaded mapRef", map);
    mapRef.current = map;
    map.on("zoom", () => {
      if (setZoom) {
        setZoom(map.getZoom());
      }
    });

    setMapLoaded(true);
  }, [map]);

  return null;
}
