import { useState, useEffect, createContext, useContext } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const access = localStorage.getItem("access");
  const refresh = localStorage.getItem("refresh");
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (access) {
      setIsAuth(true);
    }
  }, [access]);

  const authData = {
    access: access,
    refresh: refresh,
    isAuth: isAuth,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { useAuthContext, AuthProvider };
