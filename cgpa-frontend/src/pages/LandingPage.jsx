import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="grow">
                <Hero />
                <Features />
                <HowItWorks />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
