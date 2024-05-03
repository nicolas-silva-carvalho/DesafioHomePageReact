import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import CardInfo from "../Components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api";
import { AppContext } from "../Components/AppContext";

interface IUserData {
  id: string;
  email: string;
  password: string;
  name: string;
  balance: number;
}

const Conta = () => {
  const [userData, setUserData] = useState<null | IUserData>();

  const { isLoggedIn } = useContext(AppContext);

  const { id } = useParams();

  const navigate = useNavigate();

  !isLoggedIn && navigate('/')

  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  const actualDate = new Date();

  if (userData && id !== userData.id) {
    navigate("/");
  }

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16} paddingBottom={16}>
        {userData === undefined || userData === null ? (
          <Center>
            <Spinner size="xl" color="white" />
          </Center>
        ) : (
          <>
            <CardInfo
              mainContent={`Bem vindo ${userData?.name}`}
              content={`${actualDate.getDay()} / ${actualDate.getMonth()} / ${actualDate.getFullYear()} ${actualDate.getHours()}:${actualDate.getMinutes()}`}
            ></CardInfo>
            <CardInfo
              mainContent="Saldo"
              content={`R$ ${userData.balance}`}
            ></CardInfo>
          </>
        )}
      </SimpleGrid>
    </Center>
  );
};

export default Conta;
