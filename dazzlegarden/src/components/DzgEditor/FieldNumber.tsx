import { FlexProps, TextField } from "@radix-ui/themes";
import FieldWrapper, { FieldProps } from "./FieldWrapper";
import useNumberInput from "@/utils/useNumberInput";
import { useEffect } from "react";

function FieldNumber({
  value,
  setValue = () => {},
  name,
  description,
  valueKey,
  wrapperProps,
  required = false,
  allowDecimal = false,
  allowNegative = false,
  ...props
}: FieldProps &
  Omit<TextField.RootProps, "value"> & {
    value: number | null;
    setValue?: (value: number | null) => void;
    allowDecimal?: boolean;
    allowNegative?: boolean;
    wrapperProps?: FlexProps;
    required?: boolean;
  }) {
  const { numberValue, stringValue, onChange, onBlur, isValid } =
    useNumberInput(value, {
      allowDecimal,
      allowNull: !required,
      allowNegative,
    });

  useEffect(() => {
    if (setValue && isValid) {
      setValue(numberValue);
    }
  }, [numberValue, isValid]);
  return (
    <FieldWrapper
      name={name}
      description={description}
      valueKey={valueKey}
      error={isValid ? undefined : "Invalid number"}
      {...wrapperProps}
    >
      <TextField.Root
        value={stringValue}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
    </FieldWrapper>
  );
}
export default FieldNumber;
