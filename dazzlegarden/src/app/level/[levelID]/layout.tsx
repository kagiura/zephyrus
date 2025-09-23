"use client";
import BackButton from "@/components/BackButton";
import { MapPortal } from "@/components/MapPortal";
import Title from "@/components/Title";
import { DzgLeafletPanes, DzgLevel, DzgOpening, DzgUnit } from "@/types/dzg";
import {
  IMDF_AMENITY_ICONS,
  IMDF_OCCUPANT_ICONS,
  IMDF_UNIT_COLORS,
} from "@/utils/imdf";
import useDzg from "@/utils/useDzg";
import { Cross1Icon } from "@radix-ui/react-icons";
import {
  Box,
  Card,
  Flex,
  IconButton,
  Inset,
  Separator,
  Text,
} from "@radix-ui/themes";
import { booleanWithin } from "@turf/boolean-within";
import { center } from "@turf/center";
import { tesselate } from "@turf/tesselate";
import { divIcon, DomEvent, LeafletMouseEvent } from "leaflet";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { GeoJSON, Marker, useMapEvents } from "react-leaflet";

import { newImdfCategories } from "@/data/newImdfCategories";
import { area } from "@turf/area";
import { multiPolygon, polygon } from "@turf/helpers";
import styles from "./layout.module.css";

function ClickOutsideHandler({ handler }: { handler: () => void }) {
  useMapEvents({
    click: (e) => {
      handler();
    },
  });
  return null;
}

function Unit({
  unit,
  level,
  unitIndex,
  open,
}: // setOpen,
{
  unit: DzgUnit;
  level: DzgLevel;
  unitIndex?: number;
  open: string | undefined;
  // setOpen: (value: string | undefined) => void;
}) {
  // const map = useMap();
  const router = useRouter();
  const [highlighted, setHighlighted] = useState(false);
  useEffect(() => {
    if (open === unit.id) {
      setHighlighted(true);
    } else {
      setHighlighted(false);
    }
  }, [open, unit.id]);

  const positions = useMemo(() => {
    const polygons =
      unit.imdfUnit.geometry.type === "Polygon"
        ? [unit.imdfUnit.geometry.coordinates]
        : unit.imdfUnit.geometry.coordinates;
    console.log("unit positions", unit.imdfUnit.geometry, polygons);
    return polygons.map((a) =>
      a.map((b) => b.map((c) => [c[0], c[1]] as [number, number]))
    );
  }, [unit.imdfUnit.geometry]);

  const isOpen = useMemo(() => open === unit.id, [open, unit.id]);

  const labelPosition = useMemo(() => {
    const centerpoint = center(unit.imdfUnit.geometry);

    if (booleanWithin(centerpoint, unit.imdfUnit.geometry)) {
      return centerpoint.geometry.coordinates as [number, number];
    }

    const geometry = unit.imdfUnit.geometry;

    const tesselated = tesselate(
      geometry.type === "Polygon"
        ? polygon(geometry.coordinates)
        : multiPolygon(geometry.coordinates)
    );
    // const tesselatedCenters = featureCollection(
    //   tesselated.features.map((f) => center(f.geometry))
    // );
    // const nearestPointToCenter = nearestPoint(centerpoint, tesselatedCenters);
    // return nearestPointToCenter.geometry.coordinates;
    const areas = tesselated.features.map((f) => area(f.geometry));
    const largestAreaIndex = areas.indexOf(Math.max(...areas));
    const largestTesselated = tesselated.features[largestAreaIndex];
    const largestCenter = center(largestTesselated.geometry);
    return largestCenter.geometry.coordinates as [number, number];
  }, [unit.imdfUnit]);

  return (
    <>
      <MapPortal id={unit.id}>
        <GeoJSON
          // key={unit.id + JSON.stringify(unit.imdfUnit.geometry)}
          data={unit.imdfUnit.geometry}
          style={{
            weight: 1.5,
            color: "#8d8d8d",
            fillColor:
              IMDF_UNIT_COLORS[unit.imdfUnit.properties.category] || "#ffffff",
            fillOpacity: 1,
          }}
          interactive
          eventHandlers={{
            click: (e) => {
              DomEvent.stopPropagation(e);
              // setOpen(unit.id);
              if (open !== unit.id) {
                // if the unit is not open, navigate to it
                router.push(`/level/${level.id}/unit/${unit.id}`);
              }
            },
            // currently doesnt really register in/out events properly, so disabled for now
            // mouseover: onMouseEnter,
            // mouseout: onMouseLeave,
          }}
          pane={DzgLeafletPanes.units}
        />
        {highlighted && (
          <GeoJSON
            data={unit.imdfUnit.geometry}
            style={{
              weight: 2,
              color: "#e54666",
              fillColor: "#e54666",
              fillOpacity: 0.15,
            }}
            interactive={false}
            pane={DzgLeafletPanes.unitsHighlighted}
          />
        )}
        <Marker
          position={[labelPosition[1], labelPosition[0]]}
          icon={divIcon({
            className: styles.dzgMarkerIcon,
            // <i class="ti ti-${
            //   unit.imdfUnit.properties.name?.en ? "tag" : "tag-off"
            // }"></i>
            html: `<div class="dzg-marker-unit-number">
            ${typeof unitIndex === "number" ? unitIndex + 1 : ""}
            </div>`,
            iconSize: [24, 24],
          })}
          eventHandlers={{
            click: (e) => {
              DomEvent.stopPropagation(e);
              // setOpen(unit.id);
              if (open !== unit.id) {
                router.push(`/level/${level.id}/unit/${unit.id}`);
              }
            },
          }}
          pane={DzgLeafletPanes.unitNumbers}
        />
      </MapPortal>
    </>
  );
}

