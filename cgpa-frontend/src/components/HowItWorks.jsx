import React from "react";

const HowItWorks = () => {
    return (
        <section
            className="py-24 bg-brand-bg relative overflow-hidden"
            id="how-it-works"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-brand-blue mb-4">
                        How GradeFlow Works
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Calculate your CGPA in three simple steps.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        {
                            step: "01",
                            title: "Enter Courses",
                            desc: "Input your course codes and credit units for the semester.",
                        },
                        {
                            step: "02",
                            title: "Add Grades",
                            desc: "Input your scores or grade points for each course.",
                        },
                        {
                            step: "03",
                            title: "View Results",
                            desc: "Instantly see your GPA, CGPA, and academic standing.",
                        },
                    ].map((item) => (
                        <div key={item.step} className="relative">
                            <div className="text-6xl font-bold text-slate-200 mb-4">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-bold text-brand-blue mb-2">
                                {item.title}
                            </h3>
                            <p className="text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
