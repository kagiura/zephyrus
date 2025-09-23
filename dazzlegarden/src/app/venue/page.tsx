"use client";
import useDzg from "@/utils/useDzg";
import BackButton from "@/components/BackButton";
import VenueEditor from "@/components/DzgEditor/VenueEditor";
import AddressEditor from "@/components/DzgEditor/AddressEditor";
import { Button } from "@radix-ui/themes";
import Title from "@/components/Title";
function Page() {
  const { dzg, setDzg } = useDzg();
  return (
    <div>
      <BackButton />
      <Title title="Venue"></Title>
      <VenueEditor
        venue={dzg.venue.imdfVenue}
        setVenue={(venue) => {
          setDzg((prev) => ({
            ...prev,
            venue: {
              ...prev.venue,
              imdfVenue: venue,
            },
          }));
        }}
        addressId={dzg.venue.imdfAddress.id}
      />
      <AddressEditor
        address={dzg.venue.imdfAddress}
        setAddress={(address) => {
          setDzg((prev) => ({
            ...prev,
            venue: {
              ...prev.venue,
              imdfVenue: {
                ...prev.venue.imdfVenue,
                properties: {
                  ...prev.venue.imdfVenue.properties,
                  address_id: address.id,
                },
              },
              imdfAddress: address,
            },
          }));
        }}
      >
        <Button variant="solid" color="gray" size="2" style={{ width: "100%" }}>
          Edit Address
        </Button>
      </AddressEditor>
    </div>
  );
}
export default Page;
