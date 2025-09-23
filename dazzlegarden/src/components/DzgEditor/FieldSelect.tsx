import {
  DataList,
  Dialog,
  Flex,
  FlexProps,
  IconButton,
  Link,
  Select,
  Separator,
  Text,
} from "@radix-ui/themes";
import FieldWrapper, { FieldProps } from "./FieldWrapper";
import { Dispatch, Fragment, SetStateAction, useMemo } from "react";
import generateUUID from "@/utils/generateUUID";
import { Cross1Icon, InfoCircledIcon } from "@radix-ui/react-icons";

export interface SelectItem<T = string> {
  value: T;
  label: string;
  description?: string;
  id: string;
}

export interface SelectItemGrouped<T = string> extends SelectItem<T> {
  group: string;
}

export type FieldSelectProps<T = string | null> = FieldProps &
  Omit<Select.RootProps, "value"> & {
    value: T;
    setValue?: Dispatch<SetStateAction<T>>;
    data: SelectItem<T>[] | SelectItemGrouped<T>[];
    wrapperProps?: FlexProps;
    required?: boolean;
  };

const emptyValue = generateUUID();
function FieldSelect<T = string | null>({
  value,
  setValue = () => {},
  name,
  description,
  valueKey,
  wrapperProps,
  data: dataRaw,
  required = false,
  ...props
}: FieldSelectProps<T>) {
  const data = useMemo(() => {
    if (!dataRaw || dataRaw.length === 0) return [] as typeof dataRaw;
    if (required) {
      return dataRaw;
    }

    const nullItem = {
      group: "group" in dataRaw[0] ? "" : undefined,
      id: emptyValue,
      value: null,
      label: "None",
    } as (typeof dataRaw)[0];

    return [nullItem, ...dataRaw] as typeof dataRaw;
  }, [dataRaw, required]);

  const groups = useMemo(() => {
    if (!data || data.length === 0) return [];
    if ("group" in data[1]) {
      const grouped = data as SelectItemGrouped[];
      return grouped.reduce(
        (acc, item) => {
          if (!acc[item.group]) {
            acc[item.group] = [];
          }
          acc[item.group].push(item);
          return acc;
        },
        {} as Record<string, SelectItemGrouped[]>
      );
    } else {
      return { "": data as SelectItem[] };
    }
  }, [data]);
  return (
    <FieldWrapper
      name={name}
      description={
        <>
          {description}
          {data.filter((item) => item.description).length > 0 && (
            <Dialog.Root>
              <Dialog.Trigger>
                <Link
                  color="gray"
                  underline="always"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <InfoCircledIcon
                    width="0.7rem"
                    height="0.7rem"
                    style={{ verticalAlign: "-0.1rem" }}
                  />{" "}
                  See more
                </Link>
              </Dialog.Trigger>

              <Dialog.Content maxWidth="450px">
                <Flex justify="between">
                  <Dialog.Title>Definitions</Dialog.Title>

                  <Dialog.Close>
                    <IconButton color="gray" variant="ghost">
                      <Cross1Icon />
                    </IconButton>
                  </Dialog.Close>
                </Flex>
                <DataList.Root style={{ rowGap: "var(--space-3)" }}>
                  {data.map((item, i) => (
                    <Fragment key={item.id}>
                      {i > 0 && (
                        <Separator size="4" style={{ gridColumn: "span 2" }} />
                      )}
                      <DataList.Item key={item.id} align="start">
                        <DataList.Label minWidth="88px">
                          {item.label}
                        </DataList.Label>
                        <DataList.Value>
                          {item.description ? (
                            <Text>{item.description}</Text>
                          ) : (
                            <Text color="gray">—</Text>
                          )}
                        </DataList.Value>
                      </DataList.Item>
                    </Fragment>
                  ))}
                </DataList.Root>
              </Dialog.Content>
            </Dialog.Root>
          )}
        </>
      }
      valueKey={valueKey}
      {...wrapperProps}
    >
      <Flex align="center">
        <Select.Root
          {...props}
          value={data.find((item) => item.value === value)?.id}
          onValueChange={(id) => {
            if (setValue) {
              const newValue = data.find((item) => item.id === id)?.value;
              if (newValue === undefined) {
                console.warn(`Value not found for id: ${id}`);
                return;
              }
              setValue(newValue);
            }
          }}
        >
          <Select.Trigger style={{ width: "100%", flex: 1 }} />
          <Select.Content>
            {Object.entries(groups).map(([group, items]) => (
              <Select.Group key={group}>
                {group && <Select.Label>{group}</Select.Label>}
                {items.map((item) => (
                  <Select.Item key={item.id} value={item.id}>
                    {item.label}
                  </Select.Item>
                ))}
              </Select.Group>
            ))}
          </Select.Content>
        </Select.Root>
      </Flex>
    </FieldWrapper>
  );
}
export default FieldSelect;
