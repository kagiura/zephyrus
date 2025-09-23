"use client";
import useDzg from "@/utils/useDzg";
import BackButton from "@/components/BackButton";
import { Text } from "@radix-ui/themes";
import Title from "@/components/Title";
import { useParams } from "next/navigation";
import BuildingEditor from "@/components/DzgEditor/BuildingEditor";
import { useMemo } from "react";

function Page() {
  const { buildingID } = useParams<{
    buildingID: string;
  }>();
  const { dzg, setDzg } = useDzg();

  const building = useMemo(() => {
    return dzg.buildings.find((b) => b.id === buildingID);
  }, [dzg.buildings, buildingID]);

  if (!building) {
    return <Text>Building not found</Text>;
  }

  return (
    <div>
      <BackButton />
      <Title title={`Building`}></Title>

      <BuildingEditor
        building={building.imdfBuilding}
        setBuilding={(newBuilding) => {
          setDzg((prev) => ({
            ...prev,
            buildings: prev.buildings.map((b) =>
              b.id === building.id ? { ...b, imdfBuilding: newBuilding } : b,
            ),
          }));
        }}
      />
    </div>
  );
}
export default Page;
