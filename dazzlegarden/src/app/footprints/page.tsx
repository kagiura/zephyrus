"use client";
import useDzg from "@/utils/useDzg";
import BackButton from "@/components/BackButton";
import { Button, Flex } from "@radix-ui/themes";
import Title from "@/components/Title";
import { LayersIcon, PlusIcon } from "@radix-ui/react-icons";
import { useCallback } from "react";
import generateUUID from "@/utils/generateUUID";
import { IMDF_FOOTPRINT_TEMPLATE } from "@/utils/imdf";
import SingleAccordion from "@/components/SingleAccordion";
import FootprintEditor from "@/components/DzgEditor/FootprintEditor";
import DeletionDialog from "@/components/DeletionDialog";
function Page() {
  const { dzg, setDzg } = useDzg();

  const addFootprint = useCallback(() => {
    const newFootprintID = generateUUID();
    const newFootprint = {
      id: newFootprintID,
      imdfFootprint: {
        ...IMDF_FOOTPRINT_TEMPLATE,
        id: newFootprintID,
      },
    };
    setDzg((prev) => ({
      ...prev,
      footprints: [...prev.footprints, newFootprint],
    }));
  }, [setDzg]);

  const deleteFootprint = useCallback(
    (footprintID: string) => {
      setDzg((prev) => ({
        ...prev,
        footprints: prev.footprints.filter((f) => f.id !== footprintID),
      }));
    },
    [setDzg],
  );

  return (
    <div>
      <BackButton />
      <Title title="Footprints">
        <Button
          variant="surface"
          color="gray"
          size="2"
          onClick={addFootprint}
          mt="2"
        >
          <PlusIcon /> New Footprint
        </Button>
      </Title>

      <Flex direction="column" gap="2" mt="2">
        {dzg.footprints.map((footprint) => (
          <SingleAccordion
            key={footprint.id}
            title={
              footprint.imdfFootprint.properties?.name?.en ||
              "Unnamed Footprint " + footprint.id.slice(0, 8)
            }
            icon={<LayersIcon width="1rem" height="1rem" />}
          >
            <FootprintEditor
              footprint={footprint.imdfFootprint}
              setFootprint={(newFootprint) => {
                setDzg((prev) => ({
                  ...prev,
                  footprints: prev.footprints.map((f) =>
                    f.id === footprint.id
                      ? { ...f, imdfFootprint: newFootprint }
                      : f,
                  ),
                }));
              }}
              buildings={dzg.buildings}
            />
            <Flex justify="start" mt="2">
              <DeletionDialog
                trigger={
                  <Button color="red" variant="ghost">
                    Delete Footprint
                  </Button>
                }
                title={`Delete Footprint ${
                  footprint.imdfFootprint.properties.name?.en ||
                  "Unnamed Footprint"
                }`}
                description={
                  "Are you sure you want to delete this footprint? This action cannot be undone. "
                }
                onClickDelete={() => {
                  deleteFootprint(footprint.id);
                }}
              />
            </Flex>
          </SingleAccordion>
        ))}
      </Flex>
    </div>
  );
}
export default Page;
