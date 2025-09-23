import { Checkbox, Flex, Text } from "@radix-ui/themes";
import FieldWrapper, { FieldProps } from "./FieldWrapper";
import { Door, DOOR_MATERIAL_CATEGORY, DOOR_TYPE } from "@/types/imdf";
import { useState } from "react";
import FieldSelect from "./FieldSelect";
import {
  IMDF_DOOR_CATEGORIES,
  IMDF_DOOR_MATERIAL_CATEGORIES,
} from "@/data/imdfCategories";
import FieldCategory from "./FieldCategory";

function FieldDoor({
  value,
  setValue = () => {},
  name,
  description,
  valueKey,
  ...props
}: FieldProps & {
  value: Door | null;
  setValue?: React.Dispatch<React.SetStateAction<Door | null>>;
}) {
  const [hasDoor, setHasDoor] = useState(!!value);
  return (
    <>
      <FieldWrapper
        name={name}
        description={description}
        valueKey={valueKey}
        {...props}
      >
        <Text as="label" size="2">
          <Flex gap="2">
            <Checkbox
              checked={hasDoor}
              onCheckedChange={(checked) => {
                if (typeof checked !== "boolean") {
                  return;
                }
                if (checked) {
                  setValue({
                    type: null,
                    automatic: null,
                    material: null,
                  });
                } else {
                  setValue(null);
                }
                setHasDoor(checked);
              }}
            />
            Has Door
          </Flex>
        </Text>
      </FieldWrapper>
      {hasDoor && (
        <>
          <FieldCategory<DOOR_TYPE | null>
            name="Door Type"
            valueKey="door.type"
            value={value?.type ?? null}
            setValue={(doorType) => {
              setValue((prev) =>
                prev
                  ? {
                      ...prev,
                      type: doorType,
                    }
                  : null,
              );
            }}
            category={IMDF_DOOR_CATEGORIES}
          />
          <FieldSelect<boolean | null>
            name="Door Automatic"
            valueKey="door.automatic"
            value={value === null ? null : value.automatic}
            setValue={(automatic) => {
              setValue((prev) =>
                prev
                  ? {
                      ...prev,
                      automatic:
                        typeof automatic === "function"
                          ? automatic(prev.automatic)
                          : automatic,
                    }
                  : null,
              );
            }}
            required
            data={[
              { label: "Unspecified", value: null, id: "unknown" },
              { label: "Automatic", value: true, id: "automatic" },
              { label: "Manual", value: false, id: "manual" },
            ]}
          />
          <FieldCategory<DOOR_MATERIAL_CATEGORY | null>
            name="Door Material"
            valueKey="door.material"
            value={value?.material ?? null}
            setValue={(doorType) => {
              setValue((prev) =>
                prev
                  ? {
                      ...prev,
                      material: doorType,
                    }
                  : null,
              );
            }}
            category={IMDF_DOOR_MATERIAL_CATEGORIES}
          />
        </>
      )}
    </>
  );
}
export default FieldDoor;
