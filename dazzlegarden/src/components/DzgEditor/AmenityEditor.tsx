import { Button, Checkbox, Flex, Text } from "@radix-ui/themes";
import {
  Amenity,
  AMENITY_CATEGORY,
  ACCESSIBILITY_CATEGORY,
} from "@/types/imdf";
import { useCallback, useEffect, useMemo, useState } from "react";
import FieldText from "./FieldText";
import FieldUUID from "./FieldUUID";
import FieldLabels from "./FieldLabels";
import FieldGeoPoint from "./FieldGeoPoint";
import FieldMultiSelect from "./FieldMultiSelect";
import { DzgUnit } from "@/types/dzg";
import FieldCategory from "./FieldCategory";
import {
  IMDF_AMENITY_CATEGORIES,
  IMDF_ACCESSIBILITY_CATEGORIES,
} from "@/data/imdfCategories";
import { findEnclosingPolygonIndex } from "@/utils/turf";

function AmenityEditor({
  amenity: initialAmenity,
  setAmenity: saveAmenity,
  units,
}: {
  amenity: Amenity;
  setAmenity: (amenity: Amenity) => void;
  units: DzgUnit[];
}) {
  const [amenity, setAmenity] = useState<Amenity>(initialAmenity);
  const dirty = useMemo(() => {
    return JSON.stringify(amenity) !== JSON.stringify(initialAmenity);
  }, [amenity, initialAmenity]);
  // useWarnIfUnsavedChanges(dirty);

  const [showAdvanced, setShowAdvanced] = useState(false);

  const saveAmenityAndDetermineUnit = useCallback(
    (amenity: Amenity, autoDetermine: boolean, _?: any) => {
      let newAmenity = amenity;
      if (autoDetermine) {
        const unitIndex = findEnclosingPolygonIndex(
          amenity.geometry,
          units.map((u) => u.imdfUnit.geometry),
        );
        const unit_ids = unitIndex >= 0 ? [units[unitIndex].imdfUnit.id] : [];
        newAmenity = {
          ...newAmenity,
          properties: {
            ...newAmenity.properties,
            unit_ids,
          },
        };
        setAmenity(newAmenity);
      }
      saveAmenity(newAmenity);
    },
    [JSON.stringify(units.map((u) => u.imdfUnit.geometry))],
    // []
  );

  const setProperty = useCallback(
    (key: keyof Amenity["properties"], value: any) => {
      setAmenity((prev) => ({
        ...prev,
        properties: {
          ...prev.properties,
          [key]:
            typeof value === "function" ? value(prev.properties[key]) : value,
        },
      }));
    },
    [setAmenity],
  );

  const isAutoDetermineUnitIDs = useMemo(() => {
    // determine only if there is only one unit id (or less)
    return amenity.properties.unit_ids.filter((id) => id).length <= 1;
  }, [amenity.properties.unit_ids]);

  const [autoDetermineUnitIDs, setAutoDetermineUnitIDs] = useState(
    isAutoDetermineUnitIDs,
  );

  // if not advanced, autosave
  useEffect(() => {
    if (!showAdvanced && dirty) {
      saveAmenityAndDetermineUnit(amenity, autoDetermineUnitIDs, units);
    }
  }, [
    showAdvanced,
    dirty,
    amenity,
    saveAmenityAndDetermineUnit,
    autoDetermineUnitIDs,
  ]);

  return (
    <Flex direction="column" gap="4">
      {showAdvanced && (
        <>
          <FieldUUID
            name="Amenity ID"
            valueKey="id"
            value={amenity.id}
            readOnly
          />
          <FieldText
            name="Feature Type"
            valueKey="feature_type"
            value={amenity.feature_type}
            readOnly
          />
        </>
      )}
      <FieldGeoPoint
        name="Geometry"
        valueKey="geometry"
        value={amenity.geometry}
        setValue={(value) => {
          const geometry =
            typeof value === "function" ? value(amenity.geometry) : value;
          if (!geometry) {
            return;
          }
          setAmenity((prev) => ({
            ...prev,
            geometry,
          }));
        }}
        required
      />
      <FieldCategory<AMENITY_CATEGORY>
        name="Category"
        valueKey="category"
        value={amenity.properties.category}
        setValue={(value) => {
          setProperty("category", value);
        }}
        category={IMDF_AMENITY_CATEGORIES}
        required
      />
      {showAdvanced && (
        <>
          <FieldMultiSelect<ACCESSIBILITY_CATEGORY>
            name="Accessibility Categories"
            valueKey="accessibility"
            value={amenity.properties.accessibility}
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
        value={amenity.properties.name}
        setValue={(value) => {
          setProperty("name", value);
        }}
      />

      {showAdvanced && (
        <>
          <FieldLabels
            name="Alternative Name"
            valueKey="alt_name"
            value={amenity.properties.alt_name}
            setValue={(value) => {
              setProperty("alt_name", value);
            }}
          />
        </>
      )}

      <FieldText
        name="Hours"
        valueKey="hours"
        description="Must follow the OSM Opening Hours specification"
        value={amenity.properties.hours}
        setValue={(value) => {
          setProperty("hours", value);
        }}
      />
      <FieldText
        name="Phone"
        valueKey="phone"
        description="Must be prefixed with a country code"
        value={amenity.properties.phone}
        setValue={(value) => {
          setProperty("phone", value);
        }}
      />
      <FieldText
        name="Website"
        valueKey="website"
        description="Must be a valid URL, including the scheme (http:// or https://)"
        value={amenity.properties.website}
        setValue={(value) => {
          setProperty("website", value);
        }}
      />

      {showAdvanced && (
        <>
          <Text as="label" size="2">
            <Flex gap="2">
              <Checkbox
                checked={autoDetermineUnitIDs}
                onCheckedChange={(checked) => {
                  if (typeof checked !== "boolean") {
                    return;
                  }
                  setAutoDetermineUnitIDs(checked);
                }}
              />
              Auto-determine Unit IDs
            </Flex>
          </Text>
          <FieldMultiSelect
            name="Unit IDs"
            valueKey="unit_ids"
            value={amenity.properties.unit_ids}
            setValue={(value) => {
              setProperty("unit_ids", value);
            }}
            data={units.map((u, i) => ({
              label:
                (u.imdfUnit.properties.name?.en || "Untitled Unit") +
                ` ${i + 1}`,
              value: u.imdfUnit.id,
              id: u.imdfUnit.id,
            }))}
            itemName="Building"
            required
            disabled={autoDetermineUnitIDs}
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
              () => setAmenity(initialAmenity) // Reset to initial amenity
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
            onClick={() =>
              saveAmenityAndDetermineUnit(amenity, autoDetermineUnitIDs)
            }
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
export default AmenityEditor;
