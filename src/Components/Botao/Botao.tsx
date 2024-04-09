import { Button } from "@chakra-ui/react";

export const Botao = ({onClick}: any) => {
  return (
    <Button onClick={onClick} colorScheme="teal" size="md" padding="24px">
      Entrar
    </Button>
  );
};
