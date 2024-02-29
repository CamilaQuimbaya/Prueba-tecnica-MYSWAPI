import React from "react";
import { Link } from "react-router-dom";


const Navigation: React.FC = () => {
    return (
        <ul>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
        </ul>
    )
}

export default Navigation;