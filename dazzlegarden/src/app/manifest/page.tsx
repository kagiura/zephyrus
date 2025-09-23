"use client";
import { JsonEditor } from "json-edit-react";
import styles from "./page.module.css";
import useDzg from "@/utils/useDzg";
import { ImdfManifest } from "@/types/imdf";
import BackButton from "@/components/BackButton";
function Page() {
  const { dzg, setDzg } = useDzg();
  return (
    <div>
      {/* <SingleAccordion
        title="Manifest"
        icon={<ArchiveIcon width="1rem" height="1rem" />}
        mt="2"
      > */}
      <BackButton />
      <JsonEditor
        className={styles.jsonEditor}
        data={dzg.manifest}
        setData={(newData) => {
          setDzg((prev) => ({
            ...prev,
            manifest: newData as ImdfManifest, // Ensure type safety
          }));
        }}
        rootName="manifest"
        rootFontSize={"var(--font-size-2)"}
        enableClipboard={false}
        restrictAdd
        restrictDelete
        restrictTypeSelection
      />
      {/* </SingleAccordion> */}
    </div>
  );
}
export default Page;
