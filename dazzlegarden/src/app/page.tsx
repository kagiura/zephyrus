"use client";
import { Dzg, DzgBuilding, DzgLevel } from "@/types/dzg";
import {
  IMDF_ADDRESS_TEMPLATE,
  IMDF_BUILDING_TEMPLATE,
  IMDF_FOOTPRINT_TEMPLATE,
  IMDF_LEVEL_TEMPLATE,
  IMDF_MANIFEST_TEMPLATE,
  IMDF_VENUE_TEMPLATE,
} from "@/utils/imdf";
import { Badge, Box, Button, Flex, Text } from "@radix-ui/themes";
import { useLocalStorage } from "usehooks-ts";

import {
  IconArchive,
  IconMapRoute,
  IconShape,
  IconStack,
} from "@tabler/icons-react";

import IconExport from "@/components/IconExport";
import PageLink from "@/components/PageLink";
import SingleAccordion from "@/components/SingleAccordion";
import generateUUID from "@/utils/generateUUID";
import {
  HomeIcon,
  Pencil1Icon,
  PlusIcon,
  StackIcon,
} from "@radix-ui/react-icons";
import NextLink from "next/link";
import { useCallback } from "react";

export default function Page({}: {}) {
  // IMDF EDITOR

  const [dzg, setDzg] = useLocalStorage<Dzg>("dz-dzg", {
    id: "default",
    manifest: IMDF_MANIFEST_TEMPLATE,
    venue: {
      id: IMDF_VENUE_TEMPLATE.id,
      name: IMDF_VENUE_TEMPLATE.properties.name.en,
      imdfVenue: IMDF_VENUE_TEMPLATE,
      imdfAddress: IMDF_ADDRESS_TEMPLATE,
    },
    buildings: [],
    footprints: [],
    levels: [],
  } as Dzg);

  const addBuilding = useCallback(() => {
    const newBuildingID = generateUUID();
    const newBuiding = {
      id: newBuildingID,
      imdfBuilding: {
        ...IMDF_BUILDING_TEMPLATE,
        id: generateUUID(),
        properties: {
          ...IMDF_BUILDING_TEMPLATE.properties,
          name: {
            en: `Building ${dzg.buildings.length + 1}`,
          },
        },
      },
      imdfFootprint: {
        ...IMDF_FOOTPRINT_TEMPLATE,
        id: generateUUID(),
      },
      levels: [],
    } as DzgBuilding;
    setDzg((prev) => ({
      ...prev,
      buildings: [...prev.buildings, newBuiding],
    }));
  }, [dzg.buildings.length, setDzg]);

  // const addFootprint = useCallback(() => {
  //   const newFootprintID = generateUUID();
  //   const newFootprint = {
  //     id: newFootprintID,
  //     imdfFootprint: {
  //       ...IMDF_FOOTPRINT_TEMPLATE,
  //       id: newFootprintID,
  //     },
  //   };
  //   setDzg((prev) => ({
  //     ...prev,
  //     footprints: [...prev.footprints, newFootprint],
  //   }));
  // }, [setDzg]);

  const addLevel = useCallback(
    (buildingId?: string) => {
      const newLevelID = generateUUID();
      const newLevelOrdinal = buildingId
        ? dzg.levels.filter((l) =>
            l.imdfLevel.properties.building_ids?.includes(buildingId)
          ).length
        : 0;
      const newLevel: DzgLevel = {
        id: newLevelID,
        imdfLevel: {
          ...IMDF_LEVEL_TEMPLATE,
          id: newLevelID,
          properties: {
            ...IMDF_LEVEL_TEMPLATE.properties,
            name: {
              en: `Level ${newLevelOrdinal + 1}`,
            },
            short_name: {
              en: `${newLevelOrdinal + 1}`,
            },
            ordinal: newLevelOrdinal,
            building_ids: buildingId ? [buildingId] : [],
          },
        },
        openings: [],
        units: [],
        assets: [],
        pois: [],
      };
      setDzg((prev) => ({
        ...prev,
        levels: [...prev.levels, newLevel],
      }));
    },
    [dzg.levels.length]
  );

  return (
    <Box mt="3">
      <Flex direction="column" gap="2">
        <PageLink href="/manifest" icon={IconArchive} color="pink">
          Manifest
        </PageLink>
        <PageLink href="/venue" icon={IconMapRoute} color="violet">
          Venue
        </PageLink>
        <PageLink href="/footprints" icon={IconShape} color="indigo">
          Footprints
        </PageLink>
      </Flex>
      {/* Buildings */}
      <Box>
        <Flex justify="between" mt="5" mb="3" align="center">
          <Text size="4" weight="medium" as="p">
            Buildings
          </Text>
          <Button variant="surface" color="gray" size="1" onClick={addBuilding}>
            <PlusIcon /> New Building
          </Button>
        </Flex>
        <Flex direction="column" gap="2" mt="2">
          {dzg.buildings.map((building) => {
            const levels = dzg.levels.filter((l) =>
              l.imdfLevel.properties.building_ids?.includes(
                building.imdfBuilding.id
              )
            );
            return (
              <SingleAccordion
                key={building.id}
                title={
                  <>
                    {building.imdfBuilding.properties?.name?.en ||
                      "Unnamed Building " + building.id.slice(0, 6)}{" "}
                    <Badge color="gray" size="1">
                      {levels.length} level
                      {levels.length === 1 ? "" : "s"}
                    </Badge>
                  </>
                }
                icon={<HomeIcon width="1rem" height="1rem" />}
              >
                <Flex gap="2">
                  <NextLink href={`/building/${building.id}`}>
                    <Button variant="surface" color="gray" size="1">
                      <Pencil1Icon width="1rem" height="1rem" />
                      Edit Building
                    </Button>
                  </NextLink>
                  <Button
                    variant="surface"
                    color="gray"
                    size="1"
                    onClick={() => addLevel(building.imdfBuilding.id)}
                  >
                    <PlusIcon width="1rem" height="1rem" />
                    Add Level
                  </Button>
                </Flex>
                {levels.length > 0 ? (
                  // <Inset side="bottom">
                  <Flex direction="column" mt="2">
                    {/* <Text size="2" weight="bold" mb="1">
                      Levels
                    </Text> */}
                    <Flex direction="column" gap="2">
                      {dzg.levels
                        .filter((l) =>
                          l.imdfLevel.properties.building_ids?.includes(
                            building.imdfBuilding.id
                          )
                        )
                        .map((level) => (
                          <PageLink
                            href={`/level/${level.id}`}
                            icon={IconStack}
                            color="gray"
                            key={level.id}
                          >
                            <Text
                              size="2"
                              weight="regular"
                              style={{
                                color: "var(--gray-9)",
                              }}
                            >
                              {building.imdfBuilding.properties.name?.en ||
                                "Unnamed Building " + building.id.slice(0, 6)}
                              {" / "}
                            </Text>
                            {level.imdfLevel.properties?.name?.en ||
                              "Unnamed Level " + level.id.slice(0, 6)}
                          </PageLink>
                        ))}
                    </Flex>
                  </Flex>
                ) : (
                  // </Inset>
                  <Text size="2" color="gray" mt="3" as="p">
                    No levels found for this building.
                  </Text>
                )}
              </SingleAccordion>
            );
          })}
        </Flex>
        {dzg.levels.filter(
          (l) =>
            l.imdfLevel.properties.building_ids?.length === 0 ||
            l.imdfLevel.properties.building_ids === null ||
            !dzg.buildings.some((b) =>
              l.imdfLevel.properties.building_ids?.includes(b.imdfBuilding.id)
            )
        ).length > 0 && (
          <SingleAccordion
            title="Other Levels"
            icon={<StackIcon width="1rem" height="1rem" />}
            mt="2"
            style={{ backgroundColor: "var(--color-gray-2)" }}
          >
            <Text size="1" color="gray" mb="3" as="p">
              These levels do not have any associated buildings. You can edit
              them, but they will not be linked to any building in the IMDF
              structure.
            </Text>
            <Button
              variant="surface"
              color="gray"
              size="1"
              onClick={() => addLevel()}
            >
              <PlusIcon width="1rem" height="1rem" />
              Add Level
            </Button>
            <Flex direction="column" gap="2" mt="2">
              {dzg.levels
                .filter(
                  (l) =>
                    l.imdfLevel.properties.building_ids?.length === 0 ||
                    l.imdfLevel.properties.building_ids === null ||
                    !dzg.buildings.some((b) =>
                      l.imdfLevel.properties.building_ids?.includes(
                        b.imdfBuilding.id
                      )
                    )
                )
                .map((level) => (
                  <PageLink
                    href={`/level/${level.id}`}
                    icon={IconStack}
                    color="gray"
                    key={level.id}
                  >
                    {level.imdfLevel.properties?.name?.en ||
                      "Unnamed Level " + level.id.slice(0, 6)}
                  </PageLink>
                ))}
            </Flex>
          </SingleAccordion>
        )}
      </Box>
      {/* <IconExport /> */}
    </Box>
  );
}
