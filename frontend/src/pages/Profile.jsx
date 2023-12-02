import AuthService from "../services/AuthService";

const Profile = () => {
  const logout = async (event) => {
    event.preventDefault();

    AuthService.logout(
      { refresh: localStorage.getItem("refresh_token") },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      },
    )
      .then()
      .catch(console.log);
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
