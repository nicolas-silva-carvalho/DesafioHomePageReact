import { Link, Text } from "@chakra-ui/react";

const ContaInfo = () => {
  return (
    <>
      <Text fontSize="3xl" fontWeight="bold">
        Informações da Conta
      </Text>
      <Link href='conta/1'>
        <Text>
            Conta
        </Text>
      </Link>
    </>
  );
};

export default ContaInfo;
