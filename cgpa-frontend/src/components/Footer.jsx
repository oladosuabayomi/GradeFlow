import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer
            className="bg-brand-blue text-white py-12 border-t border-white/10"
            id="contact"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="col-span-1 md:col-span-2"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <img
                                src="/gradeflow-logo.png"
                                alt="GradeFlow"
                                className="h-24 w-auto brightness-0 invert"
                            />
                        </div>
                        <p className="text-slate-400 max-w-sm">
                            Empowering students to track their academic journey
                            with precision and ease.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-brand-green transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/calculator"
                                    className="hover:text-brand-green transition-colors"
                                >
                                    Calculator
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#how-it-works"
                                    className="hover:text-brand-green transition-colors"
                                >
                                    How it works?
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-brand-green transition-colors"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-brand-green transition-colors"
                                >
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 pt-8 border-t border-white/10 text-center text-slate-500 text-sm"
                >
                    © {new Date().getFullYear()} GradeFlow. All rights reserved.
                    {/* add developer profile */}
                    <div>
                        {" "}
                        Developed with ❤️ by a fellow student,{" "}
                        <a
                            href="https://www.linkedin.com/in/oladosuabayomi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-green hover:underline ml-1"
                        >
                            Oladosu Abayomi
                        </a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
