import AuthService from "../services/AuthService";

const Profile = () => {
  const logout = async (event) => {
    event.preventDefault();

    await AuthService.logout();
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
