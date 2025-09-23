import { Button, Dialog, Flex } from "@radix-ui/themes";
import { Address } from "@/types/imdf";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import FieldText from "./FieldText";
import FieldUUID from "./FieldUUID";
import FieldSelect from "./FieldSelect";

import { iso31661, iso31662 } from "iso-3166";

function AddressEditorForm({
  address,
  setAddress,
}: {
  address: Address;
  setAddress: Dispatch<SetStateAction<Address>>;
}) {
  const setProperty = useCallback(
    (key: keyof Address["properties"], value: any) => {
      setAddress((prev) => ({
        ...prev,
        properties: {
          ...prev.properties,
          [key]:
            typeof value === "function" ? value(prev.properties[key]) : value,
        },
      }));
    },
    [],
  );
  return (
    <Flex direction="column" gap="4">
      <FieldUUID name="Address ID" valueKey="id" value={address.id} readOnly />
      <FieldText
        name="Feature Type"
        valueKey="feature_type"
        value={address.feature_type}
        readOnly
      />

      <FieldText
        name="Address"
        description='Formatted postal address, excluding suite/unit identifier, i.e. "123 E. Main Street"'
        valueKey="address"
        value={address.properties.address}
        setValue={(value) => {
          setProperty("address", value);
        }}
        required
      />

      <FieldText
        name="Unit"
        description='Qualifying official or proprietary unit/suite designation, i.e. "2A"'
        valueKey="unit"
        value={address.properties.unit}
        setValue={(value) => {
          setProperty("unit", value);
        }}
      />
      <FieldText
        name="Locality"
        description="Official locality (e.g. city, town) component of the postal address"
        valueKey="locality"
        value={address.properties.locality}
        setValue={(value) => {
          setProperty("locality", value);
        }}
        required
      />
      <FieldSelect<string>
        name="Country"
        valueKey="country"
        data={iso31661.map((i) => ({
          value: i.alpha2,
          label: i.name,
          id: i.alpha2,
        }))}
        value={address.properties.country}
        setValue={(value) => {
          setProperty("country", value);
        }}
        required
      />
      <FieldSelect<string | null>
        name="Province / State"
        description="Province (e.g. state, territory) component of the postal address. The options presented here are based on the selected country."
        valueKey="province"
        data={iso31662
          .filter((i) => i.parent === address.properties.country)
          .map((i) => ({
            value: i.code,
            label: i.name,
            id: i.code,
          }))}
        value={address.properties.province}
        setValue={(value) => {
          setProperty("province", value);
        }}
        required
      />
    </Flex>
  );
}
function AddressEditor({
  address: initialAddress,
  setAddress: saveAddress,
  children,
}: {
  address: Address;
  setAddress: (address: Address) => void;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState<Address>(initialAddress);

  const dirty = useMemo(() => {
    return JSON.stringify(address) !== JSON.stringify(initialAddress);
  }, [address, initialAddress]);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Content
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <Dialog.Title>Edit Address</Dialog.Title>
        <Flex direction="column" gap="4">
          <AddressEditorForm address={address} setAddress={setAddress} />

          <Flex justify="end" gap="2">
            <Button
              // disabled={!dirty}
              onClick={() => {
                setOpen(false);
                if (dirty) {
                  setAddress(initialAddress);
                }
              }}
              variant="surface"
              size="2"
              color={dirty ? "red" : "gray"}
              mr="2"
            >
              {dirty ? "Discard Changes" : "Close"}
            </Button>
            <Button
              disabled={!dirty}
              onClick={() => {
                setOpen(false);
                saveAddress(address);
              }}
              variant="solid"
              size="2"
            >
              Save Changes
            </Button>
          </Flex>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
export default AddressEditor;
