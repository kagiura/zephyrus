import { Dzg, DzgAmenity, DzgOccupant } from "@/types/dzg";
import {
  Address,
  Building,
  FEATURE_TYPES,
  FeatureType,
  Footprint,
  ImdfArchive,
  Venue,
} from "@/types/imdf";
import downloadFile from "@/utils/downloadFile";
import { imdfFeatureCollection } from "@/utils/imdf";
import useDzg from "@/utils/useDzg";
import { Box, Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import clsx from "clsx";
import JSZip from "jszip";
import { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";

import styles from "./IMDFImport.module.css";

function IMDFImport() {
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

  const imdfToDzg = useCallback(
    async (zipFile: File) => {
      const zip = await JSZip.loadAsync(zipFile);
      const imdf: Partial<ImdfArchive> = {};
      console.log("ZIP", zip);
      await Promise.all(
        Object.keys(zip.files).map(async (filename) => {
          // ignore __MACOSX folder
          if (filename.startsWith("__MACOSX/")) return;
          if (filename.endsWith(".json")) {
            const content = await zip.files[filename].async("string");
            try {
              const key = filename.split("/").pop()!.replace(".json", "");
              // only assign to imdf if key is a valid ImdfArchive key
              if (
                FEATURE_TYPES.indexOf(key as FeatureType) === -1 &&
                key !== "manifest"
              ) {
                console.warn(`Unknown IMDF file: ${filename}`);
                return;
              }

              console.log(
                "Parsing",
                key,
                "(",
                filename,
                ")",
                content.split("\n").slice(0, 5).join("\n") + "\n..."
              );
              const parsed = JSON.parse(content);
              // get key by taking last section of path, then removing .json extension
              // @ts-ignore
              imdf[key] = parsed;
            } catch (error) {
              console.error(`Failed to parse ${filename}`, error);
            }
          }
        })
      );

      console.log("IMDF", imdf);
      if (!imdf.manifest || !imdf.venue || !imdf.address) {
        toast.error("IMDF ZIP is missing required files.");
        return;
      }

      const newDzg: Dzg = {
        id: "imdf-import-" + crypto.randomUUID(),
        manifest: imdf.manifest,
        venue: {
          id: imdf.venue.features[0].id,
          name: imdf.venue.features[0].properties.name.en,
          imdfVenue: imdf.venue.features[0],
          imdfAddress: imdf.address.features[0],
        },
        buildings: imdf.building
          ? imdf.building.features.map((b) => ({
              id: b.id,
              imdfBuilding: b,
            }))
          : [],
        footprints: imdf.footprint
          ? imdf.footprint.features.map((f) => ({
              id: f.id,
              imdfFootprint: f,
            }))
          : [],
        levels: imdf.level
          ? imdf.level.features.map((l) => {
              const units = imdf.unit
                ? imdf.unit.features
                    .filter((u) => u.properties.level_id === l.id)
                    .map((u) => ({ id: u.id, imdfUnit: u }))
                : [];

              const anchors = imdf.anchor
                ? imdf.anchor.features.filter((a) =>
                    a.properties.unit_id
                      ? units.find((u) => u.id === a.properties.unit_id)
                      : false
                  )
                : [];
              const amenities: DzgAmenity[] = imdf.amenity
                ? imdf.amenity.features
                    .filter((a) =>
                      a.properties.unit_ids?.some((uid) =>
                        units.find((u) => u.id === uid)
                      )
                    )
                    .map((a) => ({
                      type: "amenity" as const,
                      id: a.id,
                      imdfAmenity: a,
                    }))
                : [];
              const occupants: DzgOccupant[] =
                imdf.occupant?.features.map((o) => {
                  const anchor = anchors.find(
                    (a) => a.id === o.properties.anchor_id
                  );
                  if (!anchor) {
                    console.warn(`No anchor found for occupant ${o.id}`);
                  }
                  return {
                    type: "occupant" as const,
                    id: o.id,
                    imdfOccupant: o,
                    imdfAnchor: anchor!,
                  };
                }) || [];
              return {
                id: l.id,
                imdfLevel: l,
                openings: imdf.opening
                  ? imdf.opening.features
                      .filter((o) => o.properties.level_id === l.id)
                      .map((o) => ({ id: o.id, imdfOpening: o }))
                  : [],
                units,
                assets: [], // TODO: add support for assets (fixtures, kiosks)
                pois:
                  imdf.amenity && imdf.occupant
                    ? [
                        ...amenities,
                        ...occupants.filter(
                          (o) =>
                            o.imdfAnchor.properties.unit_id &&
                            units.find(
                              (u) => u.id === o.imdfAnchor.properties.unit_id
                            )
                        ),
                      ]
                    : [],
              };
            })
          : [],
      };

      setDzg(newDzg);
      toast.success("IMDF imported successfully!");
    },
    [setDzg]
  );

  const {
    getRootProps,
    getInputProps,
    open,
    acceptedFiles,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    accept: {
      "application/zip": [".zip"],
    },
    multiple: false,
  });

  const handleZipUpload = useCallback(
    (file: File) => {
      imdfToDzg(file).catch((error) => {
        console.error("Failed to import IMDF:", error);
        toast.error("Failed to import IMDF. See console for details.");
      });
    },
    [imdfToDzg]
  );

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      handleZipUpload(acceptedFiles[0]);
    }
  }, [acceptedFiles, handleZipUpload]);

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button size="2">Import IMDF</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Box
            {...getRootProps({})}
            className={clsx(
              styles.dropzone,
              (isFocused || isDragAccept || isDragReject) && styles.focused,
              isDragAccept && styles.accepted,
              isDragReject && styles.rejected
            )}
            py="3"
            px="4"
          >
            <input
              {...getInputProps()}
              // onChange={handleSvgUpload}
            />

            <Flex justify="start" align="center" mb="3" gap="2">
              <Text size="2" color="gray">
                Drag and drop or
              </Text>
              <Button onClick={open} size="1" variant="surface" color="gray">
                Upload file
              </Button>
            </Flex>
          </Box>
          <Dialog.Title>Import IMDF</Dialog.Title>
          <Dialog.Description>
            Upload your IMDF ZIP file to import it into the current session.
          </Dialog.Description>
          <Dialog.Close>
            <Button size="2">Close</Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
}
export default IMDFImport;
