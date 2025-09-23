import { FlexProps, TextField } from "@radix-ui/themes";
import FieldWrapper, { FieldProps } from "./FieldWrapper";

function FieldText({
  value,
  setValue = () => {},
  name,
  description,
  valueKey,
  wrapperProps,
  required = false,
  nullIfEmpty = true,
  ...props
}: FieldProps &
  Omit<TextField.RootProps, "value"> & {
    value: string | null;
    setValue?: (value: string | null) => void;
    nullIfEmpty?: boolean;
    wrapperProps?: FlexProps;
    required?: boolean;
  }) {
  return (
    <FieldWrapper
      name={name}
      description={description}
      valueKey={valueKey}
      error={required && !value ? "This field is required" : undefined}
      {...wrapperProps}
    >
      <TextField.Root
        value={value ?? ""}
        onChange={(e) => {
          const newValue = e.target.value;
          if (setValue) {
            setValue(nullIfEmpty && newValue.trim() === "" ? null : newValue);
          }
        }}
        {...props}
      />
    </FieldWrapper>
  );
}
export default FieldText;
