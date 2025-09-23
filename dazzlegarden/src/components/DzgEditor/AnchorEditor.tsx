import { Button, Checkbox, Flex, Text } from "@radix-ui/themes";
import { Anchor } from "@/types/imdf";
import { useCallback, useEffect, useMemo, useState } from "react";
import FieldText from "./FieldText";
import FieldUUID from "./FieldUUID";
import FieldGeoPoint from "./FieldGeoPoint";
import { DzgUnit } from "@/types/dzg";
import FieldSelect from "./FieldSelect";
import { findEnclosingPolygonIndex } from "@/utils/turf";

function AnchorEditor({
  anchor: initialAnchor,
  setAnchor: saveAnchor,
  units,
}: {
  anchor: Anchor;
  setAnchor: (anchor: Anchor) => void;
  units: DzgUnit[];
}) {
  const [anchor, setAnchor] = useState<Anchor>(initialAnchor);
  const dirty = useMemo(() => {
    return JSON.stringify(anchor) !== JSON.stringify(initialAnchor);
  }, [anchor, initialAnchor]);
  // useWarnIfUnsavedChanges(dirty);

  const [showAdvanced, setShowAdvanced] = useState(false);

  const setProperty = useCallback(
    (key: keyof Anchor["properties"], value: any) => {
      setAnchor((prev) => ({
        ...prev,
        properties: {
          ...prev.properties,
          [key]:
            typeof value === "function" ? value(prev.properties[key]) : value,
        },
      }));
    },
    [setAnchor],
  );

  const [autoDetermineUnitIDs, setAutoDetermineUnitIDs] = useState(true);

  const saveAnchorAndDetermineUnit = useCallback(
    (anchor: Anchor, autoDetermine: boolean, _?: any) => {
      let newAnchor = anchor;
      if (autoDetermine) {
        const unitIndex = findEnclosingPolygonIndex(
          anchor.geometry,
          units.map((u) => u.imdfUnit.geometry),
        );
        const unit_id =
          unitIndex >= 0 ? units[unitIndex].imdfUnit.id : undefined;
        newAnchor = {
          ...newAnchor,
          properties: {
            ...newAnchor.properties,
            unit_id: unit_id || newAnchor.properties.unit_id,
          },
        };
        setAnchor(newAnchor);
      }
      saveAnchor(newAnchor);
    },
    [JSON.stringify(units.map((u) => u.imdfUnit.geometry))],
    // []
  );

  // if not advanced, autosave
  useEffect(() => {
    if (!showAdvanced && dirty) {
      saveAnchorAndDetermineUnit(anchor, autoDetermineUnitIDs);
    }
  }, [showAdvanced, dirty, anchor, saveAnchor]);

  return (
    <Flex direction="column" gap="4">
      {showAdvanced && (
        <>
          <FieldUUID
            name="Anchor ID"
            valueKey="id"
            value={anchor.id}
            readOnly
          />
          <FieldText
            name="Feature Type"
            valueKey="feature_type"
            value={anchor.feature_type}
            readOnly
          />
        </>
      )}
      <FieldGeoPoint
        name="Geometry"
        valueKey="geometry"
        value={anchor.geometry}
        setValue={(value) => {
          const geometry =
            typeof value === "function" ? value(anchor.geometry) : value;
          if (!geometry) {
            return;
          }
          setAnchor((prev) => ({
            ...prev,
            geometry,
          }));
        }}
        required
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
              Auto-determine Unit ID
            </Flex>
          </Text>
          <FieldSelect
            name="Unit ID"
            valueKey="unit_id"
            value={anchor.properties.unit_id}
            setValue={(value) => {
              setProperty("unit_id", value);
            }}
            data={units.map((u, i) => ({
              label:
                (u.imdfUnit.properties.name?.en || "Untitled Unit") +
                ` (${i + 1})`,
              value: u.imdfUnit.id,
              id: u.imdfUnit.id,
            }))}
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
              () => setAnchor(initialAnchor) // Reset to initial anchor
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
              saveAnchorAndDetermineUnit(anchor, autoDetermineUnitIDs)
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
export default AnchorEditor;
