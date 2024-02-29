import React from "react";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";


const ProfilePage: React.FC = () => {

    const logOut = useAuthStore(state => state.logOut);
    const profile = useAuthStore(state => state.profile);
    const navigate = useNavigate();

    return (
        <div>
            <h1>Profile Page</h1>
            <p>{profile.name}</p>

            <button onClick={() => {
                logOut();
                navigate('/login');
            }}>
                logout  
            </button>
        </div>
    )
}


export default ProfilePage;