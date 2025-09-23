import { Button, Flex } from "@radix-ui/themes";
import { Occupant, OCCUPANT_CATEGORY } from "@/types/imdf";
import { useCallback, useEffect, useMemo, useState } from "react";
import FieldText from "./FieldText";
import FieldUUID from "./FieldUUID";
import FieldLabels from "./FieldLabels";
import { DzgUnit } from "@/types/dzg";
import FieldCategory from "./FieldCategory";
import { IMDF_OCCUPANT_CATEGORIES } from "@/data/imdfCategories";

function OccupantEditor({
  occupant: initialOccupant,
  setOccupant: saveOccupant,
  units,
}: {
  occupant: Occupant;
  setOccupant: (occupant: Occupant) => void;
  units: DzgUnit[];
}) {
  const [occupant, setOccupant] = useState<Occupant>(initialOccupant);
  const dirty = useMemo(() => {
    return JSON.stringify(occupant) !== JSON.stringify(initialOccupant);
  }, [occupant, initialOccupant]);
  // useWarnIfUnsavedChanges(dirty);

  const [showAdvanced, setShowAdvanced] = useState(false);

  const setProperty = useCallback(
    (key: keyof Occupant["properties"], value: any) => {
      setOccupant((prev) => ({
        ...prev,
        properties: {
          ...prev.properties,
          [key]:
            typeof value === "function" ? value(prev.properties[key]) : value,
        },
      }));
    },
    [setOccupant],
  );

  // if not advanced, autosave
  useEffect(() => {
    if (!showAdvanced && dirty) {
      saveOccupant(occupant);
    }
  }, [showAdvanced, dirty, occupant, saveOccupant]);

  return (
    <Flex direction="column" gap="4">
      {showAdvanced && (
        <>
          <FieldUUID
            name="Occupant ID"
            valueKey="id"
            value={occupant.id}
            readOnly
          />
          <FieldText
            name="Feature Type"
            valueKey="feature_type"
            value={occupant.feature_type}
            readOnly
          />
        </>
      )}

      <FieldLabels
        name="Name"
        valueKey="name"
        value={occupant.properties.name}
        setValue={(value) => {
          setProperty("name", value);
        }}
      />
      <FieldCategory<OCCUPANT_CATEGORY>
        name="Category"
        valueKey="category"
        value={occupant.properties.category}
        setValue={(value) => {
          setProperty("category", value);
        }}
        category={IMDF_OCCUPANT_CATEGORIES}
        required
      />

      {showAdvanced && (
        <>
          <FieldText
            name="Anchor ID"
            valueKey="anchor_id"
            value={occupant.properties.anchor_id}
            readOnly
          />
        </>
      )}

      <FieldText
        name="Hours"
        valueKey="hours"
        description="Must follow the OSM Opening Hours specification"
        value={occupant.properties.hours}
        setValue={(value) => {
          setProperty("hours", value);
        }}
      />
      <FieldText
        name="Phone"
        valueKey="phone"
        description="Must be prefixed with a country code"
        value={occupant.properties.phone}
        setValue={(value) => {
          setProperty("phone", value);
        }}
      />
      <FieldText
        name="Website"
        valueKey="website"
        description="Must be a valid URL, including the scheme (http:// or https://)"
        value={occupant.properties.website}
        setValue={(value) => {
          setProperty("website", value);
        }}
      />

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
              () => setOccupant(initialOccupant) // Reset to initial occupant
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
            onClick={() => saveOccupant(occupant)}
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
export default OccupantEditor;
