"use client";
import { Flex, Text } from "@radix-ui/themes";

import { IconArchive, IconProps } from "@tabler/icons-react";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import NextLink from "next/link";
import React from "react";
import { Colors } from "@/types/dzg";
import styles from "./PageLink.module.css";

function PageLink({
  href = "/manifest",
  children = "Manifest",
  color = "accent",
  icon: Icon = IconArchive,
}: {
  href?: string;
  children?: React.ReactNode;
  color?: Colors | "accent";
  icon?: React.ComponentType<IconProps>;
}) {
  return (
    <NextLink href={href}>
      <Flex
        gap="3"
        align="center"
        className={styles.hover}
        style={{
          // @ts-ignore
          ["--normal"]: `var(--${color}-a3)`,
          // @ts-ignore
          ["--hover"]: `var(--${color}-a4)`,
        }}
      >
        <Flex
          style={{
            borderRadius: "var(--radius-2)",
            color: `var(--${color}-9)`,
          }}
          p="2"
          className={styles.icon}
        >
          <Icon width="1em" height="1em" />
        </Flex>

        <Text size="2" style={{ flex: 1 }}>
          {children}
        </Text>
        <ChevronRightIcon width="1rem" height="1rem" />
      </Flex>
    </NextLink>
  );
}
export default PageLink;
