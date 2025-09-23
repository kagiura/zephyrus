import { Box, BoxProps, Heading } from "@radix-ui/themes";
import React from "react";

function Title({
  title = "Dazzlegarden",
  description,
  ...props
}: BoxProps & {
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <Box {...props} mt="5" mb="3">
      <Heading as="h1" size="6" weight="medium">
        {title}
      </Heading>
      {description && (
        <Heading as="h2" size="3" weight="medium" mt="1" color="gray">
          {description}
        </Heading>
      )}
      {props.children}
    </Box>
  );
}
export default Title;
