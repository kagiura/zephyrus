import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import {
  Flex,
  IconButton,
  ScrollArea,
  Text,
  VisuallyHidden,
} from "@radix-ui/themes";
import dynamic from "next/dynamic";
import { useRef } from "react";
import SpinnerCenter from "./SpinnerCenter";
import styles from "./SVGEditorPanel.module.css";

const SVGEditor = dynamic(() => import("./SVGEditor"), {
  ssr: false,
  loading: () => <SpinnerCenter />,
});

function SVGEditorPanel({ children }: { children?: React.ReactNode }) {
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={divRef}>
      <Dialog.Root modal={false} defaultOpen>
        <Dialog.Trigger asChild>{children}</Dialog.Trigger>
        <Dialog.Portal container={divRef.current}>
          {/* <Dialog.Overlay className={styles.DialogOverlay} /> */}
          <Dialog.Content
            className={styles.DialogContent}
            onPointerDownOutside={(e) => e.preventDefault()}
            onEscapeKeyDown={(e) => e.preventDefault()}
            onInteractOutside={(e) => e.preventDefault()}
          >
            <VisuallyHidden>
              <Dialog.Title>Place SVG</Dialog.Title>
            </VisuallyHidden>
            <ScrollArea className={styles.scrollArea}>
              <SVGEditor active>
                <Flex align="start" justify="between">
                  <Text size="3" weight="medium">
                    Place SVG
                  </Text>

                  <Dialog.Close asChild>
                    <IconButton aria-label="Close" variant="ghost" mt="1">
                      <Cross2Icon width="1.2rem" height="1.2rem" />
                    </IconButton>
                  </Dialog.Close>
                </Flex>
              </SVGEditor>
            </ScrollArea>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
export default SVGEditorPanel;
