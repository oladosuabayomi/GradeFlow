import React from "react";
import {
    BarChart3,
    Download,
    Lock,
    Smartphone,
    ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Features = () => {
    return (
        <div className="py-24 bg-slate-50 relative" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-green bg-brand-green/10 mb-4">
                        The LASU Advantage
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
                        More Than Just a Calculator. <br />
                        It's Academic Clarity.
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        Academic success starts with clarity. We provide the
                        precise tools you need to track, plan, and achieve your
                        goals with professional accuracy.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <Link
                            to="/calculator"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-brand-green hover:bg-brand-blue transition-colors"
                        >
                            Start Calculating Free
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <a
                            href="#how-it-works"
                            className="text-sm font-semibold text-slate-600 hover:text-brand-blue transition-colors"
                        >
                            See How It Works
                        </a>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Card 1: Precision Scale (Large Vertical) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:row-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between overflow-hidden group hover:shadow-md transition-shadow"
                    >
                        <div>
                            <div className="h-12 w-12 rounded-xl bg-brand-bg flex items-center justify-center text-brand-green mb-6">
                                <BarChart3 className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-blue mb-3">
                                Precision 5.0 Scale
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                Built specifically for the LASU grading system.
                                We use the official university logic to ensure
                                your CGPA is calculated with 100% accuracy.
                            </p>
                        </div>

                        {/* CSS Bar Chart Visualization */}
                        <div className="relative h-48 mt-4 flex items-end justify-between gap-2 px-2">
                            {/* Grid lines */}
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                <div className="border-t border-dashed border-slate-200 w-full h-0"></div>
                                <div className="border-t border-dashed border-slate-200 w-full h-0"></div>
                                <div className="border-t border-dashed border-slate-200 w-full h-0"></div>
                                <div className="border-t border-dashed border-slate-200 w-full h-0"></div>
                            </div>

                            {/* Bars */}
                            <div className="w-1/4 bg-slate-100 rounded-t-lg h-[20%] relative group-hover:bg-slate-200 transition-colors">
                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-400">
                                    A=0.0
                                </span>
                            </div>
                            <div className="w-1/4 bg-brand-green/20 rounded-t-lg h-[40%] relative group-hover:bg-brand-green/30 transition-colors">
                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-400">
                                    B=1.0
                                </span>
                            </div>
                            <div className="w-1/4 bg-brand-green/40 rounded-t-lg h-[60%] relative group-hover:bg-brand-green/50 transition-colors">
                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-400">
                                    C=2.0
                                </span>
                            </div>
                            <div className="w-1/4 bg-brand-green/60 rounded-t-lg h-[80%] relative group-hover:bg-brand-green/70 transition-colors">
                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-400">
                                    B=3.0
                                </span>
                            </div>
                            <div className="w-1/4 bg-brand-green rounded-t-lg h-full relative shadow-lg shadow-brand-green/20">
                                {/* Tooltip */}
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-brand-green text-white text-xs font-bold px-2 py-1 rounded shadow-sm whitespace-nowrap">
                                    A=5.0
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-green rotate-45"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: PDF Export (Wide Horizontal) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-2 bg-brand-blue rounded-3xl p-8 text-white shadow-lg relative overflow-hidden group"
                    >
                        <div className="relative z-10">
                            <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6 backdrop-blur-sm">
                                <Download className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                                Instant PDF Export
                            </h3>
                            <p className="text-slate-300 leading-relaxed max-w-md">
                                Download your full semester results and
                                cumulative transcripts as a clean, professional
                                PDF. Perfect for your personal records or
                                sharing.
                            </p>
                        </div>
                        {/* Decorative Background Circles */}
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-green/20 rounded-full blur-3xl group-hover:bg-brand-green/30 transition-colors"></div>
                        <div className="absolute bottom-0 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
                    </motion.div>

                    {/* Card 3: Privacy (Small) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                    >
                        <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-6">
                            <Lock className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-blue mb-3">
                            Privacy First
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            Your data stays in your browser. We don't store your
                            grades on our servers, ensuring your academic record
                            remains private.
                        </p>
                    </motion.div>

                    {/* Card 4: Mobile Ready (Small) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-brand-green rounded-3xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center text-white mb-6 backdrop-blur-sm">
                            <Smartphone className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Mobile Ready</h3>
                        <p className="text-green-50 leading-relaxed text-sm">
                            Fully optimized for smartphones. Calculate your CGPA
                            on the go, whether you're in class or at home.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Features;
