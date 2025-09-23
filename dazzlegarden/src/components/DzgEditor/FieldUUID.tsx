import { FlexProps, IconButton, TextField } from "@radix-ui/themes";
import { FieldProps } from "./FieldWrapper";
import FieldText from "./FieldText";
import { ReloadIcon } from "@radix-ui/react-icons";

function FieldUUID({
  //   value,
  setValue,
  //   name,
  //   description,
  //   wrapperProps,
  ...props
}: FieldProps &
  Omit<TextField.RootProps, "value"> & {
    value: string | null;
    setValue?: (value: string | null) => void;
    nullIfEmpty?: boolean;
    wrapperProps?: FlexProps;
  }) {
  return (
    <FieldText setValue={setValue} {...props}>
      <TextField.Slot side="right">
        <IconButton
          size="1"
          onClick={() => {
            const uuid = crypto.randomUUID();
            if (setValue) {
              setValue(uuid);
            }
          }}
          variant="ghost"
          disabled={props.readOnly || props.disabled}
        >
          <ReloadIcon />
        </IconButton>
      </TextField.Slot>
    </FieldText>
  );
}
export default FieldUUID;
