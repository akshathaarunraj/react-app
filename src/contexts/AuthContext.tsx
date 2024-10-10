
// createContext
// create a context provider
// useContext

import { createContext, useContext, useState } from "react";

interface IAuthContextProps {
  isAuthenticated: boolean; // needed for ProtectedRoutes
  saveToken: (token: string) => void; // Needed for AuthPage
  logout?: () => void; // Needed for Header
}

// Step 1: create a context
const AuthContext = createContext<IAuthContextProps | undefined>(
  undefined
);

// Step 2: create a new component -- AuthContextProvider -- use it in App.tsx
export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuth, setIsAuth] = useState(() => {
    // check if the token is present in local storage
    const token = localStorage.getItem("authToken");
    console.log("inside ath contrext token ",token);
    if (token) {
      return true;
    } else {
      return false;
    }
  }); 

  const saveMyToken = (token: string) => {
    // save the token in local storage
    localStorage.setItem("authToken", token);
    setIsAuth(true);
  };

  console.log(isAuth);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuth,
        saveToken: saveMyToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// custom hook 
export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext is not defined");
  }
  return authContext;
};
