import { Route, Routes } from "react-router-dom";
import Conta from "./Pages/Conta";
import ContaInfo from "./Pages/ContaInfo";
import Home from "./Pages/Home";
import { useContext } from "react";
import { AppContext } from "./Components/AppContext";

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conta/:id" element={isLoggedIn ? <Conta /> : <Home />} />
      <Route path="/infoconta" element={<ContaInfo />} />
    </Routes>
  );
};

export default MainRoutes;
