"use client";
import useDzg from "@/utils/useDzg";
import { Button, Text } from "@radix-ui/themes";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
// import OpeningEditor from "@/components/DzgEditor/OpeningEditor";
import DeletionDialog from "@/components/DeletionDialog";
import OpeningEditor from "@/components/DzgEditor/OpeningEditor";

function Page() {
  const { levelID, openingID } = useParams<{
    levelID: string;
    openingID: string;
  }>();
  const { dzg, setDzg } = useDzg();
  const router = useRouter();

  const level = useMemo(() => {
    return dzg.levels.find((l) => l.id === levelID);
  }, [dzg.levels, levelID]);
  const opening = useMemo(() => {
    return level?.openings.find((u) => u.id === openingID);
  }, [level?.openings, openingID]);

  const deleteOpening = useCallback(() => {
    if (!level || !opening) return;
    setDzg((prev) => ({
      ...prev,
      levels: prev.levels.map((l) =>
        l.id === level.id
          ? {
              ...l,
              openings: l.openings.filter((o) => o.id !== opening.id),
            }
          : l,
      ),
    }));
    router.push(`/level/${level.id}`);
  }, [level, opening, setDzg, router]);

  if (!level || !opening) {
    return <Text>Opening not found</Text>;
  }

  return (
    <div>
      <OpeningEditor
        opening={opening.imdfOpening}
        setOpening={(newOpening) => {
          setDzg((prev) => ({
            ...prev,
            levels: prev.levels.map((l) =>
              l.id === level.id
                ? {
                    ...l,
                    openings: l.openings.map((o) =>
                      o.id === opening.id
                        ? { ...o, imdfOpening: newOpening }
                        : o,
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
            Delete Opening
          </Button>
        }
        title={`Delete Opening ${
          opening.imdfOpening.properties.name?.en || "Untitled Opening"
        }`}
        description={
          "Are you sure you want to delete this opening? This action cannot be undone."
        }
        onClickDelete={() => {
          deleteOpening();
        }}
      />
    </div>
  );
}
export default Page;
