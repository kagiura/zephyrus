import { Button, Callout, Flex, Text } from "@radix-ui/themes";
import {
  Building,
  BUILDING_CATEGORY,
  RESTRICTION_CATEGORY,
} from "@/types/imdf";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import FieldText from "./FieldText";
import FieldUUID from "./FieldUUID";

import FieldLabels from "./FieldLabels";
import FieldCategory from "./FieldCategory";
import {
  IMDF_BUILDING_CATEGORIES,
  IMDF_RESTRICTION_CATEGORIES,
} from "@/data/imdfCategories";
import FieldGeoPoint from "./FieldGeoPoint";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useWarnIfUnsavedChanges } from "@/utils/useWarnIfUnsavedChanges";
import useDzg from "@/utils/useDzg";
import { useRouter } from "next/navigation";
import DeletionDialog from "../DeletionDialog";

function BuildingEditorForm({
  building,
  setBuilding,
}: {
  building: Building;
  setBuilding: Dispatch<SetStateAction<Building>>;
}) {
  const setProperty = useCallback(
    (key: keyof Building["properties"], value: any) => {
      setBuilding((prev) => ({
        ...prev,
        properties: {
          ...prev.properties,
          [key]:
            typeof value === "function" ? value(prev.properties[key]) : value,
        },
      }));
    },
    [],
  );
  return (
    <Flex direction="column" gap="4">
      <FieldUUID
        name="Building ID"
        valueKey="id"
        value={building.id}
        readOnly
      />
      <FieldText
        name="Feature Type"
        valueKey="feature_type"
        value={building.feature_type}
        readOnly
      />

      <FieldLabels
        name="Name"
        valueKey="name"
        value={building.properties.name}
        setValue={(value) => {
          setProperty("name", value);
        }}
      />
      <FieldLabels
        name="Alt Name"
        description="Alternative names for the building, if any."
        valueKey="alt_name"
        value={building.properties.alt_name}
        setValue={(value) => {
          setProperty("alt_name", value);
        }}
      />

      <FieldCategory<BUILDING_CATEGORY>
        name="Category"
        valueKey="category"
        category={IMDF_BUILDING_CATEGORIES}
        value={building.properties.category}
        setValue={(value) => {
          setProperty("category", value);
        }}
        required
      />

      <FieldCategory<RESTRICTION_CATEGORY | null>
        name="Restriction"
        description="Restriction category for the building, if any."
        valueKey="restriction"
        category={IMDF_RESTRICTION_CATEGORIES}
        value={building.properties.restriction}
        setValue={(value) => {
          setProperty("restriction", value);
        }}
      />

      <FieldGeoPoint
        name="Display Point"
        valueKey="display_point"
        value={building.properties.display_point}
        setValue={(value) => {
          setProperty("display_point", value);
        }}
      />
      <Callout.Root color="gray" variant="soft" size="2">
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text>Addresses are not supported at this time</Callout.Text>
      </Callout.Root>
    </Flex>
  );
}
function BuildingEditor({
  building: initialBuilding,
  setBuilding: saveBuilding,
}: // children,
{
  building: Building;
  setBuilding: (building: Building) => void;
  // children: React.ReactNode;
}) {
  // const [open, setOpen] = useState(false);
  const router = useRouter();
  const { dzg, setDzg } = useDzg();
  const [building, setBuilding] = useState<Building>(initialBuilding);
  const dirty = useMemo(() => {
    return JSON.stringify(building) !== JSON.stringify(initialBuilding);
  }, [building, initialBuilding]);

  useWarnIfUnsavedChanges(dirty);

  const footprintsWithOnlyThisBuilding = useMemo(() => {
    return dzg.footprints.filter((f) => {
      const buildingIDs = (
        f.imdfFootprint.properties.building_ids || []
      ).filter((id) => id !== building.id);
      if (buildingIDs.length === 0) {
        // If no building IDs left, remove footprint
        return true;
      }
      return false;
    });
  }, [dzg.footprints, building.id]);

  const deleteBuilding = useCallback(() => {
    const buildingID = building.id;
    setDzg((prev) => {
      const buildings = prev.buildings.filter(
        (b) => b.imdfBuilding.id !== buildingID,
      );
      const levels = prev.levels.map((l) => ({
        ...l,
        imdfLevel: {
          ...l.imdfLevel,
          properties: {
            ...l.imdfLevel.properties,
            building_ids:
              l.imdfLevel.properties.building_ids?.filter(
                (id) => id !== buildingID,
              ) || null,
          },
        },
      }));
      const footprints = prev.footprints.map((f) => ({
        ...f,
        imdfFootprint: {
          ...f.imdfFootprint,
          properties: {
            ...f.imdfFootprint.properties,
            building_ids:
              f.imdfFootprint.properties.building_ids?.filter(
                (id) => id !== buildingID,
              ) || [],
          },
        },
      }));

      return {
        ...prev,
        buildings,
        levels,
        footprints,
      };
    });
  }, [building.id]);

  return (
    <Flex direction="column" gap="4">
      {/* <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Content
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <Dialog.Title>Edit Building</Dialog.Title>
        <Flex direction="column" gap="4"> */}
      <BuildingEditorForm building={building} setBuilding={setBuilding} />

      <Flex justify="end" gap="2">
        <Button
          disabled={!dirty}
          onClick={() => {
            // setOpen(false);
            if (dirty) {
              setBuilding(initialBuilding); // Reset to initial building
            }
          }}
          variant="surface"
          size="2"
          color={dirty ? "red" : "gray"}
          mr="2"
        >
          Discard Changes
        </Button>
        <Button
          disabled={!dirty}
          onClick={() => {
            // setOpen(false);
            saveBuilding(building);
          }}
          variant="solid"
          size="2"
        >
          Save Changes
        </Button>
      </Flex>
      <DeletionDialog
        trigger={
          <Button color="red" variant="ghost">
            Delete Building
          </Button>
        }
        title={`Delete Building ${
          building.properties.name?.en || "Unnamed Building"
        }`}
        description={
          <>
            Are you sure you want to delete this building? This action cannot be
            undone. All levels associated with this building will still exist,
            but they will not be linked to any building in the IMDF structure.
            {footprintsWithOnlyThisBuilding.length > 0 && (
              <Text size="2" color="red" mt="2" as="p">
                The following footprints only have this building associated with
                it, and should be deleted or associated with another building
                instead to prevent issues:{" "}
                {footprintsWithOnlyThisBuilding
                  .map(
                    (f) =>
                      f.imdfFootprint.properties.name?.en ||
                      "Unnamed Footprint " + f.id.slice(0, 8),
                  )
                  .join(", ")}
              </Text>
            )}
          </>
        }
        onClickDelete={() => {
          deleteBuilding();
          router.push("/"); // Redirect to home after deletion
        }}
      />
    </Flex>
  );
}
export default BuildingEditor;
