import { Button, Callout, Flex } from "@radix-ui/themes";
import {
  Opening,
  OPENING_CATEGORY,
  ACCESSIBILITY_CATEGORY,
  ACCESS_CONTROL_CATEGORY,
} from "@/types/imdf";
import { useCallback, useEffect, useMemo, useState } from "react";
import FieldText from "./FieldText";
import FieldUUID from "./FieldUUID";
import FieldLabels from "./FieldLabels";
import FieldMultiSelect from "./FieldMultiSelect";
import FieldCategory from "./FieldCategory";
import {
  IMDF_OPENING_CATEGORIES,
  IMDF_ACCESSIBILITY_CATEGORIES,
  IMDF_ACCESS_CONTROL_CATEGORIES,
} from "@/data/imdfCategories";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import FieldDoor from "./FieldDoor";

function OpeningEditor({
  opening: initialOpening,
  setOpening: saveOpening,
}: {
  opening: Opening;
  setOpening: (opening: Opening) => void;
}) {
  const [opening, setOpening] = useState<Opening>(initialOpening);
  const dirty = useMemo(() => {
    return JSON.stringify(opening) !== JSON.stringify(initialOpening);
  }, [opening, initialOpening]);
  // useWarnIfUnsavedChanges(dirty);

  const [showAdvanced, setShowAdvanced] = useState(false);

  const setProperty = useCallback(
    (key: keyof Opening["properties"], value: any) => {
      setOpening((prev) => ({
        ...prev,
        properties: {
          ...prev.properties,
          [key]:
            typeof value === "function" ? value(prev.properties[key]) : value,
        },
      }));
    },
    [setOpening],
  );

  // if not advanced, autosave
  useEffect(() => {
    if (!showAdvanced && dirty) {
      saveOpening(opening);
    }
  }, [showAdvanced, dirty, opening, saveOpening]);

  return (
    <Flex direction="column" gap="4">
      {showAdvanced && (
        <>
          <FieldUUID
            name="Opening ID"
            valueKey="id"
            value={opening.id}
            readOnly
          />
          <FieldText
            name="Feature Type"
            valueKey="feature_type"
            value={opening.feature_type}
            readOnly
          />
        </>
      )}
      <Callout.Root color="gray" variant="soft" size="2">
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text>
          Opening geometry editing is not supported at this time
        </Callout.Text>
      </Callout.Root>
      {/* <FieldGeoPoint
        name="Geometry"
        valueKey="geometry"
        value={opening.geometry}
        setValue={(value) => {
          const geometry =
            typeof value === "function" ? value(opening.geometry) : value;
          if (!geometry) {
            return;
          }
          setOpening((prev) => ({
            ...prev,
            geometry,
          }));
        }}
        required
      /> */}
      <FieldCategory<OPENING_CATEGORY>
        name="Category"
        valueKey="category"
        value={opening.properties.category}
        setValue={(value) => {
          setProperty("category", value);
        }}
        category={IMDF_OPENING_CATEGORIES}
        required
      />
      {showAdvanced && (
        <>
          <FieldMultiSelect<ACCESSIBILITY_CATEGORY>
            name="Accessibility Categories"
            valueKey="accessibility"
            value={opening.properties.accessibility}
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
          <FieldMultiSelect<ACCESS_CONTROL_CATEGORY>
            name="Access Control Categories"
            valueKey="accessibility"
            value={opening.properties.access_control}
            setValue={(value) => {
              setProperty("access_control", value);
            }}
            data={IMDF_ACCESS_CONTROL_CATEGORIES.map((cat) => ({
              label: cat.category,
              value: cat.category,
              id: cat.category,
            }))}
            itemName="Access Control Category"
          />
        </>
      )}

      <FieldDoor
        name="Door"
        valueKey="door"
        value={opening.properties.door}
        setValue={(door) => {
          setOpening((prev) => ({
            ...prev,
            properties: {
              ...prev.properties,
              door:
                typeof door === "function" ? door(prev.properties.door) : door,
            },
          }));
        }}
      />
      <FieldLabels
        name="Name"
        valueKey="name"
        value={opening.properties.name}
        setValue={(value) => {
          setProperty("name", value);
        }}
      />

      {showAdvanced && (
        <>
          <FieldLabels
            name="Alternative Name"
            valueKey="alt_name"
            value={opening.properties.alt_name}
            setValue={(value) => {
              setProperty("alt_name", value);
            }}
          />
        </>
      )}

      {showAdvanced && (
        <>
          <FieldText
            name="Level ID"
            valueKey="level_id"
            value={opening.properties.level_id}
            readOnly
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
              () => setOpening(initialOpening) // Reset to initial opening
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
            onClick={() => saveOpening(opening)}
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
export default OpeningEditor;
