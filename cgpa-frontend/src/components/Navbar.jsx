import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <nav className="bg-white/80 backdrop-blur-md border border-white/40 shadow-lg rounded-full px-8 py-3 flex items-center justify-between w-full max-w-5xl">
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center gap-2">
                        <img
                            src="/gradeflow-logo.png"
                            alt="GradeFlow Logo"
                            className="object-contain w-auto h-10"
                        />
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    <a
                        href="#features"
                        className="hover:text-brand-green transition-colors"
                    >
                        Features 
                    </a>
                    <a
                        href="#how-it-works"
                        className="hover:text-brand-green transition-colors"
                    >
                        How It Works
                    </a>
                    <a
                        href="#faqs"
                        className="hover:text-brand-green transition-colors"
                    >
                        FAQs
                    </a>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        to="/calculator"
                        className="bg-brand-green text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-brand-blue transition-all shadow-lg shadow-brand-green/20 hover:shadow-brand-blue/20 transform hover:-translate-y-0.5"
                    >
                        Launch App
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
