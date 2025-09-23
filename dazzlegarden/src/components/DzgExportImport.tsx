import useDzg from "@/utils/useDzg";
import { Button, Dialog, TextField } from "@radix-ui/themes";
import { toast } from "react-toastify";

function DzgExportImport() {
  const { setDzg, downloadDzg } = useDzg();

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button size="2">Import DZG</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Import DZG</Dialog.Title>
          <Dialog.Description>
            Paste your DZG JSON here to import it into the current session.
          </Dialog.Description>
          <TextField.Root
            onPaste={(e) => {
              e.preventDefault();
              const text = e.clipboardData.getData("text");
              try {
                const dzg = JSON.parse(text);
                if (dzg && typeof dzg === "object") {
                  // Assuming you have a function to set the DZG state
                  setDzg(dzg);
                  toast.success("DZG imported successfully!");
                } else {
                  console.error("Invalid DZG format");
                  toast.error("Invalid DZG format. Please check your JSON.");
                }
              } catch (error) {
                console.error("Failed to parse DZG JSON", error);
                toast.error(
                  "Failed to parse DZG JSON. Please ensure it is valid.",
                );
              }
            }}
            placeholder="Paste DZG JSON here"
          />
          <Dialog.Close>
            <Button size="2">Close</Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Root>
      <Button onClick={downloadDzg} size="2">
        Export DZG
      </Button>
    </>
  );
}
export default DzgExportImport;
