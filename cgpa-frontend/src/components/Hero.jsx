import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center pt-32 pb-12 px-4 md:px-8 relative overflow-hidden bg-pattern">
            {/* Decorative Elements */}
            {/* Top Right Dotted Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1 }}
                className="absolute top-20 right-0 -mr-20 hidden lg:block pointer-events-none"
            >
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
            </motion.div>

            {/* Bottom Left Squiggle */}
            <motion.svg
                initial={{ opacity: 0, rotate: -12 }}
                animate={{ opacity: 0.05, rotate: -12 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 left-0 -ml-20 mb-20 w-64 h-64 text-brand-green -z-10 transform pointer-events-none"
                viewBox="0 0 200 200"
                fill="none"
            >
                <path
                    d="M0 100 Q 25 50 50 100 T 100 100 T 150 100 T 200 100"
                    stroke="currentColor"
                    strokeWidth="10"
                    fill="none"
                />
            </motion.svg>

            {/* Middle Left Dotted Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute top-1/3 left-0 -ml-10 hidden md:block -z-10 pointer-events-none"
            >
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
            </motion.div>

            {/* Extra Snake Rope near Image */}
            <motion.svg
                initial={{ opacity: 0, rotate: 45 }}
                animate={{ opacity: 0.1, rotate: 45 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="absolute top-1/4 right-1/3 w-32 h-6 text-brand-blue -z-10 transform pointer-events-none"
                viewBox="0 0 100 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
            >
                <path d="M0 10 Q 10 0 20 10 T 40 10 T 60 10 T 80 10 T 100 10" />
            </motion.svg>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-5xl md:text-6xl font-bold leading-tight text-brand-blue"
                    >
                        Calculate Your{" "}
                        <span className="text-brand-green">CGPA</span> <br />
                        with Precision
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1,
                            ease: "easeOut",
                        }}
                        className="text-lg text-slate-500 max-w-lg leading-relaxed"
                    >
                        Track your academic progress, plan your semesters, and
                        achieve your goals with our easy-to-use university grade
                        calculator.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <Link
                            to="/calculator"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-brand-green hover:bg-brand-blue transition-colors"
                        >
                            Start Calculating Now
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <a
                            href="#how-it-works"
                            className="inline-flex items-center px-6 py-3 border-2 border-brand-blue/20 text-base font-medium rounded-full text-brand-blue hover:bg-brand-blue/5 transition-colors"
                        >
                            How It Works
                        </a>
                    </motion.div>

                    <motion.svg
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 0.6, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="w-24 h-6 text-brand-green"
                        viewBox="0 0 100 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                    >
                        <path d="M0 10 Q 10 0 20 10 T 40 10 T 60 10 T 80 10 T 100 10" />
                    </motion.svg>
                </div>

                <div className="relative w-full flex justify-center items-center lg:justify-end">
                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                ease: "easeOut",
                            }}
                            className="relative"
                        >
                            {/* Glow Effect */}
                            <div className="absolute -inset-4 bg-brand-green/20 blur-3xl rounded-full"></div>

                            {/* Main Screenshot */}
                            <img
                                src="/hero-image.png"
                                alt="GradeFlow Calculator Interface"
                                className="relative w-full max-w-lg lg:max-w-2xl h-auto rounded-xl shadow-lg border-4 border-white/50 backdrop-blur-sm"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
