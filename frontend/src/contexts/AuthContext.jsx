import {createContext, useState, useEffect} from "react";

const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    const [token, setToken] = useState()

    useEffect(() => {

    }, []);

    const authData = {
        token: token,
    };

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    )
};
