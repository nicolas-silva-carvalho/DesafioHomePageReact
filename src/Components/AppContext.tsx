import { createContext, useEffect, useState } from "react";
import { getAllLocalStorage } from "../Services/storage";

interface IAppContext {
  user: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    const storage = getAllLocalStorage();
    if (storage) {
      const { login, userEmail } = JSON.parse(storage);
      setIsLoggedIn(login);
      setUser(userEmail);
    }
  }, []);

  const login = (email: string, password: string) => {
    setIsLoggedIn(true);
    setUser(email);
    localStorage.setItem('user', JSON.stringify({ userEmail: email, login: true }));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser("");
    localStorage.removeItem('user');
  };

  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};