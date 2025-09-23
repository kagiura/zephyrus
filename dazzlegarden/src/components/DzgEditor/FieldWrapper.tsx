import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Box, Code, Flex, FlexProps, Text } from "@radix-ui/themes";

export type FieldProps = {
  name: string;
  valueKey?: string;
  description?: React.ReactNode;
  suffix?: React.ReactNode;
  error?: boolean | string;
};

function FieldWrapper({
  name,
  valueKey,
  description,
  suffix,
  children,
  error,
  ...props
}: FieldProps & FlexProps) {
  return (
    <Flex direction="column" {...props}>
      <Flex align="baseline">
        {error && (
          <Text color="red" size="1" mr="1">
            <ExclamationTriangleIcon
              width="1em"
              height="1em"
              style={{ verticalAlign: "-0.1rem" }}
            />
          </Text>
        )}
        <Text size="2">
          <Text color={error ? "red" : undefined} weight="medium">
            {name}
          </Text>
          {valueKey && (
            <Text size="1" color="gray" as="span">
              {" "}
              <Code>{valueKey}</Code>
            </Text>
          )}
          {suffix}
        </Text>
      </Flex>

      {description && (
        <Text size="1" color="gray">
          {description}
        </Text>
      )}
      {error && (
        <Text size="1" color="red">
          {typeof error === "string" ? error : "This field is required"}
        </Text>
      )}
      <Box mt="1">{children}</Box>
    </Flex>
  );
}
export default FieldWrapper;
