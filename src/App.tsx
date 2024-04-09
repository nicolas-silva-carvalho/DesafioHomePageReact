import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { login } from "./Services/login";
import { Card } from "./Components/Card";
import { Layout } from "./Components/Layout";

function App() {
  return (
    <ChakraProvider >
      <Layout >
        <Card id={2} paragraph="Teste" details="Teste" />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
