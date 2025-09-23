import { Dzg, DzgBuilding, DzgLevel } from "@/types/dzg";
import {
  IMDF_ADDRESS_TEMPLATE,
  IMDF_BUILDING_TEMPLATE,
  IMDF_FOOTPRINT_TEMPLATE,
  IMDF_LEVEL_TEMPLATE,
  IMDF_MANIFEST_TEMPLATE,
  IMDF_VENUE_TEMPLATE,
} from "@/utils/imdf";
import { SVGPlacementLayer } from "@/utils/svg";
import {
  Badge,
  Box,
  Button,
  Flex,
  Inset,
  Separator,
  Text,
} from "@radix-ui/themes";
import { useLocalStorage } from "usehooks-ts";

import styles from "./DzgEditor.module.css";
import SingleAccordion from "./SingleAccordion";
import {
  HomeIcon,
  LayersIcon,
  PlusIcon,
  StackIcon,
} from "@radix-ui/react-icons";
import VenueEditor from "./DzgEditor/VenueEditor";
import AddressEditor from "./DzgEditor/AddressEditor";
import { Fragment, useCallback } from "react";
import generateUUID from "@/utils/generateUUID";
import BuildingEditor from "./DzgEditor/BuildingEditor";
import FootprintEditor from "./DzgEditor/FootprintEditor";
import LevelEditor from "./DzgEditor/LevelEditor";

