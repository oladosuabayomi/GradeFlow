import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CalculatorPage from "./pages/CalculatorPage";
import ReactGA from "react-ga4";

const PageTracker = () => {
    const location = useLocation();

    useEffect(() => {
        // Send a pageview hit to GA whenever the path changes
        ReactGA.send({
            hitType: "pageview",
            page: location.pathname + location.search,
        });
    }, [location]);

    return null; // This component renders nothing visually
};

function App() {
    return (
        <Router>
            <PageTracker />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/calculator" element={<CalculatorPage />} />
            </Routes>
        </Router>
    );
}

export default App;
