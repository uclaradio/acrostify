import "./HomePage.css";
import { useEffect } from "react";
import { loginUrl } from "./spotify.js";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Button';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function HomePage() {
    useEffect(() => window.localStorage.removeItem("token"), []);

    return (
        
        
        <div class="main-page container d-flex justify-content-center">
            <div class="row">
                <div class="col-xl-12 col-order-1 col-centered text-center">
                    <h1 class="Nameify text-center">Name-ify</h1>
                    <div className="d-flex justify-content-center">
                        <h3 class="punchLine">You are Who You Listen To</h3>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button className="loginButton">
		                     <a className="login" href={loginUrl}>Login with Spotify</a>
		                </button>
                     </div>
                </div>
            </div>
        </div>

    );
}

export default HomePage;
