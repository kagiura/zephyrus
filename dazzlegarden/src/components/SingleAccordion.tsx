import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import {
  Box,
  Card,
  CardProps,
  Flex,
  IconButton,
  Separator,
  Text,
} from "@radix-ui/themes";
import * as Accordion from "@radix-ui/react-accordion";
import React, { useState } from "react";

function SingleAccordion({
  title,
  icon,
  children,
  defaultOpen = false,
  ...props
}: Omit<CardProps, "title"> & {
  title: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen ? "default" : undefined);

  return (
    <Box asChild p="0">
      <Card {...props}>
        <Accordion.Root
          type="single"
          collapsible
          value={open}
          onValueChange={(value) => {
            setOpen(value);
          }}
        >
          <Accordion.Item value="default">
            <Accordion.Trigger asChild>
              <Flex align="center" my="2" mx="3">
                <IconButton variant="ghost" size="2" aria-label="Open" mr="1">
                  {open === "default" ? (
                    <ChevronDownIcon width="1rem" height="1rem" />
                  ) : (
                    <ChevronRightIcon width="1rem" height="1rem" />
                  )}
                </IconButton>
                {icon ? (
                  <Box
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    mr="1"
                  >
                    {icon}
                  </Box>
                ) : null}
                <Text
                  style={{ flex: 1, userSelect: "none" }}
                  size="2"
                  weight="medium"
                >
                  {title}
                </Text>
              </Flex>
            </Accordion.Trigger>
            <Accordion.Content>
              <Separator size="4" mb="3" />
              <Box mx="3" mb="3">
                {children}
              </Box>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </Card>
    </Box>
  );
}

export default SingleAccordion;
