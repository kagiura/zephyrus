import { Button, Flex } from "@radix-ui/themes";
import { Footprint, FOOTPRINT_CATEGORY } from "@/types/imdf";
import { useCallback, useEffect, useMemo, useState } from "react";
import FieldText from "./FieldText";
import FieldUUID from "./FieldUUID";
import { IMDF_FOOTPRINT_CATEGORIES } from "@/data/imdfCategories";
import FieldCategory from "./FieldCategory";
import FieldLabels from "./FieldLabels";
import FieldGeoMultiPolygon from "./FieldGeoMultiPolygon";
import FieldMultiSelect from "./FieldMultiSelect";
import { DzgBuilding } from "@/types/dzg";
import { useWarnIfUnsavedChanges } from "@/utils/useWarnIfUnsavedChanges";

function FootprintEditor({
  footprint: initialFootprint,
  setFootprint: saveFootprint,
  buildings,
  addressId,
}: {
  footprint: Footprint;
  setFootprint: (footprint: Footprint) => void;
  buildings: DzgBuilding[];
  addressId?: string;
}) {
  const [footprint, setFootprint] = useState<Footprint>(initialFootprint);
  const dirty = useMemo(() => {
    return JSON.stringify(footprint) !== JSON.stringify(initialFootprint);
  }, [footprint, initialFootprint]);
  useWarnIfUnsavedChanges(dirty);

  useEffect(() => {
    if (addressId) {
      setFootprint((prev) => ({
        ...prev,
        properties: {
          ...prev.properties,
          address_id: addressId,
        },
      }));
    }
  }, [addressId]);

  const setProperty = useCallback(
    (key: keyof Footprint["properties"], value: any) => {
      setFootprint((prev) => ({
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
        name="Footprint ID"
        valueKey="id"
        value={footprint.id}
        readOnly
      />
      <FieldText
        name="Feature Type"
        valueKey="feature_type"
        value={footprint.feature_type}
        readOnly
      />
      <FieldGeoMultiPolygon
        name="Geometry"
        valueKey="geometry"
        value={footprint.geometry}
        setValue={(value) => {
          const geometry =
            typeof value === "function" ? value(footprint.geometry) : value;

          setFootprint((prev) => ({
            ...prev,
            geometry,
          }));
        }}
      />
      <FieldCategory<FOOTPRINT_CATEGORY>
        name="Category"
        valueKey="category"
        value={footprint.properties.category}
        setValue={(value) => {
          setProperty("category", value);
        }}
        category={IMDF_FOOTPRINT_CATEGORIES}
        required
      />
      <FieldLabels
        name="Name"
        valueKey="name"
        value={footprint.properties.name}
        setValue={(value) => {
          setProperty("name", value);
        }}
      />
      <FieldMultiSelect
        name="Buildings"
        valueKey="building_ids"
        value={footprint.properties.building_ids || []}
        setValue={(value) => {
          setProperty("building_ids", value);
        }}
        data={buildings.map((b) => ({
          label: b.imdfBuilding.properties.name?.en || "Unnamed Building",
          value: b.imdfBuilding.id,
          id: b.imdfBuilding.id,
        }))}
        error={
          footprint.properties.building_ids?.length === 0
            ? "At least one building must be selected."
            : undefined
        }
        itemName="Building"
        required
      />
      <Flex justify="end" gap="2">
        <Button
          disabled={!dirty}
          onClick={
            () => setFootprint(initialFootprint) // Reset to initial footprint
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
          onClick={() => saveFootprint(footprint)}
          variant="solid"
          size="2"
        >
          Save Changes
        </Button>
      </Flex>
    </Flex>
  );
}
export default FootprintEditor;
