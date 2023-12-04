import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const logout = async (event) => {
    event.preventDefault();

    await AuthService.logout();

    navigate("/");
  };

  return (
    <div>
      <h1>Welcome!</h1>

      <form onSubmit={logout}>
        <br />
        <input type="submit" value="Logout" name="refresh" />
      </form>
    </div>
  );
};

export default Profile;
