import { Box, Center, Container, FormControl, FormLabel, Input, Stack, Text } from "@chakra-ui/react";
import { Card } from "../Components/Card";
import { Botao } from "../Components/Botao/Botao";
import { useContext, useState } from "react";
import { login } from "../Services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Components/AppContext";
import { changeLocalStorage } from "../Services/storage";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async () => {
    if (!email || !password) {
      return alert('Por favor, preencha o e-mail e a senha.');
    }

    const loggedIn = await login(email, password);

    if (!loggedIn) {
      return alert('E-mail ou senha inválidos.');
    }

    setIsLoggedIn(true);
    changeLocalStorage({ login: true }); // Assuming changeLocalStorage function exists
    navigate('/conta/1');
  };

  return (
    <Card>
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
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

              <FormLabel htmlFor="passwordInput">Senha</FormLabel>
              <Input
                id="passwordInput"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Container>
            <Center>
              <Botao onClick={validateUser} />
            </Center>
          </Box>
        </Box>
      </FormControl>
    </Card>
  );
};

export default Home;