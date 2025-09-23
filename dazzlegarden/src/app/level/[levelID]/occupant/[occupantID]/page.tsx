"use client";
import useDzg from "@/utils/useDzg";
import { Button, Separator, Text } from "@radix-ui/themes";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import OccupantEditor from "@/components/DzgEditor/OccupantEditor";
import DeletionDialog from "@/components/DeletionDialog";
import { DzgOccupant } from "@/types/dzg";
import AnchorEditor from "@/components/DzgEditor/AnchorEditor";

function Page() {
  const { levelID, occupantID } = useParams<{
    levelID: string;
    occupantID: string;
  }>();
  const { dzg, setDzg } = useDzg();
  const router = useRouter();

  const level = useMemo(() => {
    return dzg.levels.find((l) => l.id === levelID);
  }, [dzg.levels, levelID]);
  const occupant = useMemo(() => {
    return level?.pois.find(
      (u) => u.id === occupantID && u.type === "occupant",
    ) as DzgOccupant | undefined;
  }, [level?.pois, occupantID]);

  const deleteOccupant = useCallback(() => {
    if (!level || !occupant) return;
    setDzg((prev) => ({
      ...prev,
      levels: prev.levels.map((l) =>
        l.id === level.id
          ? {
              ...l,
              pois: l.pois.filter((u) => u.id !== occupant.id),
            }
          : l,
      ),
    }));
    router.push(`/level/${level.id}`);
  }, [level, occupant, setDzg, router]);

  if (!level || !occupant) {
    return <Text>Occupant not found</Text>;
  }

  return (
    <div>
      <AnchorEditor
        anchor={occupant.imdfAnchor}
        setAnchor={(newAnchor) => {
          setDzg((prev) => ({
            ...prev,
            levels: prev.levels.map((l) =>
              l.id === level.id
                ? {
                    ...l,
                    pois: l.pois.map((u) =>
                      u.id === occupant.id
                        ? { ...u, imdfAnchor: newAnchor }
                        : u,
                    ),
                  }
                : l,
            ),
          }));
        }}
        units={level.units}
      />
      <Separator my="4" size="4" />
      <OccupantEditor
        occupant={occupant.imdfOccupant}
        setOccupant={(newOccupant) => {
          setDzg((prev) => ({
            ...prev,
            levels: prev.levels.map((l) =>
              l.id === level.id
                ? {
                    ...l,
                    pois: l.pois.map((u) =>
                      u.id === occupant.id
                        ? { ...u, imdfOccupant: newOccupant }
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
            Delete Occupant
          </Button>
        }
        title={`Delete Occupant ${
          occupant.imdfOccupant.properties.name?.en || "Untitled Occupant"
        }`}
        description={
          "Are you sure you want to delete this occupant? This action cannot be undone."
        }
        onClickDelete={() => {
          deleteOccupant();
        }}
      />
    </div>
  );
}
export default Page;
