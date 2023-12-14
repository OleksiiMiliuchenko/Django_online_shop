import { useState, useEffect, createContext, useContext } from "react";
import { getTokens } from "../utils/manageTokens";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const { access, refresh } = getTokens();

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (access && refresh) {
      setIsAuth(true);
    }
  }, [access, refresh]);

  const authData = {
    isAuth: isAuth,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { useAuthContext, AuthProvider };