function DzgEditor({
  layers,
  setLayers,
}: {
  layers: SVGPlacementLayer[]; // Replace with actual type
  setLayers: (layers: SVGPlacementLayer[]) => void; // Replace with actual type
}) {
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

  const addFootprint = useCallback(() => {
    const newFootprintID = generateUUID();
    const newFootprint = {
      id: newFootprintID,
      imdfFootprint: {
        ...IMDF_FOOTPRINT_TEMPLATE,
        id: newFootprintID,
      },
    };
    setDzg((prev) => ({
      ...prev,
      footprints: [...prev.footprints, newFootprint],
    }));
  }, [setDzg]);

  const addLevel = useCallback(
    (buildingId: string) => {
      const newLevelID = generateUUID();
      const newLevelOrdinal = dzg.levels.filter((l) =>
        l.imdfLevel.properties.building_ids?.includes(buildingId),
      ).length;
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
            building_ids: [buildingId],
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
    [dzg.levels.length],
  );

  return (
    <Box mt="3">
      <Text size="3" weight="bold" my="2" as="p">
        Venue
      </Text>
      <SingleAccordion
        title="Venue"
        icon={<LayersIcon width="1rem" height="1rem" />}
        mt="2"
      >
        <VenueEditor
          venue={dzg.venue.imdfVenue}
          setVenue={(venue) => {
            setDzg((prev) => ({
              ...prev,
              venue: {
                ...prev.venue,
                imdfVenue: venue,
              },
            }));
          }}
          addressId={dzg.venue.imdfAddress.id}
        />
        <AddressEditor
          address={dzg.venue.imdfAddress}
          setAddress={(address) => {
            setDzg((prev) => ({
              ...prev,
              venue: {
                ...prev.venue,
                imdfVenue: {
                  ...prev.venue.imdfVenue,
                  properties: {
                    ...prev.venue.imdfVenue.properties,
                    address_id: address.id,
                  },
                },
                imdfAddress: address,
              },
            }));
          }}
        >
          <Button
            variant="solid"
            color="gray"
            size="2"
            style={{ width: "100%" }}
          >
            Edit Address
          </Button>
        </AddressEditor>
      </SingleAccordion>
      {/* Footprints */}
      <Box>
        <Flex justify="between" mt="4" mb="2" align="center">
          <Text size="3" weight="bold" as="p">
            Footprints
          </Text>
          <Button variant="solid" color="gray" size="1" onClick={addFootprint}>
            <PlusIcon /> New
          </Button>
        </Flex>
        <Flex direction="column" gap="2" mt="2">
          {dzg.footprints.map((footprint) => (
            <SingleAccordion
              key={footprint.id}
              title={
                footprint.imdfFootprint.properties?.name?.en ||
                "Unnamed Footprint " + footprint.id.slice(0, 8)
              }
              icon={<LayersIcon width="1rem" height="1rem" />}
            >
              <FootprintEditor
                footprint={footprint.imdfFootprint}
                setFootprint={(newFootprint) => {
                  setDzg((prev) => ({
                    ...prev,
                    footprints: prev.footprints.map((f) =>
                      f.id === footprint.id
                        ? { ...f, imdfFootprint: newFootprint }
                        : f,
                    ),
                  }));
                }}
                buildings={dzg.buildings}
              />
            </SingleAccordion>
          ))}
        </Flex>
      </Box>
      {/* Buildings */}
      <Box>
        <Flex justify="between" mt="4" mb="2" align="center">
          <Text size="3" weight="bold" as="p">
            Buildings
          </Text>
          <Button variant="solid" color="gray" size="1" onClick={addBuilding}>
            <PlusIcon /> New
          </Button>
        </Flex>
        <Flex direction="column" gap="2" mt="2">
          {dzg.buildings.map((building) => {
            const levels = dzg.levels.filter((l) =>
              l.imdfLevel.properties.building_ids?.includes(building.id),
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
                  <BuildingEditor
                    building={building.imdfBuilding}
                    setBuilding={(newBuilding) => {
                      setDzg((prev) => ({
                        ...prev,
                        buildings: prev.buildings.map((b) =>
                          b.id === building.id
                            ? { ...b, imdfBuilding: newBuilding }
                            : b,
                        ),
                      }));
                    }}
                  />
                  <Button
                    variant="surface"
                    color="gray"
                    size="2"
                    onClick={() => addLevel(building.id)}
                  >
                    <PlusIcon width="1rem" height="1rem" />
                    Add Level
                  </Button>
                </Flex>
                {levels.length > 0 && (
                  <Inset side="bottom">
                    <Flex direction="column" mt="2">
                      <Text size="2" weight="bold" mx="3" mb="2">
                        Levels
                      </Text>
                      {dzg.levels
                        .filter((l) =>
                          l.imdfLevel.properties.building_ids?.includes(
                            building.id,
                          ),
                        )
                        .map((level) => (
                          <Fragment key={level.id}>
                            <Separator size="4" />
                            <SingleAccordion
                              title={
                                <>
                                  <Text
                                    size="2"
                                    weight="regular"
                                    style={{
                                      color: "var(--gray-9)",
                                    }}
                                  >
                                    {building.imdfBuilding.properties.name
                                      ?.en ||
                                      "Unnamed Building " +
                                        building.id.slice(0, 6)}
                                    {" / "}
                                  </Text>
                                  {level.imdfLevel.properties?.name?.en ||
                                    "Unnamed Level " + level.id.slice(0, 6)}
                                </>
                              }
                              icon={<LayersIcon width="1rem" height="1rem" />}
                              className={styles.accordionNoBorder}
                            >
                              <LevelEditor
                                level={level.imdfLevel}
                                setLevel={(newLevel) => {
                                  setDzg((prev) => ({
                                    ...prev,
                                    levels: prev.levels.map((l) =>
                                      l.id === level.id
                                        ? { ...l, imdfLevel: newLevel }
                                        : l,
                                    ),
                                  }));
                                }}
                                buildings={dzg.buildings}
                              />
                            </SingleAccordion>
                          </Fragment>
                        ))}
                    </Flex>
                  </Inset>
                )}
              </SingleAccordion>
            );
          })}
        </Flex>
        {dzg.levels.filter(
          (l) => l.imdfLevel.properties.building_ids?.length === 0,
        ).length > 0 && (
          <SingleAccordion
            title="Levels without associated buildings"
            icon={<StackIcon width="1rem" height="1rem" />}
            mt="2"
            style={{ backgroundColor: "var(--color-gray-2)" }}
          >
            <Text size="1" color="gray" mb="3">
              These levels do not have any associated buildings. You can edit
              them, but they will not be linked to any building in the IMDF
              structure.
            </Text>
            <Inset side="bottom" mt="2">
              <Flex direction="column" gap="2">
                {dzg.levels
                  .filter(
                    (l) => l.imdfLevel.properties.building_ids?.length === 0,
                  )
                  .map((level) => (
                    <Fragment key={level.id}>
                      <Separator size="4" />
                      <SingleAccordion
                        key={level.id}
                        title={
                          level.imdfLevel.properties?.name?.en ||
                          "Unnamed Level " + level.id.slice(0, 6)
                        }
                        icon={<LayersIcon width="1rem" height="1rem" />}
                        className={styles.accordionNoBorder}
                      >
                        <LevelEditor
                          level={level.imdfLevel}
                          setLevel={(newLevel) => {
                            setDzg((prev) => ({
                              ...prev,
                              levels: prev.levels.map((l) =>
                                l.id === level.id
                                  ? { ...l, imdfLevel: newLevel }
                                  : l,
                              ),
                            }));
                          }}
                          buildings={dzg.buildings}
                        />
                      </SingleAccordion>
                    </Fragment>
                  ))}
              </Flex>
            </Inset>
          </SingleAccordion>
        )}
      </Box>
    </Box>
  );
}

export default DzgEditor;
