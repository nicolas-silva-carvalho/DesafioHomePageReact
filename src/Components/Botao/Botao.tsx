import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface IBotao {
  onClick: MouseEventHandler
}

export const Botao = ({onClick}: IBotao) => {
  return (
    <Button onClick={onClick} colorScheme="teal" size="md" padding="24px">
      Entrar
    </Button>
  );
};
