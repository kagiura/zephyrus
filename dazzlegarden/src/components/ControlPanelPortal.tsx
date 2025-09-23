import { Box, Portal } from "@radix-ui/themes";
import { createContext, useContext, useEffect } from "react";
import styles from "./ControlPanelPortal.module.css";

// context to provide all child layers with map, layers, and dimensions
interface PortalContextProps {
  portalRef: HTMLElement | null;
  setActive: (active: boolean) => void;
}

// react context
export const PortalContext = createContext<PortalContextProps | null>(null);

// export hooks to use the context
export function usePortal() {
  const context = useContext(PortalContext);
  if (!context) {
    throw new Error("usePortal must be used within a PortalProvider");
  }
  return context;
}

export default function ControlPanelPortal({
  active,
  children,
}: {
  active: boolean;
  children?: React.ReactNode;
}) {
  const { portalRef, setActive } = usePortal();
  useEffect(() => {
    setActive(active);
    // Cleanup function to reset active state when component unmounts
    return () => {
      setActive(false);
    };
  }, [active]);
  if (!active || !portalRef) return null;
  return (
    <Portal container={portalRef}>
      <Box className={styles.portalContainer}>{children}</Box>
    </Portal>
  );
}
