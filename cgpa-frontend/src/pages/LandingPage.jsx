import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Calculator, BookOpen, ArrowRight } from "lucide-react";

const Navbar = () => (
    <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
                <div className="flex items-center">
                    <GraduationCap className="h-8 w-8 text-indigo-600" />
                    <span className="ml-2 text-xl font-bold text-gray-900">
                        LASU CGPA
                    </span>
                </div>
                <div className="hidden md:flex space-x-8">
                    <Link
                        to="/"
                        className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Home
                    </Link>
                    <Link
                        to="/calculator"
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
                    >
                        Launch Calculator
                    </Link>
                </div>
            </div>
        </div>
    </nav>
);

const Footer = () => (
    <footer className="bg-gray-50 border-t border-gray-100 mt-auto">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <GraduationCap className="h-6 w-6 text-gray-400" />
                    <p className="ml-2 text-gray-500 text-sm">
                        © 2025 LASU CGPA Calculator. All rights reserved.
                    </p>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">GitHub</span>
                        <BookOpen className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <main className="grow">
                {/* Hero Section */}
                <div className="relative overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                                <div className="sm:text-center lg:text-left">
                                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                        <span className="block xl:inline">
                                            Calculate your academic
                                        </span>{" "}
                                        <span className="block text-indigo-600 xl:inline">
                                            success with precision
                                        </span>
                                    </h1>
                                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                        The official LASU CGPA Calculator.
                                        Accurate, fast, and designed for
                                        students. Track your performance across
                                        semesters and plan your path to a First
                                        Class.
                                    </p>
                                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                        <div className="rounded-md shadow">
                                            <Link
                                                to="/calculator"
                                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg"
                                            >
                                                Get Started
                                                <ArrowRight className="ml-2 h-5 w-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50 flex items-center justify-center">
                        <Calculator className="h-64 w-64 text-indigo-100" />
                    </div>
                </div>

                {/* Features Section */}
                <div className="py-12 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:text-center">
                            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                                Features
                            </h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Everything you need
                            </p>
                        </div>

                        <div className="mt-10">
                            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                                {[
                                    {
                                        name: "Accurate 5.0 Scale",
                                        description:
                                            "Built specifically for the LASU grading system (A=5, B=4, etc).",
                                        icon: Calculator,
                                    },
                                    {
                                        name: "Semester Tracking",
                                        description:
                                            "Add multiple courses and semesters to get your cumulative GPA.",
                                        icon: BookOpen,
                                    },
                                    {
                                        name: "Instant Results",
                                        description:
                                            "Get your Class of Degree immediately after entering your scores.",
                                        icon: GraduationCap,
                                    },
                                ].map((feature) => (
                                    <div
                                        key={feature.name}
                                        className="relative"
                                    >
                                        <dt>
                                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <feature.icon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                                                {feature.name}
                                            </p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-500">
                                            {feature.description}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default LandingPage;
