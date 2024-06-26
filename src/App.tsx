import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./Components/Layout";
import { AppContextProvider } from "./Components/AppContext";
import MainRoutes from "./routes";
import { createLocalStorage, getAllLocalStorage } from "./Services/storage";

function App() {
  if (!getAllLocalStorage()) {
    createLocalStorage();
  }

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
