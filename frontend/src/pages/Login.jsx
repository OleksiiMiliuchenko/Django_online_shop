import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    await AuthService.login(data);

    navigate("/");
  };

  return (
    <div>
      <br />
      <form onSubmit={login}>
        <label>Username: </label>
        <input
          name="username"
          type="text"
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <br />

        <label>Password: </label>
        <input
          name="password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
