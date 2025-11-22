import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center pt-32 pb-12 px-4 md:px-8 relative overflow-hidden bg-pattern">
            {/* Decorative Elements */}
            {/* Top Right Dotted Grid */}
            <div className="absolute top-20 right-0 -mr-20 opacity-10 hidden lg:block pointer-events-none">
                <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
                    <defs>
                        <pattern
                            id="85737c0e-0916-41d7-917f-596dc7edfa27"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                        >
                            <rect
                                x="0"
                                y="0"
                                width="4"
                                height="4"
                                className="text-brand-blue"
                                fill="currentColor"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width="404"
                        height="404"
                        fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
                    />
                </svg>
            </div>

            {/* Bottom Left Squiggle */}
            <svg
                className="absolute bottom-0 left-0 -ml-20 mb-20 w-64 h-64 text-brand-green opacity-5 -z-10 transform -rotate-12 pointer-events-none"
                viewBox="0 0 200 200"
                fill="none"
            >
                <path
                    d="M0 100 Q 25 50 50 100 T 100 100 T 150 100 T 200 100"
                    stroke="currentColor"
                    strokeWidth="10"
                    fill="none"
                />
            </svg>

            {/* Middle Left Dotted Grid */}
            <div className="absolute top-1/3 left-0 -ml-10 opacity-10 hidden md:block -z-10 pointer-events-none">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <defs>
                        <pattern
                            id="dots-sm"
                            x="0"
                            y="0"
                            width="15"
                            height="15"
                            patternUnits="userSpaceOnUse"
                        >
                            <circle
                                cx="2"
                                cy="2"
                                r="2"
                                className="text-brand-green"
                                fill="currentColor"
                            />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#dots-sm)" />
                </svg>
            </div>

            {/* Extra Snake Rope near Image */}
            <svg
                className="absolute top-1/4 right-1/3 w-32 h-6 text-brand-blue opacity-10 -z-10 transform rotate-45 pointer-events-none"
                viewBox="0 0 100 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
            >
                <path d="M0 10 Q 10 0 20 10 T 40 10 T 60 10 T 80 10 T 100 10" />
            </svg>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 z-10">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight text-brand-blue">
                        Calculate Your{" "}
                        <span className="text-brand-green">CGPA</span> <br />
                        with Precision
                    </h1>
                    <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
                        Track your academic progress, plan your semesters, and
                        achieve your goals with our easy-to-use university grade
                        calculator.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                            to="/calculator"
                            className="px-8 py-4 bg-brand-green hover:bg-brand-blue text-white font-semibold rounded-full shadow-lg shadow-brand-green/30 transition-transform transform hover:-translate-y-1"
                        >
                            Start Calculating Now
                        </Link>
                        <a
                            href="#how-it-works"
                            className="px-8 py-4 bg-transparent border-2 border-brand-blue/20 text-brand-blue font-semibold rounded-full hover:bg-brand-bg transition-colors"
                        >
                            How It Works
                        </a>
                    </div>

                    <svg
                        className="w-24 h-6 text-brand-green opacity-60"
                        viewBox="0 0 100 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                    >
                        <path d="M0 10 Q 10 0 20 10 T 40 10 T 60 10 T 80 10 T 100 10" />
                    </svg>
                </div>

                <div className="relative w-full flex justify-center items-center lg:justify-end">
                    <div className="relative z-10">
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute -inset-4 bg-brand-green/20 blur-3xl rounded-full"></div>

                            {/* Main Screenshot */}
                            <img
                                src="/hero-image.png"
                                alt="GradeFlow Calculator Interface"
                                className="relative w-full max-w-lg lg:max-w-2xl h-auto rounded-xl shadow-lg border-4 border-white/50 backdrop-blur-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
