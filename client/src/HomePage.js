import "./HomePage.css";
import { useEffect } from "react";
import { loginUrl } from "./spotify.js";

function HomePage() {
    useEffect(() => window.localStorage.removeItem("token"), []);

    return (
        <div>
            <a href={loginUrl}>Login with Spotify</a>
        </div>
    );
}

export default HomePage;