function Opening({
  opening,
  onClick,
  open,
}: {
  opening: DzgOpening;
  level: DzgLevel;
  open?: {
    id: string;
    type: "unit" | "poi" | "opening";
  };
  onClick: (e: LeafletMouseEvent) => void;
}) {
  const [isHover, setIsHover] = useState(false);
  const position = opening.imdfOpening.geometry;
  const isOpen = useMemo(() => open?.id === opening.id, [open, opening.id]);
  return (
    <>
      <GeoJSON
        key={opening.id}
        data={position}
        style={{
          weight: isOpen || isHover ? 4 : 4,
          color: isOpen || isHover ? "#e54666" : "#b8b1a4",
          fillColor: "#fff",
          fillOpacity: 1,
          dashArray: isOpen || isHover ? "0" : "5,5",
        }}
        pane={DzgLeafletPanes.openings}
      />
      <GeoJSON
        key={opening.id + "Interactive"}
        data={position}
        eventHandlers={{
          click: onClick,
          mouseover: (e) => {
            setIsHover(true);
          },
          mouseout: () => {
            setIsHover(false);
          },
        }}
        style={{
          weight: 20,
          color: "#b8b1a4",
          opacity: 0,
        }}
        pane={DzgLeafletPanes.openingsInteractive}
      />
    </>
  );
}

