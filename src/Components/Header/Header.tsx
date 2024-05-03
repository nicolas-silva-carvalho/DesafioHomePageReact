import {
  Box,
  Stack,
  Heading,
  Flex,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../../Services/storage";

export const Header = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({login: false})
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Dio Bank
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}></Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      ></Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        {!isLoggedIn && (
          <>
            <Button
              variant="outline"
              _hover={{ bg: "teal.700", borderColor: "teal.700" }}
            >
              Criar Conta
            </Button>
          </>
        )}

        {isLoggedIn && (
          <>
            <Button
              marginLeft={4}
              _hover={{ bg: "teal.700", borderColor: "teal.700" }}
              onClick={() => logout()}
            >
              Sair
            </Button>
          </>
        )}
      </Box>
    </Flex>
  );
};
