import { Flex, Heading } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="center"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5} bg="teal.500">
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Dio Bank - Nicolas Silva Carvalho ©
        </Heading>
      </Flex>
    </Flex>
  );
};
