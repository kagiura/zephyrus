import { Box } from "@radix-ui/themes";
import {
  createContext,
  Dispatch,
  Fragment,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
} from "react";

// context to provide all child layers with map, layers, and dimensions

export interface Node {
  id: string;
  node: React.ReactNode;
}
interface MapPortalContextProps {
  nodes: Node[];
  setNodes: Dispatch<SetStateAction<Node[]>>;
}

// react context
export const MapPortalContext = createContext<MapPortalContextProps | null>(
  null
);

// export hooks to use the context
export function MapPortal({
  id,
  children,
}: {
  id: string;
  children?: React.ReactNode;
}) {
  const context = useContext(MapPortalContext);

  useEffect(() => {
    if (!context?.setNodes) {
      throw new Error("MapPortal must be used within a MapPortalProvider");
    }
    const setNodes = context.setNodes;
    // Add the node to the context when this component mounts
    setNodes((prev) => [...prev, { id, node: children }]);

    // Cleanup function to remove the node when this component unmounts
    return () => {
      setNodes((prev) => prev.filter((n) => n.id !== id));
    };
  }, [id, children, context?.setNodes]);

  if (!context) {
    // throw new Error("MapPortal must be used within a MapPortalProvider");
    return <Box>MapPortal must be used within a MapPortalProvider</Box>;
  }
  return null;
}

export default function MapPortalInsert() {
  const context = useContext(MapPortalContext);

  if (!context) {
    throw new Error("MapPortalInsert must be used within a MapPortalProvider");
  }

  const { nodes } = context;

  // return nodes.map((node) => <Fragment key={node.id}>{node.node}</Fragment>);
  const renderedNodes = useMemo(
    () => nodes.map((node) => <Fragment key={node.id}>{node.node}</Fragment>),
    [nodes]
  );
  return renderedNodes;
}
