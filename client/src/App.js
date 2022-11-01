import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage.js";

function App() {
    const navigate = useNavigate();

    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/profile"
                    element={<ProfilePage navigate={navigate} />}
                />
            </Routes>
        </div>
    );
}

export default App;
