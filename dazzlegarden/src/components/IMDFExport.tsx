import { Dzg } from "@/types/dzg";
import { Address, Building, Footprint, ImdfArchive, Venue } from "@/types/imdf";
import { imdfFeatureCollection } from "@/utils/imdf";
import useDzg from "@/utils/useDzg";
import { useCallback } from "react";
import JSZip from "jszip";
import { Button } from "@radix-ui/themes";
import downloadFile from "@/utils/downloadFile";

function IMDFExport() {
  const { dzg, setDzg } = useDzg();

  const dzgToImdf = useCallback((dzg: Dzg) => {
    const imdf: ImdfArchive = {
      manifest: dzg.manifest,
      address: imdfFeatureCollection<Address>([dzg.venue.imdfAddress]),
      venue: imdfFeatureCollection<Venue>([dzg.venue.imdfVenue]),
      building: imdfFeatureCollection<Building>(
        dzg.buildings.map((b) => b.imdfBuilding)
      ),
      footprint: imdfFeatureCollection<Footprint>(
        dzg.footprints.map((f) => f.imdfFootprint)
      ),
      level: imdfFeatureCollection([]),
      occupant: imdfFeatureCollection([]),
      amenity: imdfFeatureCollection([]),
      unit: imdfFeatureCollection([]),
      opening: imdfFeatureCollection([]),
      anchor: imdfFeatureCollection([]),
    };
    // i give up on typescript <- this was suggested by copilot and yeah, type inference is hard :(
    function addFeature<T extends keyof Omit<ImdfArchive, "manifest">>(
      collection: T,
      ...feature: NonNullable<ImdfArchive[T]>["features"][number][]
    ) {
      if (!imdf[collection]) {
        // @ts-ignore
        imdf[collection] = imdfFeatureCollection([...feature]);
      } else {
        // @ts-ignore
        imdf[collection].features.push(...feature);
      }
    }

    dzg.levels.forEach((level) => {
      addFeature("level", level.imdfLevel);
      level.pois.forEach((poi) => {
        switch (poi.type) {
          case "amenity":
            addFeature("amenity", poi.imdfAmenity);
            break;
          case "occupant":
            addFeature("occupant", poi.imdfOccupant);
            addFeature("anchor", poi.imdfAnchor);
            break;
        }
      });
      addFeature("unit", ...level.units.map((u) => u.imdfUnit));
      addFeature("opening", ...level.openings.map((o) => o.imdfOpening));
    });

    return imdf;
  }, []);

  const handleExport = useCallback(() => {
    if (!dzg) return;

    const imdf = dzgToImdf(dzg);

    const zip = new JSZip();
    Object.keys(imdf).forEach((key) => {
      const collection = imdf[key as keyof ImdfArchive];
      if (collection) {
        zip.file(`${key}.json`, JSON.stringify(collection, null, 2));
      }
    });

    zip.generateAsync({ type: "blob" }).then((content) => {
      downloadFile(URL.createObjectURL(content), `${dzg.id}.imdf.zip`);
    });
  }, [dzg, dzgToImdf]);

  return (
    <div>
      <Button onClick={handleExport} size="2">
        Export IMDF
      </Button>
    </div>
  );
}
export default IMDFExport;