export default function Layout({ children }: { children?: React.ReactNode }) {
  const { levelID, amenityID, openingID, unitID, occupantID } = useParams<{
    levelID: string;
    amenityID?: string;
    openingID?: string;
    occupantID?: string;
    unitID?: string;
  }>();
  const { dzg, setDzg } = useDzg();
  const router = useRouter();

  const [open, setOpen] = useState<
    | {
        type: "unit" | "poi" | "opening";
        id: string;
      }
    | undefined
  >(undefined);
  // const map = useMap();

  useEffect(() => {
    if (unitID) {
      setOpen({ type: "unit", id: unitID });
    } else if (amenityID) {
      setOpen({ type: "poi", id: amenityID });
    } else if (occupantID) {
      setOpen({ type: "poi", id: occupantID });
    } else if (openingID) {
      setOpen({ type: "opening", id: openingID });
    } else {
      setOpen(undefined);
    }
  }, [unitID, amenityID, openingID, occupantID]);

  const level = useMemo(() => {
    return dzg.levels.find((l) => l.id === levelID);
  }, [levelID, dzg.levels]);

  if (!level) {
    return <Text>Level not found</Text>;
  }

  return (
    <div>
      <BackButton />
      <Title
        title={`Level ${
          level.imdfLevel.properties.alt_name?.en ||
          level.imdfLevel.properties.name?.en
        }`}
      />
      {level.imdfLevel.geometry.coordinates.length > 0 && (
        <MapPortal id={level.id}>
          <GeoJSON
            key={JSON.stringify(level.imdfLevel.geometry)}
            data={level.imdfLevel.geometry}
            pathOptions={{
              weight: 1.5,
              color: "#8d8d8d",
              fillColor: "#d0d0d0",
              fillOpacity: 1,
            }}
            pane={DzgLeafletPanes.level}
          />
        </MapPortal>
      )}
      <MapPortal id={"clickoutside"}>
        <ClickOutsideHandler
          handler={() => {
            console.log("click outside");
            // setOpen(undefined);
            router.push(`/level/${level.id}`);
          }}
        />
      </MapPortal>
      <MapPortal id={level.id + "pois"}>
        {level.pois.map((poi) => {
          const position =
            poi.type === "amenity"
              ? poi.imdfAmenity.geometry.coordinates
              : poi.imdfAnchor.geometry.coordinates;

          const icon =
            poi.type === "amenity"
              ? (
                  newImdfCategories.find(
                    (c) => c.category === poi.imdfAmenity.properties.category
                  )?.icon.displayName || "question"
                )
                  // if icon is pascal case, convert to kebab case
                  .replace(/([a-z])([A-Z0-9])/g, "$1-$2")
                  .replace(/([0-9])([A-Z])/g, "$1-$2")
                  .toLowerCase()
              : IMDF_OCCUPANT_ICONS[poi.imdfOccupant.properties.category];
          console.log("POI icon", poi, icon);
          return (
            <Marker
              key={poi.id}
              position={[position[1], position[0]]}
              eventHandlers={{
                click: (e) => {
                  DomEvent.stopPropagation(e);
                  // setOpen({ id: poi.id, type: "poi" });
                  if (open?.id !== poi.id) {
                    router.push(`/level/${level.id}/${poi.type}/${poi.id}`);
                  }
                },
              }}
              icon={divIcon({
                className: styles.dzgMarkerIcon,
                html: `<div class="dzg-marker-icon dzg-marker-${poi.type} ${
                  // active
                  open?.id === poi.id ? "active" : ""
                }"><i class="ti ti-${icon}"></i></div>`,
                iconSize: [24, 24],
              })}
              pane={DzgLeafletPanes.markers}
            />
          );
        })}
      </MapPortal>
      <MapPortal id={level.id + "openings"}>
        {level.openings.map((opening) => (
          <Opening
            key={opening.id}
            opening={opening}
            level={level}
            open={open}
            onClick={(e) => {
              DomEvent.stopPropagation(e);
              // setOpen({ id: opening.id, type: "opening" });
              if (open?.id !== opening.id) {
                router.push(`/level/${level.id}/opening/${opening.id}`);
              }
            }}
          />
        ))}
      </MapPortal>
      {open ? (
        <Card>
          <Flex justify="between" mb="2" align="center">
            <Flex direction="column">
              <Text size="3" weight="medium">
                {open.type === "unit"
                  ? "Unit Editor"
                  : open.type === "poi" && amenityID
                    ? "Amenity Editor"
                    : open.type === "poi" && occupantID
                      ? "Occupant Editor"
                      : "Opening Editor"}
              </Text>
              {open.type === "unit" && (
                <Text size="2" color="gray">
                  Unit {level.units.findIndex((u) => u.id === open?.id) + 1}
                </Text>
              )}
            </Flex>
            <IconButton
              variant="ghost"
              size="2"
              aria-label="Close Unit Editor"
              onClick={() => {
                // setOpen(undefined);
                router.push(`/level/${level.id}`);
              }}
              m="2"
            >
              <Cross1Icon />
            </IconButton>
          </Flex>
          <Inset side="x">
            <Separator size="4" mb="3" />
          </Inset>
          {children}
        </Card>
      ) : (
        <Box>{children}</Box>
      )}
      {level.units.map((unit, i) => (
        <Unit
          key={unit.id}
          level={level}
          unit={unit}
          unitIndex={i}
          open={open?.id}
          // setOpen={(id) =>
          //   // setOpen(typeof id === "string" ? { id, type: "unit" } : id)
          // }
        />
      ))}
    </div>
  );
}
