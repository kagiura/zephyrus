"use client";
import useDzg from "@/utils/useDzg";
import { Button, Text } from "@radix-ui/themes";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import UnitEditor from "@/components/DzgEditor/UnitEditor";
import DeletionDialog from "@/components/DeletionDialog";

function Page() {
  const { levelID, unitID } = useParams<{
    levelID: string;
    unitID: string;
  }>();
  const { dzg, setDzg } = useDzg();
  const router = useRouter();

  const level = useMemo(() => {
    return dzg.levels.find((l) => l.id === levelID);
  }, [dzg.levels, levelID]);
  const unit = useMemo(() => {
    return level?.units.find((u) => u.id === unitID);
  }, [level?.units, unitID]);

  const deleteUnit = useCallback(() => {
    if (!level || !unit) return;
    setDzg((prev) => ({
      ...prev,
      levels: prev.levels.map((l) =>
        l.id === level.id
          ? {
              ...l,
              units: l.units.filter((u) => u.id !== unit.id),
            }
          : l,
      ),
    }));
    router.push(`/level/${level.id}`);
  }, [level, unit, setDzg, router]);

  if (!level || !unit) {
    return <Text>Unit not found</Text>;
  }

  return (
    <div>
      <UnitEditor
        unit={unit.imdfUnit}
        setUnit={(newUnit) => {
          setDzg((prev) => ({
            ...prev,
            levels: prev.levels.map((l) =>
              l.id === level.id
                ? {
                    ...l,
                    units: l.units.map((u) =>
                      u.id === unit.id ? { ...u, imdfUnit: newUnit } : u,
                    ),
                  }
                : l,
            ),
          }));
        }}
      />

      <DeletionDialog
        trigger={
          <Button color="red" variant="ghost" mt="4">
            Delete Unit
          </Button>
        }
        title={`Delete Unit ${
          unit.imdfUnit.properties.name?.en || "Untitled Unit"
        }`}
        description={
          "Are you sure you want to delete this unit? This may cause symmetrical differences. This action cannot be undone."
        }
        onClickDelete={() => {
          deleteUnit();
        }}
      />
    </div>
  );
}
export default Page;
