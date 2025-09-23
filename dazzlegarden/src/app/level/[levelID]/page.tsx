"use client";
import DeletionDialog from "@/components/DeletionDialog";
import LevelEditor from "@/components/DzgEditor/LevelEditor";
import SingleAccordion from "@/components/SingleAccordion";
// import SVGLayersPanel from "@/components/SVGLayersPanel";
import { DzgLevel, DzgOpening, DzgUnit } from "@/types/dzg";
import {
  Amenity,
  AMENITY_CATEGORY,
  Feature,
  FeatureType,
  OPENING_CATEGORY,
  UNIT_CATEGORY,
} from "@/types/imdf";
import generateUUID from "@/utils/generateUUID";
import {
  IMDF_AMENITY_ICONS,
  IMDF_AMENITY_TEMPLATE,
  IMDF_ANCHOR_TEMPLATE,
  IMDF_OCCUPANT_ICONS,
  IMDF_OCCUPANT_TEMPLATE,
  IMDF_UNIT_TEMPLATE,
} from "@/utils/imdf";
import useDzg from "@/utils/useDzg";
import { LayersIcon, Pencil1Icon, PlusIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Text } from "@radix-ui/themes";
import { center } from "@turf/center";
import { MultiPolygon, Position } from "geojson";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

import { getTouchingBorders } from "@/utils/turf";
import cleanCoords from "@turf/clean-coords";
import { feature, multiPolygon } from "@turf/helpers";
import truncate from "@turf/truncate";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import { toast } from "react-toastify";
import styles from "./page.module.css";

const SVGLayersPanel = dynamic(() => import("@/components/SVGLayersPanel"), {
  ssr: false,
});

