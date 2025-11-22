import React from "react";
import { List, SlidersHorizontal, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
    return (
        <section
            className="py-24 bg-slate-50 relative overflow-hidden"
            id="how-it-works"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-brand-green font-bold tracking-wide uppercase text-sm mb-3">
                        The Workflow
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
                        From Grades to CGPA in Seconds
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        We've simplified the process into three intuitive steps.
                        No complex formulas, just straightforward inputs for
                        instant academic clarity.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Connecting Line (Desktop only) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-slate-200 z-0"></div>

                    {/* Step 1 */}
                    <div className="relative bg-white rounded-3xl p-8 pt-16 shadow-sm border border-slate-100 text-center group hover:-translate-y-1 transition-transform duration-300">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-14 w-14 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center z-10 text-brand-green">
                            <List className="h-6 w-6" />
                        </div>
                        <div className="absolute top-8 right-8 text-6xl font-bold text-slate-50 select-none z-0">
                            01
                        </div>
                        <h4 className="text-xl font-bold text-brand-blue mb-3 relative z-10">
                            Input Courses
                        </h4>
                        <p className="text-slate-500 text-sm leading-relaxed relative z-10">
                            Enter your course codes and credit units. Our
                            template makes it easy to organize your semester
                            workload.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative bg-white rounded-3xl p-8 pt-16 shadow-sm border border-slate-100 text-center group hover:-translate-y-1 transition-transform duration-300">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-14 w-14 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center z-10 text-brand-green">
                            <SlidersHorizontal className="h-6 w-6" />
                        </div>
                        <div className="absolute top-8 right-8 text-6xl font-bold text-slate-50 select-none z-0">
                            02
                        </div>
                        <h4 className="text-xl font-bold text-brand-blue mb-3 relative z-10">
                            Select Score
                        </h4>
                        <p className="text-slate-500 text-sm leading-relaxed relative z-10">
                            Type your scores or select your grade points. The
                            system automatically converts them based on the 5.0
                            scale.
                        </p>
                    </div>

                    {/* Step 3 (Highlighted) */}
                    <div className="relative bg-white rounded-3xl p-8 pt-16 shadow-md border border-brand-green/30 text-center group hover:-translate-y-1 transition-transform duration-300 ring-4 ring-brand-green/5">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-14 w-14 bg-white rounded-full shadow-sm border border-brand-green/20 flex items-center justify-center z-10 text-brand-green">
                            <BarChart3 className="h-6 w-6" />
                        </div>
                        <div className="absolute top-8 right-8 text-6xl font-bold text-brand-green/5 select-none z-0">
                            03
                        </div>
                        <h4 className="text-xl font-bold text-brand-blue mb-3 relative z-10">
                            Instant Result
                        </h4>
                        <p className="text-slate-500 text-sm leading-relaxed relative z-10">
                            View your GPA/CGPA immediately and download a
                            professional PDF transcript of your academic record.
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <Link
                        to="/calculator"
                        className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-brand-green hover:bg-brand-blue transition-colors"
                    >
                        Start Calculating Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
