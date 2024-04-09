import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { login } from "../Services/login";
import { Botao } from "./Botao/Botao";

interface ICard {
  id: number;
  paragraph: string;
  details: string;
}

export const Card = ({ id, paragraph, details }: ICard) => {
  return (
    <Container>
      <div>
        <FormControl>
          <Box minHeight="100vh" backgroundColor="#319795" padding="5px">
            <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
              <Center>
                <Stack spacing={3}>
                  <Text fontSize="5xl">Faça login</Text>
                </Stack>
              </Center>
              <Container maxW="550px" color="black" padding="36px">
                <FormLabel htmlFor="emailInput">E-mail</FormLabel>
                <Input
                  placeholder="Digite seu e-mail"
                  id="emailInput"
                  type="email"
                  marginBottom="24px"
                />

                <FormLabel htmlFor="passwordInput">Senha</FormLabel>
                <Input id="passwordInput" type="password" />
              </Container>
              <Center>
                <Botao onClick={login}></Botao>
              </Center>
            </Box>
          </Box>
        </FormControl>
      </div>
    </Container>
  );
};