export default function Page() {
  const { levelID } = useParams<{
    levelID: string;
  }>();
  const { dzg, setDzg } = useDzg();
  const router = useRouter();
  const [selectedSVGLayers, setSelectedSVGLayers] = useState<Position[][][]>(
    []
  );
  const [open, setOpen] = useState<
    | {
        type: "unit" | "poi" | "opening";
        id: string;
      }
    | undefined
  >(undefined);
  // const map = useMap();

  const level = useMemo(() => {
    return dzg.levels.find((l) => l.id === levelID);
  }, [levelID, dzg.levels]);

  const deleteLevel = useCallback(
    (levelID: string) => {
      setDzg((prev) => ({
        ...prev,
        levels: prev.levels.filter((l) => l.id !== levelID),
      }));
    },
    [setDzg]
  );

  const addPolygons = useCallback(
    (polygons: Position[][][]) => {
      if (!level) return;
      const newUnits = polygons.map(
        (coordinates) =>
          ({
            id: generateUUID(),
            imdfUnit: {
              ...IMDF_UNIT_TEMPLATE,
              id: generateUUID(),
              geometry: (
                cleanCoords(
                  truncate(
                    // {
                    //   type: "MultiPolygon",
                    //   coordinates: [coordinates],
                    // },
                    multiPolygon([coordinates]),
                    {
                      precision: 7,
                    }
                  )
                ) as Feature<MultiPolygon>
              ).geometry,
              properties: {
                ...IMDF_UNIT_TEMPLATE.properties,
                level_id: level.imdfLevel.id,
              },
            },
          }) as DzgUnit
      );
      setDzg((prev) => ({
        ...prev,
        levels: prev.levels.map((l) =>
          l.id === level.id
            ? {
                ...l,
                units: [...l.units, ...newUnits],
              }
            : l
        ),
      }));
      setSelectedSVGLayers([]);
    },
    [setDzg, level]
  );

  const detectOpenings = useCallback(() => {
    if (!level) return;
    const ignoredCategories = [
      UNIT_CATEGORY.structure,
      UNIT_CATEGORY.column,
      UNIT_CATEGORY.brick,
      UNIT_CATEGORY.glass,
      UNIT_CATEGORY.concrete,
      UNIT_CATEGORY.drywall,
      UNIT_CATEGORY.wood,
      UNIT_CATEGORY.nonpublic,
      UNIT_CATEGORY.opentobelow,
    ];
    const unitCount = level.units.length;

    const geometries = [];
    for (let i = 0; i < unitCount; i++) {
      for (let j = i + 1; j < unitCount; j++) {
        const unitA = level.units[i];
        const unitB = level.units[j];

        if (
          ignoredCategories.includes(unitA.imdfUnit.properties.category) ||
          ignoredCategories.includes(unitB.imdfUnit.properties.category) ||
          !unitA.imdfUnit.geometry ||
          !unitB.imdfUnit.geometry
        ) {
          continue;
        }
        const touchingBorders = getTouchingBorders(
          feature(unitA.imdfUnit.geometry),
          feature(unitB.imdfUnit.geometry)
        );
        if (touchingBorders) {
          geometries.push(...touchingBorders);
        }
      }
    }
    const newOpenings = geometries.map(({ geometry }) => {
      const newId = generateUUID();
      return {
        id: newId,
        imdfOpening: {
          id: newId,
          type: "Feature",
          feature_type: FeatureType.opening,
          geometry: cleanCoords(
            truncate(geometry, {
              precision: 7,
            })
          ),
          properties: {
            category: OPENING_CATEGORY.pedestrian,
            accessibility: null,
            access_control: null,
            door: null,
            name: null,
            alt_name: null,
            display_point: null,
            level_id: level.imdfLevel.id,
          },
        },
      } as DzgOpening;
    });
    if (newOpenings.length === 0) {
      toast.info("No openings detected.");
      return;
    }
    setDzg((prev) => ({
      ...prev,
      levels: prev.levels.map((l) =>
        l.id === level.id
          ? {
              ...l,
              openings: [...l.openings, ...newOpenings],
            }
          : l
      ),
    }));
  }, [level]);

  const newAmenity = useCallback(
    (level: DzgLevel) => {
      const newId = generateUUID();
      if (
        !level.imdfLevel.geometry ||
        !level.imdfLevel.geometry.coordinates ||
        level.imdfLevel.geometry.coordinates.length === 0
      ) {
        toast.error("Level geometry is not defined or empty.");
        return;
      }
      const centerPoint = center(level.imdfLevel);
      setDzg((prev) => ({
        ...prev,
        levels: prev.levels.map((l) =>
          l.id === level.id
            ? {
                ...l,
                pois: [
                  ...l.pois,
                  {
                    type: "amenity",
                    id: newId,
                    imdfAmenity: {
                      ...IMDF_AMENITY_TEMPLATE,
                      id: newId,
                      geometry: centerPoint.geometry,
                    } as Amenity,
                  },
                ],
              }
            : l
        ),
      }));
      router.push(`/level/${level.id}/amenity/${newId}`);
    },
    [setDzg, router]
  );

  const newOccupant = useCallback(
    (level: DzgLevel) => {
      const newAnchorId = generateUUID();
      const newOccupantId = generateUUID();
      if (
        !level.imdfLevel.geometry ||
        !level.imdfLevel.geometry.coordinates ||
        level.imdfLevel.geometry.coordinates.length === 0
      ) {
        toast.error("Level geometry is not defined or empty.");
        return;
      }
      const centerPoint = center(level.imdfLevel);
      setDzg((prev) => ({
        ...prev,
        levels: prev.levels.map((l) =>
          l.id === level.id
            ? {
                ...l,
                pois: [
                  ...l.pois,
                  {
                    type: "occupant",
                    id: newOccupantId,
                    imdfOccupant: {
                      ...IMDF_OCCUPANT_TEMPLATE,
                      id: newOccupantId,
                      properties: {
                        ...IMDF_OCCUPANT_TEMPLATE.properties,
                        anchor_id: newAnchorId,
                      },
                    },
                    imdfAnchor: {
                      ...IMDF_ANCHOR_TEMPLATE,
                      id: newAnchorId,
                      geometry: centerPoint.geometry,
                    },
                  },
                ],
              }
            : l
        ),
      }));
      setOpen({ id: newOccupantId, type: "poi" });
      router.push(`/level/${level.id}/occupant/${newOccupantId}`);
    },
    [setDzg, router]
  );

  const amenities = useMemo(() => {
    return level?.pois.filter((poi) => poi.type === "amenity") || [];
  }, [level?.pois]);

  if (!level) {
    return <Text>Level not found</Text>;
  }

  return (
    <Flex direction="column" gap="2">
      <SingleAccordion
        title="Level Information"
        icon={<Pencil1Icon width="1rem" height="1rem" />}
      >
        <LevelEditor
          level={level.imdfLevel}
          setLevel={(newLevel) => {
            setDzg((prev) => ({
              ...prev,
              levels: prev.levels.map((l) =>
                l.id === level.id ? { ...l, imdfLevel: newLevel } : l
              ),
            }));
          }}
          buildings={dzg.buildings}
        />

        <Flex justify="start" mt="2">
          <DeletionDialog
            trigger={
              <Button color="red" variant="ghost" mt="4">
                Delete Level
              </Button>
            }
            title={`Delete Level ${
              level.imdfLevel.properties.name?.en || "Unnamed Level"
            }`}
            description={
              "Are you sure you want to delete this level? This action cannot be undone. This will also delete all associated units and openings."
            }
            onClickDelete={() => {
              deleteLevel(level.id);
              router.push("/");
            }}
          />
        </Flex>
      </SingleAccordion>
      <SingleAccordion
        title="Geometry"
        icon={<LayersIcon width="1rem" height="1rem" />}
      >
        <Button onClick={detectOpenings}>Detect Openings</Button>
        <SVGLayersPanel
          setCoordinatesValue={setSelectedSVGLayers}
          title="Batch add SVG Layers as units"
          description={"Quickly add multiple SVG layers as units"}
        >
          <Button
            variant="surface"
            color="gray"
            size="2"
            onClick={() => {
              if (selectedSVGLayers.length > 0) {
                addPolygons(selectedSVGLayers);
              }
            }}
            disabled={selectedSVGLayers.length === 0}
          >
            <PlusIcon /> Add Selected Layers
          </Button>
        </SVGLayersPanel>
      </SingleAccordion>

      <Text size="4" weight="medium" mt="4" mb="1">
        Amenities
      </Text>
      <Flex direction="column" gap="3">
        {amenities.map((amenity) => (
          <NextLink
            href={`/level/${level.id}/amenity/${amenity.id}`}
            key={amenity.id}
          >
            <Box>
              <Flex gap="3">
                <Box className={styles.amenityIcon}>
                  <i
                    className={`ti ti-${
                      IMDF_AMENITY_ICONS[
                        amenity.imdfAmenity.properties.category ||
                          AMENITY_CATEGORY.unspecified
                      ]
                    }`}
                  />
                </Box>
                <Flex direction="column">
                  <Text size="2">
                    {amenity.imdfAmenity.properties.name?.en ||
                      "Untitled Amenity"}
                  </Text>
                  <Text size="1" color="gray">
                    <i>
                      {amenity.imdfAmenity.properties.category ||
                        "Unknown Category"}
                    </i>
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </NextLink>
        ))}
      </Flex>
      <Button
        variant="surface"
        color="gray"
        size="2"
        onClick={() => {
          newAmenity(level);
        }}
        mt="1"
      >
        <PlusIcon /> New Amenity
      </Button>
      <Text size="4" weight="medium" mt="4" mb="1">
        Occupants
      </Text>
      <Flex direction="column" gap="3">
        {level.pois
          .filter((poi) => poi.type === "occupant")
          .map((occupant) => (
            <NextLink
              href={`/level/${level.id}/occupant/${occupant.id}`}
              key={occupant.id}
            >
              <Box>
                <Flex gap="3">
                  <Box className={styles.amenityIcon}>
                    <i
                      className={`ti ti-${
                        IMDF_OCCUPANT_ICONS[
                          occupant.imdfOccupant.properties.category
                        ]
                      }`}
                    />
                  </Box>
                  <Flex direction="column">
                    <Text size="2">
                      {occupant.imdfOccupant.properties.name?.en ||
                        "Untitled Occupant"}
                    </Text>
                    <Text size="1" color="gray">
                      <i>
                        {occupant.imdfOccupant.properties.category ||
                          "Unknown Category"}
                      </i>
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </NextLink>
          ))}
      </Flex>
      <Button
        variant="surface"
        color="gray"
        size="2"
        onClick={() => {
          newOccupant(level);
        }}
        mt="1"
      >
        <PlusIcon /> New Occupant
      </Button>
    </Flex>
  );
}
