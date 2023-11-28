import {useState, useEffect, useContext} from 'react';
import {AuthContext} from "../contexts/AuthContext";

const Header = () => {
    const [isAuth, setIsAuth] = useState(false);
    const authData = useContext(AuthContext)

    useEffect(() => {
     if (localStorage.getItem('access_token') !== null) {
        setIsAuth(true);
      }
    }, [isAuth]);

    console.log(authData)

    return (
        <header>
        <a href="/">Home</a>
        <div>
            {isAuth ?
                <a href="/profile">profile</a> :
                <a href="/login">Login</a>
            }
        </div>
        </header>
    );
}

export default Header;
