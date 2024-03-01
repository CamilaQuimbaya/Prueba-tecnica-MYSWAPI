import React from "react";
import MainComponent from "./swapi/Main";


const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the Star Wars API</p>
            <MainComponent />

        </div>
    )
}

export default HomePage;