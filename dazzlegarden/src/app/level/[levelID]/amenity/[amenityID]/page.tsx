"use client";
import useDzg from "@/utils/useDzg";
import { Button, Text } from "@radix-ui/themes";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import AmenityEditor from "@/components/DzgEditor/AmenityEditor";
import DeletionDialog from "@/components/DeletionDialog";
import { DzgAmenity } from "@/types/dzg";

function Page() {
  const { levelID, amenityID } = useParams<{
    levelID: string;
    amenityID: string;
  }>();
  const { dzg, setDzg } = useDzg();
  const router = useRouter();

  const level = useMemo(() => {
    return dzg.levels.find((l) => l.id === levelID);
  }, [dzg.levels, levelID]);
  const amenity = useMemo(() => {
    return level?.pois.find(
      (u) => u.id === amenityID && u.type === "amenity",
    ) as DzgAmenity | undefined;
  }, [level?.pois, amenityID]);

  const deleteAmenity = useCallback(() => {
    if (!level || !amenity) return;
    setDzg((prev) => ({
      ...prev,
      levels: prev.levels.map((l) =>
        l.id === level.id
          ? {
              ...l,
              pois: l.pois.filter((u) => u.id !== amenity.id),
            }
          : l,
      ),
    }));
    router.push(`/level/${level.id}`);
  }, [level, amenity, setDzg, router]);

  if (!level || !amenity) {
    return <Text>Amenity not found</Text>;
  }

  return (
    <div>
      <AmenityEditor
        amenity={amenity.imdfAmenity}
        setAmenity={(newAmenity) => {
          setDzg((prev) => ({
            ...prev,
            levels: prev.levels.map((l) =>
              l.id === level.id
                ? {
                    ...l,
                    pois: l.pois.map((u) =>
                      u.id === amenity.id
                        ? { ...u, imdfAmenity: newAmenity }
                        : u,
                    ),
                  }
                : l,
            ),
          }));
        }}
        units={level.units}
      />

      <DeletionDialog
        trigger={
          <Button color="red" variant="ghost" mt="4">
            Delete Amenity
          </Button>
        }
        title={`Delete Amenity ${
          amenity.imdfAmenity.properties.name?.en || "Untitled Amenity"
        }`}
        description={
          "Are you sure you want to delete this amenity? This action cannot be undone."
        }
        onClickDelete={() => {
          deleteAmenity();
        }}
      />
    </div>
  );
}
export default Page;
