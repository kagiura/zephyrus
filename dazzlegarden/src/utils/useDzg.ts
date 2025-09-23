import { Dzg } from "@/types/dzg";
import { useLocalStorage } from "usehooks-ts";
import {
  IMDF_ADDRESS_TEMPLATE,
  IMDF_MANIFEST_TEMPLATE,
  IMDF_VENUE_TEMPLATE,
} from "./imdf";
import { useCallback } from "react";
import downloadFile from "./downloadFile";

export default function useDzg() {
  const [dzg, setDzg] = useLocalStorage<Dzg>("dz-dzg", {
    id: "default",
    manifest: IMDF_MANIFEST_TEMPLATE,
    venue: {
      id: IMDF_VENUE_TEMPLATE.id,
      name: IMDF_VENUE_TEMPLATE.properties.name.en,
      imdfVenue: IMDF_VENUE_TEMPLATE,
      imdfAddress: IMDF_ADDRESS_TEMPLATE,
    },
    buildings: [],
    footprints: [],
    levels: [],
  } as Dzg);

  const downloadDzg = useCallback(() => {
    // download as json
    const blob = new Blob([JSON.stringify(dzg, null, 2)], {
      type: "application/json",
    });
    downloadFile(URL.createObjectURL(blob), `${dzg.id}.dzg.json`);
  }, [dzg]);

  return { dzg, setDzg, downloadDzg };
}
