import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Box, Link, LinkProps, Text } from "@radix-ui/themes";
import NextLink from "next/link";
function BackButton({
  href = "/",
  children = "Back",
  ...props
}: LinkProps & {}) {
  return (
    <Box my="3">
      <Link asChild {...props} size="2" color="gray">
        <NextLink href={href}>
          <ChevronLeftIcon
            width="0.9rem"
            height="0.9rem"
            style={{ verticalAlign: "-0.17em" }}
          />
          <Text ml="0.11rem">{children}</Text>
        </NextLink>
      </Link>
    </Box>
  );
}
export default BackButton;
