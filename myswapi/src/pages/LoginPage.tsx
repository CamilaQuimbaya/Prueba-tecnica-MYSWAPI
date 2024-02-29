import React from "react";
import { loginRequest, profileRequest } from "../api/auth";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {

    const setToken = useAuthStore(state => state.setToken);
    const setProfile=  useAuthStore(state => state.setProfile);
    const navigate = useNavigate();


    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

        const resLogin = await loginRequest(email, password);
        setToken(resLogin.token);

        const resProfile = await profileRequest();
        setProfile(resProfile.data.profile);

        navigate("/Profile");
    };



    return (
        <div>
            <form  onSubmit={handleLogin}>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Login</button>
            </form>
        </div>
    )
    }

export default LoginPage;