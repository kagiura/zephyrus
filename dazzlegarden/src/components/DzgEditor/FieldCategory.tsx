import FieldSelect, { FieldSelectProps } from "./FieldSelect";
import { imdfCategory } from "@/data/imdfCategories";

function FieldCategory<EnumType = string | null>({
  value,
  setValue = () => {},
  category,
  ...props
}: Omit<FieldSelectProps, "value" | "setValue" | "data"> & {
  value: EnumType;
  setValue: (value: EnumType) => void;
  category: (imdfCategory & { category: EnumType })[];
}) {
  return (
    <FieldSelect<EnumType>
      {...props}
      data={category.map((c) => ({
        value: c.category,
        label: c.category,
        description: c.definition,
        id: c.category,
      }))}
      value={value}
      setValue={(value) => {
        value = value as EnumType;
        setValue(value);
      }}
    />
  );
}
export default FieldCategory;
