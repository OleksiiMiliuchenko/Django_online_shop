import {useState} from 'react';
import AuthService from "../services/AuthService";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async (event) => {
        event.preventDefault();

        const data = {
            username: username,
            password: password,
        };

        const response = await AuthService.login(data);
        const access = response.data.access;
        const refresh = response.data.refresh;

        localStorage.clear()
        localStorage.setItem("access_token", access);
        localStorage.setItem("refresh_token", refresh);
    }

    return (
        <div>
            <br/>
            <form onSubmit={login}>
                <label>Username: </label>
                <input name="username" type="text"
                   onChange={event => setUsername(event.target.value)}/>
                <br/><br/>

                <label>Password: </label>
                <input name="password" type="password"
                    onChange={event => setPassword(event.target.value)}/>
                <br/><br/>

                <input type="submit"/>
            </form>
        </div>
    )
}

export default Login;
