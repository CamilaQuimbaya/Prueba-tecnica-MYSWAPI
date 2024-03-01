import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/auth";


const Navigation: React.FC = () => {

    const isAuth = useAuthStore((state) => state.isAuth);

    return (
        <>
            {isAuth ? (
                <div>
                    <Link to="/home">Home</Link>
                    <Link to="/profile">Profile</Link>
                </div>
            ) : (
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
                
            )}
        </>
    );
}

export default Navigation;