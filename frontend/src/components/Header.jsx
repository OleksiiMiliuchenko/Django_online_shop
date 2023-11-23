import {useState, useEffect, useContext} from 'react';

const Header = () => {
   const [isAuth, setIsAuth] = useState(false);

   useEffect(() => {
     if (localStorage.getItem('access_token') !== null) {
        setIsAuth(true);
      }
    }, [isAuth]);

     return (
      <div>
        <header>
          <a href="/">JWT Authentification</a>
          <div>
          {isAuth ? <a href="/profile">profile</a> :
                    <a href="/login">Login</a>}
          </div>
        </header>
       </div>
     );
}

export default Header;
