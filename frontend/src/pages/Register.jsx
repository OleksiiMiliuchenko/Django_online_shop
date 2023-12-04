import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

const Register = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const register = async (event) => {
    event.preventDefault();

    await AuthService.register(formData);

    navigate("/");
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData((values) => ({ ...values, [name]: value }));
  };

  return (
    <div>
      <br />
      <form onSubmit={register}>
        <label>Username: </label>
        <input
          name="username"
          type="text"
          onChange={handleChange}
          value={formData.username || ""}
        />
        <br />
        <br />

        <label>Password: </label>
        <input
          name="password"
          type="password"
          onChange={handleChange}
          value={formData.password || ""}
        />
        <br />
        <br />

        <label>Repeat password: </label>
        <input
          name="password2"
          type="password"
          onChange={handleChange}
          value={formData.password2 || ""}
        />
        <br />
        <br />

        <label>Email: </label>
        <input
          name="email"
          type="text"
          onChange={handleChange}
          value={formData.email || ""}
        />
        <br />
        <br />

        <label>first_name: </label>
        <input
          name="first_name"
          type="text"
          onChange={handleChange}
          value={formData.first_name || ""}
        />
        <br />
        <br />

        <label>last_name: </label>
        <input
          name="last_name"
          type="text"
          onChange={handleChange}
          value={formData.last_name || ""}
        />
        <br />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
