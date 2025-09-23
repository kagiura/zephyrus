import { Flex, FlexProps, Spinner } from "@radix-ui/themes";

function SpinnerCenter(props: FlexProps) {
  return (
    <Flex
      style={{ flex: 1, width: "100%", height: "100%" }}
      justify="center"
      align="center"
      {...props}
    >
      <Spinner />
    </Flex>
  );
}
export default SpinnerCenter;
