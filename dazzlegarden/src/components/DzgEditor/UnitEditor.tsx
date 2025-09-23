import { Button, Flex } from "@radix-ui/themes";
import {
  Unit,
  UNIT_CATEGORY,
  RESTRICTION_CATEGORY,
  ACCESSIBILITY_CATEGORY,
} from "@/types/imdf";
import { useCallback, useEffect, useMemo, useState } from "react";
import FieldText from "./FieldText";
import FieldUUID from "./FieldUUID";
import FieldLabels from "./FieldLabels";
import FieldGeoPoint from "./FieldGeoPoint";
import FieldGeoMultiPolygon from "./FieldGeoMultiPolygon";
import FieldMultiSelect from "./FieldMultiSelect";
import FieldCategory from "./FieldCategory";
import {
  IMDF_UNIT_CATEGORIES,
  IMDF_RESTRICTION_CATEGORIES,
  IMDF_ACCESSIBILITY_CATEGORIES,
} from "@/data/imdfCategories";

function UnitEditor({
  unit: initialUnit,
  setUnit: saveUnit,
}: {
  unit: Unit;
  setUnit: (unit: Unit) => void;
}) {
  const [unit, setUnit] = useState<Unit>(initialUnit);
  const dirty = useMemo(() => {
    return JSON.stringify(unit) !== JSON.stringify(initialUnit);
  }, [unit, initialUnit]);
  // useWarnIfUnsavedChanges(dirty);

  const [showAdvanced, setShowAdvanced] = useState(false);

  const setProperty = useCallback(
    (key: keyof Unit["properties"], value: any) => {
      setUnit((prev) => ({
        ...prev,
        properties: {
          ...prev.properties,
          [key]:
            typeof value === "function" ? value(prev.properties[key]) : value,
        },
      }));
    },
    [setUnit],
  );

  // if not advanced, autosave
  useEffect(() => {
    if (!showAdvanced && dirty) {
      saveUnit(unit);
    }
  }, [showAdvanced, dirty, unit, saveUnit]);

  return (
    <Flex direction="column" gap="4">
      {showAdvanced && (
        <>
          <FieldUUID name="Unit ID" valueKey="id" value={unit.id} readOnly />
          <FieldText
            name="Feature Type"
            valueKey="feature_type"
            value={unit.feature_type}
            readOnly
          />
          <FieldGeoMultiPolygon
            name="Geometry"
            valueKey="geometry"
            value={unit.geometry}
            setValue={(value) => {
              const geometry =
                typeof value === "function" ? value(unit.geometry) : value;

              setUnit((prev) => ({
                ...prev,
                geometry,
              }));
            }}
          />
        </>
      )}

      <FieldCategory<UNIT_CATEGORY>
        name="Category"
        valueKey="category"
        value={unit.properties.category}
        setValue={(value) => {
          setProperty("category", value);
        }}
        category={IMDF_UNIT_CATEGORIES}
        required
      />
      {showAdvanced && (
        <>
          <FieldCategory<RESTRICTION_CATEGORY | null>
            name="Restriction Category"
            valueKey="restriction"
            value={unit.properties.restriction}
            setValue={(value) => {
              setProperty("restriction", value);
            }}
            category={IMDF_RESTRICTION_CATEGORIES}
          />
          <FieldMultiSelect<ACCESSIBILITY_CATEGORY>
            name="Accessibility Categories"
            valueKey="accessibility"
            value={unit.properties.accessibility}
            setValue={(value) => {
              setProperty("accessibility", value);
            }}
            data={IMDF_ACCESSIBILITY_CATEGORIES.map((cat) => ({
              label: cat.category,
              value: cat.category,
              id: cat.category,
            }))}
            itemName="Accessibility Category"
          />
        </>
      )}

      <FieldLabels
        name="Name"
        valueKey="name"
        value={unit.properties.name}
        setValue={(value) => {
          setProperty("name", value);
        }}
      />

      {showAdvanced && (
        <>
          <FieldLabels
            name="Alternative Name"
            valueKey="alt_name"
            value={unit.properties.alt_name}
            setValue={(value) => {
              setProperty("alt_name", value);
            }}
          />
          <FieldText
            name="Level ID"
            valueKey="level_id"
            value={unit.properties.level_id}
            readOnly
          />
          <FieldGeoPoint
            name="Display Point"
            valueKey="display_point"
            value={unit.properties.display_point}
            setValue={(value) => {
              setProperty("display_point", value);
            }}
          />
        </>
      )}

      <Button
        onClick={() => setShowAdvanced((prev) => !prev)}
        variant="surface"
        size="2"
      >
        {showAdvanced ? "Hide Advanced" : "Show Advanced"}
      </Button>

      {showAdvanced && (
        <Flex justify="end" gap="2">
          <Button
            disabled={!dirty}
            onClick={
              () => setUnit(initialUnit) // Reset to initial unit
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
            onClick={() => saveUnit(unit)}
            variant="solid"
            size="2"
          >
            Save Changes
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
export default UnitEditor;
