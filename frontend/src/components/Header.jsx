import { useState, useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";

const Header = () => {
  const { isAuth } = useAuthContext();

  useEffect(() => {
    console.log(isAuth);
  }, [isAuth]);

  return (
    <header>
      <a href="/">Home</a>
      <div>
        {isAuth ? <a href="/profile">profile</a> : <a href="/login">Login</a>}
      </div>
    </header>
  );
};

export default Header;
