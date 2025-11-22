import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CalculatorPage from "./pages/CalculatorPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/calculator" element={<CalculatorPage />} />
            </Routes>
        </Router>
    );
}

export default App;
