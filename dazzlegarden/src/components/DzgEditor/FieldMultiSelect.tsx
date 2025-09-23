import {
  Button,
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
import {
  Dispatch,
  Fragment,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import {
  Cross1Icon,
  InfoCircledIcon,
  PlusIcon,
  TrashIcon,
} from "@radix-ui/react-icons";

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
    value: T[] | null;
    setValue?: Dispatch<SetStateAction<T[] | null>>;
    data: SelectItem<T>[] | SelectItemGrouped<T>[];
    required?: boolean;
    wrapperProps?: FlexProps;
    itemName?: string;
  };

function FieldMultiSelect<T = string | null>({
  value: values,
  setValue = () => {},
  name,
  description,
  valueKey,
  wrapperProps,
  data,
  required = false,
  error,
  itemName = "Item",
  ...props
}: FieldSelectProps<T>) {
  const groups = useMemo(() => {
    if (!data || data.length < 2) return [];
    if ("group" in data[1]) {
      const grouped = data as SelectItemGrouped<T>[];
      return grouped.reduce(
        (acc, item) => {
          if (!acc[item.group]) {
            acc[item.group] = [];
          }
          acc[item.group].push(item);
          return acc;
        },
        {} as Record<string, SelectItemGrouped<T>[]>,
      );
    } else {
      return { "": data as SelectItem<T>[] };
    }
  }, [data]);

  const addItem = useCallback(() => {
    if (!setValue) return;
    // get new item not already in value
    const newItem = data.find((item) => !values?.includes(item.value));
    if (!newItem) return;
    setValue((prev) => [...(prev || []), newItem.value]);
  }, [setValue, data, values]);

  const removeItem = useCallback(
    (item: T) => {
      if (!setValue) return;
      setValue((prev) => {
        const newValues = prev?.filter((v) => v !== item) || [];
        if (required && newValues.length === 0) {
          return prev; // Prevent removing the last item if required
        }
        if (newValues.length === 0) {
          return null;
        }
        return newValues;
      });
    },
    [setValue],
  );

  const changeItem = useCallback(
    (oldItem: T, newItem: T) => {
      if (!setValue) return;
      setValue((prev) => {
        if (!prev) return [newItem];
        return prev.map((item) => (item === oldItem ? newItem : item));
      });
    },
    [setValue],
  );

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
      error={error}
      {...wrapperProps}
    >
      <Flex direction="column" gap="1" style={{ width: "100%" }}>
        {(values || []).map((value, i) => (
          <Flex key={i} gap="1" align="center">
            <Select.Root
              {...props}
              value={data.find((item) => item.value === value)?.id}
              onValueChange={(id) => {
                const newValue = data.find((item) => item.id === id)?.value;
                if (newValue === undefined) {
                  console.warn(`Value not found for id: ${id}`);
                  return;
                }
                changeItem(value, newValue);
              }}
            >
              <Select.Trigger style={{ width: "100%", flex: 1 }}>
                {data.find((item) => item.value === value)?.label || ""}
              </Select.Trigger>
              <Select.Content>
                {Object.entries(groups).map(([group, items]) => (
                  <Select.Group key={group}>
                    {group && <Select.Label>{group}</Select.Label>}
                    {items
                      .filter(
                        // filter out items that are already in values
                        (item) =>
                          !values?.includes(item.value) || item.value === value,
                      )
                      .map((item) => (
                        <Select.Item key={item.id} value={item.id}>
                          {item.label}
                        </Select.Item>
                      ))}
                  </Select.Group>
                ))}
              </Select.Content>
            </Select.Root>
            <IconButton
              color="red"
              variant="ghost"
              ml="2"
              size="1"
              disabled={required && (values?.length || 0) <= 1}
              onClick={() => removeItem(value)}
            >
              <TrashIcon />
            </IconButton>
          </Flex>
        ))}
      </Flex>
      <Button
        variant="surface"
        size="1"
        color="gray"
        mt="2"
        onClick={addItem}
        disabled={data.length === 0 || (values?.length || 0) >= data.length}
      >
        <PlusIcon />
        Add {itemName}
      </Button>
      <Flex align="center"></Flex>
    </FieldWrapper>
  );
}
export default FieldMultiSelect;
