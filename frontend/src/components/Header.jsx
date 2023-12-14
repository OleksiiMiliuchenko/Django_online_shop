import { useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";

const Header = () => {
  const { isAuth } = useAuthContext();

  useEffect(() => {
    if (isAuth) {
    }
  }, [isAuth]);

  return (
    <header>
      <a href="/">Home</a>
      <div>
        {isAuth ? (
          <a href="/profile">Profile</a>
        ) : (
          <div>
            <a href="/login">Login</a> | <a href="/register">Register</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
