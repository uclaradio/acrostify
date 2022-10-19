import React from "react";
import HomePage from "./HomePage";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate();

    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />

                {/* Example for routing to say, localhost:3000/about */}
                {/* <Route
                    path="/pages"
                    element={<AboutPage navigate={navigate} />}
                /> */}
            </Routes>
        </div>
    );
}

export default App;
