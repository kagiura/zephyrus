import { Button, Flex, Text } from "@radix-ui/themes";
import { Level, LEVEL_CATEGORY, RESTRICTION_CATEGORY } from "@/types/imdf";
import { useCallback, useMemo, useState } from "react";
import FieldText from "./FieldText";
import FieldUUID from "./FieldUUID";
import FieldLabels from "./FieldLabels";
import FieldGeoPoint from "./FieldGeoPoint";
import FieldGeoMultiPolygon from "./FieldGeoMultiPolygon";
import FieldMultiSelect from "./FieldMultiSelect";
import { DzgBuilding } from "@/types/dzg";
import FieldNumber from "./FieldNumber";
import FieldCategory from "./FieldCategory";
import {
  IMDF_LEVEL_CATEGORIES,
  IMDF_RESTRICTION_CATEGORIES,
} from "@/data/imdfCategories";
import FieldSelect from "./FieldSelect";
import { useWarnIfUnsavedChanges } from "@/utils/useWarnIfUnsavedChanges";

function LevelEditor({
  level: initialLevel,
  setLevel: saveLevel,
  buildings,
}: {
  level: Level;
  setLevel: (level: Level) => void;
  buildings: DzgBuilding[];
}) {
  const [level, setLevel] = useState<Level>(initialLevel);
  const dirty = useMemo(() => {
    return JSON.stringify(level) !== JSON.stringify(initialLevel);
  }, [level, initialLevel]);
  useWarnIfUnsavedChanges(dirty);

  // useEffect(() => {
  //   if (addressId) {
  //     setLevel((prev) => ({
  //       ...prev,
  //       properties: {
  //         ...prev.properties,
  //         address_id: addressId,
  //       },
  //     }));
  //   }
  // }, [addressId]);
  console.log(level.geometry, initialLevel.geometry, dirty);

  const setProperty = useCallback(
    (key: keyof Level["properties"], value: any) => {
      setLevel((prev) => ({
        ...prev,
        properties: {
          ...prev.properties,
          [key]:
            typeof value === "function" ? value(prev.properties[key]) : value,
        },
      }));
    },
    [setLevel],
  );

  return (
    <Flex direction="column" gap="4">
      <FieldUUID name="Level ID" valueKey="id" value={level.id} readOnly />
      <FieldText
        name="Feature Type"
        valueKey="feature_type"
        value={level.feature_type}
        readOnly
      />
      <FieldGeoMultiPolygon
        name="Geometry"
        valueKey="geometry"
        value={level.geometry}
        setValue={(value) => {
          const geometry =
            typeof value === "function"
              ? value(JSON.parse(JSON.stringify(level.geometry)))
              : value;

          setLevel((prev) => ({
            ...prev,
            geometry,
          }));
        }}
      />

      <FieldCategory<LEVEL_CATEGORY>
        name="Category"
        valueKey="category"
        value={level.properties.category}
        setValue={(value) => {
          setProperty("category", value);
        }}
        category={IMDF_LEVEL_CATEGORIES}
        required
      />
      <FieldCategory<RESTRICTION_CATEGORY | null>
        name="Restriction Category"
        valueKey="restriction"
        value={level.properties.restriction}
        setValue={(value) => {
          setProperty("restriction", value);
        }}
        category={IMDF_RESTRICTION_CATEGORIES}
      />
      <FieldSelect<boolean>
        name="Environment"
        valueKey="outdoor"
        value={level.properties.outdoor}
        setValue={(value) => {
          setProperty("outdoor", value);
        }}
        data={[
          { label: "Indoor", value: false, id: "indoor" },
          { label: "Outdoor", value: true, id: "outdoor" },
        ]}
        required
      />
      <FieldNumber
        name="Floor Number (Ordinal)"
        valueKey="ordinal"
        value={level.properties.ordinal}
        setValue={(value) => {
          setProperty("ordinal", value);
        }}
        allowNegative
        required
      />
      <FieldLabels
        name="Name"
        valueKey="name"
        value={level.properties.name}
        setValue={(value) => {
          setProperty("name", value);
        }}
        required
      />
      <FieldLabels
        name="Short Name"
        valueKey="short_name"
        value={level.properties.short_name}
        setValue={(value) => {
          setProperty("short_name", value);
        }}
      />
      <FieldGeoPoint
        name="Display Point"
        valueKey="display_point"
        value={level.properties.display_point}
        setValue={(value) => {
          setProperty("display_point", value);
        }}
      />
      <Text size="2" color="gray">
        Addresses are not supported at this time
      </Text>

      <FieldMultiSelect
        name="Buildings"
        valueKey="building_ids"
        value={level.properties.building_ids || []}
        setValue={(value) => {
          setProperty("building_ids", value);
        }}
        data={buildings.map((b) => ({
          label: b.imdfBuilding.properties.name?.en || "Unnamed Building",
          value: b.imdfBuilding.id,
          id: b.imdfBuilding.id,
        }))}
        itemName="Building"
      />
      <Flex justify="end" gap="2">
        <Button
          disabled={!dirty}
          onClick={
            () => setLevel(initialLevel) // Reset to initial level
          }
          variant="surface"
          size="2"
          color="red"
          mr="2"
        >
          Revert
        </Button>
        <Button
          disabled={!dirty}
          onClick={() => saveLevel(level)}
          variant="solid"
          size="2"
        >
          Save Changes
        </Button>
      </Flex>
    </Flex>
  );
}
export default LevelEditor;
