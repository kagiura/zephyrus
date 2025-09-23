import { Button, Flex } from "@radix-ui/themes";
import { RESTRICTION_CATEGORY, Venue, VENUE_CATEGORY } from "@/types/imdf";
import { useCallback, useEffect, useMemo, useState } from "react";
import FieldText from "./FieldText";
import FieldUUID from "./FieldUUID";
import {
  IMDF_RESTRICTION_CATEGORIES,
  IMDF_VENUE_CATEGORIES,
} from "@/data/imdfCategories";
import FieldCategory from "./FieldCategory";
import FieldLabels from "./FieldLabels";
import FieldGeoPoint from "./FieldGeoPoint";
import FieldGeoMultiPolygon from "./FieldGeoMultiPolygon";
import { useWarnIfUnsavedChanges } from "@/utils/useWarnIfUnsavedChanges";

function VenueEditor({
  venue: initialVenue,
  setVenue: saveVenue,
  addressId,
}: {
  venue: Venue;
  setVenue: (venue: Venue) => void;
  addressId?: string;
}) {
  const [venue, setVenue] = useState<Venue>(initialVenue);
  const dirty = useMemo(() => {
    return JSON.stringify(venue) !== JSON.stringify(initialVenue);
  }, [venue, initialVenue]);
  useWarnIfUnsavedChanges(dirty);

  useEffect(() => {
    if (addressId) {
      setVenue((prev) => ({
        ...prev,
        properties: {
          ...prev.properties,
          address_id: addressId,
        },
      }));
    }
  }, [addressId]);

  const setProperty = useCallback(
    (key: keyof Venue["properties"], value: any) => {
      setVenue((prev) => ({
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
      <FieldUUID name="Venue ID" valueKey="id" value={venue.id} readOnly />
      <FieldText
        name="Feature Type"
        valueKey="feature_type"
        value={venue.feature_type}
        readOnly
      />
      <FieldGeoMultiPolygon
        name="Geometry"
        valueKey="geometry"
        value={venue.geometry}
        setValue={(value) => {
          const geometry =
            typeof value === "function" ? value(venue.geometry) : value;

          setVenue((prev) => ({
            ...prev,
            geometry,
          }));
        }}
      />
      <FieldCategory<VENUE_CATEGORY>
        name="Category"
        valueKey="category"
        value={venue.properties.category}
        setValue={(value) => {
          setProperty("category", value);
        }}
        category={IMDF_VENUE_CATEGORIES}
        required
      />
      <FieldCategory<RESTRICTION_CATEGORY | null>
        name="Restriction Category"
        valueKey="restriction"
        value={venue.properties.restriction}
        setValue={(value) => {
          setProperty("restriction", value);
        }}
        category={IMDF_RESTRICTION_CATEGORIES}
      />
      <FieldLabels
        name="Name"
        valueKey="name"
        value={venue.properties.name}
        setValue={(value) => {
          setProperty("name", value);
        }}
        required
      />
      <FieldLabels
        name="Alternative Name"
        valueKey="alt_name"
        value={venue.properties.alt_name}
        setValue={(value) => {
          setProperty("alt_name", value);
        }}
      />
      <FieldText
        name="Hours"
        valueKey="hours"
        description="Must follow the OSM Opening Hours specification"
        value={venue.properties.hours}
        setValue={(value) => {
          setProperty("hours", value);
        }}
      />
      <FieldText
        name="Phone"
        valueKey="phone"
        description="Must be prefixed with a country code"
        value={venue.properties.phone}
        setValue={(value) => {
          setProperty("phone", value);
        }}
      />
      <FieldText
        name="Website"
        valueKey="website"
        description="Must be a valid URL, including the scheme (http:// or https://)"
        value={venue.properties.website}
        setValue={(value) => {
          setProperty("website", value);
        }}
      />
      <FieldGeoPoint
        name="Display Point"
        valueKey="display_point"
        value={venue.properties.display_point}
        setValue={(value) => {
          setProperty("display_point", value);
        }}
      />
      <FieldText
        name="Address ID"
        valueKey="address_id"
        value={addressId ?? venue.properties.address_id}
        readOnly
      />
      <Flex justify="end" gap="2">
        <Button
          disabled={!dirty}
          onClick={
            () => setVenue(initialVenue) // Reset to initial venue
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
          onClick={() => saveVenue(venue)}
          variant="solid"
          size="2"
        >
          Save Changes
        </Button>
      </Flex>
    </Flex>
  );
}
export default VenueEditor;
