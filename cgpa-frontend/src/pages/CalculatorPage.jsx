import React, { useState, useEffect } from "react";
import {
    Plus,
    Trash2,
    ArrowLeft,
    Info,
    Download,
    RotateCcw,
} from "lucide-react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const CalculatorPage = () => {
    const [semesters, setSemesters] = useState([
        {
            id: Date.now(),
            name: "Year 1 - First Semester",
            courses: [{ courseCode: "", creditUnits: "", score: "" }],
        },
    ]);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [inputMode, setInputMode] = useState("score"); // 'score' or 'gp'

    // Auto-calculate whenever semesters change
    useEffect(() => {
        // Check if we have any valid data to calculate
        const hasData = semesters.some((sem) =>
            sem.courses.some((c) => c.courseCode && c.creditUnits && c.score)
        );

        if (hasData) {
            calculateCGPA();
        } else {
            setResult(null);
        }
    }, [semesters, inputMode]);

    const handleInputChange = (semIndex, courseIndex, field, value) => {
        // Validation for Score/Grade Point
        if (field === "score" && value !== "") {
            const numValue = parseFloat(value);
            if (inputMode === "score") {
                if (numValue < 0 || numValue > 100) {
                    toast.error("Score must be between 0 and 100");
                    return;
                }
            } else {
                if (numValue < 0 || numValue > 5) {
                    toast.error("Grade Point must be between 0 and 5");
                    return;
                }
            }
        }

        const newSemesters = [...semesters];
        newSemesters[semIndex].courses[courseIndex][field] = value;
        setSemesters(newSemesters);
    };

    const handleSemesterNameChange = (semIndex, value) => {
        const newSemesters = [...semesters];
        newSemesters[semIndex].name = value;
        setSemesters(newSemesters);
    };

    const addCourse = (semIndex) => {
        const newSemesters = [...semesters];
        newSemesters[semIndex].courses.push({
            courseCode: "",
            creditUnits: "",
            score: "",
        });
        setSemesters(newSemesters);
    };

    const removeCourse = (semIndex, courseIndex) => {
        const newSemesters = [...semesters];
        if (newSemesters[semIndex].courses.length > 1) {
            newSemesters[semIndex].courses = newSemesters[
                semIndex
            ].courses.filter((_, i) => i !== courseIndex);
            setSemesters(newSemesters);
        } else {
            // If it's the last row, just clear it
            newSemesters[semIndex].courses[0] = {
                courseCode: "",
                creditUnits: "",
                score: "",
            };
            setSemesters(newSemesters);
        }
    };

    const addSemester = () => {
        setSemesters([
            ...semesters,
            {
                id: Date.now(),
                name: `Year ${Math.ceil((semesters.length + 1) / 2)} - ${
                    semesters.length % 2 === 0 ? "First" : "Second"
                } Semester`,
                courses: [{ courseCode: "", creditUnits: "", score: "" }],
            },
        ]);
        toast.success("New semester added");
    };

    const removeSemester = (semIndex) => {
        if (semesters.length > 1) {
            const newSemesters = semesters.filter((_, i) => i !== semIndex);
            setSemesters(newSemesters);
            toast.success("Semester removed");
        } else {
            toast.error("Cannot remove the last semester");
        }
    };

    const calculateCGPA = async () => {
        setLoading(true);
        const payload = {
            fullName: "Student",
            matricNo: "000000",
            semesters: semesters.map((sem) => ({
                name: sem.name,
                courses: sem.courses
                    .filter((c) => c.courseCode && c.creditUnits && c.score)
                    .map((c) => {
                        const courseData = {
                            courseCode: c.courseCode.toUpperCase(),
                            creditUnits: parseInt(c.creditUnits),
                        };
                        if (inputMode === "score") {
                            courseData.score = parseFloat(c.score);
                        } else {
                            courseData.gradePoint = parseInt(c.score);
                            // Do not send score: 0, to avoid overwriting gradePoint in backend
                        }
                        return courseData;
                    }),
            })),
        };

        try {
            const response = await fetch("http://localhost:7000/calculate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to connect to server");
        } finally {
            setLoading(false);
        }
    };

    const getGradeColor = (score) => {
        const s = parseFloat(score);
        if (isNaN(s)) return "bg-gray-100 text-gray-400";

        if (inputMode === "score") {
            if (s >= 70)
                return "bg-emerald-50 text-emerald-700 border-emerald-100";
            if (s >= 60) return "bg-blue-50 text-blue-700 border-blue-100";
            if (s >= 50)
                return "bg-yellow-50 text-yellow-700 border-yellow-100";
            if (s >= 45)
                return "bg-orange-50 text-orange-700 border-orange-100";
            return "bg-red-50 text-red-700 border-red-100";
        } else {
            if (s === 5)
                return "bg-emerald-50 text-emerald-700 border-emerald-100";
            if (s === 4) return "bg-blue-50 text-blue-700 border-blue-100";
            if (s === 3)
                return "bg-yellow-50 text-yellow-700 border-yellow-100";
            if (s === 2)
                return "bg-orange-50 text-orange-700 border-orange-100";
            if (s === 1) return "bg-red-50 text-red-700 border-red-100"; // E is red-ish? Or orange?
            return "bg-red-50 text-red-700 border-red-100";
        }
    };

    const getGradeLabel = (score) => {
        const s = parseFloat(score);
        if (isNaN(s)) return "--";

        if (inputMode === "score") {
            if (s >= 70) return "A (5.0)";
            if (s >= 60) return "B (4.0)";
            if (s >= 50) return "C (3.0)";
            if (s >= 45) return "D (2.0)";
            if (s >= 40) return "E (1.0)";
            return "F (0.0)";
        } else {
            if (s === 5) return "A (5.0)";
            if (s === 4) return "B (4.0)";
            if (s === 3) return "C (3.0)";
            if (s === 2) return "D (2.0)";
            if (s === 1) return "E (1.0)";
            return "F (0.0)";
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
            <Toaster position="top-right" />
            {/* Navbar */}
            <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium text-sm">
                            Back to Home
                        </span>
                    </Link>
                    {/* <div className="flex items-center gap-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Student:
                        </span>
                        <span className="text-sm font-semibold text-slate-800 bg-gray-100 px-3 py-1 rounded-full">
                            Oladosu A.
                        </span>
                    </div> */}
                </div>
            </nav>

            <main className="max-w-7xl mx-auto p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
                {/* Left Side: The Input Stream */}
                <div className="lg:col-span-8 space-y-8">
                    <div className="flex justify-between items-end">
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900">
                                Grade Worksheet
                            </h1>
                            <p className="text-slate-500 text-sm">
                                Add your semesters below. The system auto-saves
                                your progress.
                            </p>
                        </div>

                        {/* Toggle */}
                        <div className="bg-white p-1 rounded-lg border border-gray-200 flex items-center">
                            <button
                                onClick={() => setInputMode("score")}
                                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                                    inputMode === "score"
                                        ? "bg-teal-50 text-teal-700 shadow-sm"
                                        : "text-slate-400 hover:text-slate-600"
                                }`}
                            >
                                Score (0-100)
                            </button>
                            <button
                                onClick={() => setInputMode("gp")}
                                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                                    inputMode === "gp"
                                        ? "bg-teal-50 text-teal-700 shadow-sm"
                                        : "text-slate-400 hover:text-slate-600"
                                }`}
                            >
                                Grade Point (0-5)
                            </button>
                        </div>
                    </div>

                    {/* Semester Cards */}
                    {semesters.map((semester, semIndex) => (
                        <div
                            key={semester.id}
                            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-shadow"
                        >
                            <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 font-bold text-xs">
                                        {semIndex + 1}
                                    </div>
                                    <input
                                        type="text"
                                        value={semester.name}
                                        onChange={(e) =>
                                            handleSemesterNameChange(
                                                semIndex,
                                                e.target.value
                                            )
                                        }
                                        className="bg-transparent font-semibold text-slate-700 focus:outline-none focus:border-b border-teal-500 w-64"
                                    />
                                </div>
                                <button
                                    onClick={() => removeSemester(semIndex)}
                                    className="text-slate-400 hover:text-red-500 transition-colors"
                                    title="Delete Semester"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Table Header */}
                            <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-white text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-gray-50">
                                <div className="col-span-3">Course Code</div>
                                <div className="col-span-2">Units</div>
                                <div className="col-span-3">
                                    {inputMode === "score"
                                        ? "Score (0-100)"
                                        : "Grade Point (0-5)"}
                                </div>
                                <div className="col-span-3">Grade</div>
                                <div className="col-span-1"></div>
                            </div>

                            {/* Rows */}
                            <div className="p-6 space-y-3">
                                {semester.courses.map((course, courseIndex) => (
                                    <div
                                        key={courseIndex}
                                        className="grid grid-cols-12 gap-4 items-center animate-fade-in"
                                    >
                                        <div className="col-span-3">
                                            <input
                                                type="text"
                                                placeholder="CSC 101"
                                                value={course.courseCode}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        semIndex,
                                                        courseIndex,
                                                        "courseCode",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none placeholder-gray-400 transition-all"
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <input
                                                type="number"
                                                placeholder="0"
                                                value={course.creditUnits}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        semIndex,
                                                        courseIndex,
                                                        "creditUnits",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                                            />
                                        </div>
                                        <div className="col-span-3 relative">
                                            <input
                                                type="number"
                                                placeholder={
                                                    inputMode === "score"
                                                        ? "0"
                                                        : "5"
                                                }
                                                value={course.score}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        semIndex,
                                                        courseIndex,
                                                        "score",
                                                        e.target.value
                                                    )
                                                }
                                                className={`w-full bg-white border rounded-lg px-3 py-2 text-sm font-bold text-slate-900 outline-none transition-all ${
                                                    course.score
                                                        ? "border-teal-500 ring-2 ring-teal-50"
                                                        : "border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                                                }`}
                                            />
                                        </div>
                                        <div className="col-span-3 flex items-center gap-2">
                                            <span
                                                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border ${getGradeColor(
                                                    course.score
                                                )}`}
                                            >
                                                {course.score &&
                                                    ((inputMode === "score" &&
                                                        parseFloat(
                                                            course.score
                                                        ) >= 70) ||
                                                        (inputMode === "gp" &&
                                                            parseFloat(
                                                                course.score
                                                            ) === 5)) && (
                                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                    )}
                                                {getGradeLabel(course.score)}
                                            </span>
                                            {/* Show Quality Points if valid */}
                                            {course.creditUnits &&
                                                course.score && (
                                                    <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">
                                                        {inputMode === "score"
                                                            ? (parseFloat(
                                                                  course.score
                                                              ) >= 70
                                                                  ? 5
                                                                  : parseFloat(
                                                                        course.score
                                                                    ) >= 60
                                                                  ? 4
                                                                  : parseFloat(
                                                                        course.score
                                                                    ) >= 50
                                                                  ? 3
                                                                  : parseFloat(
                                                                        course.score
                                                                    ) >= 45
                                                                  ? 2
                                                                  : parseFloat(
                                                                        course.score
                                                                    ) >= 40
                                                                  ? 1
                                                                  : 0) *
                                                              parseInt(
                                                                  course.creditUnits
                                                              )
                                                            : parseInt(
                                                                  course.score
                                                              ) *
                                                              parseInt(
                                                                  course.creditUnits
                                                              )}{" "}
                                                        QP
                                                    </span>
                                                )}
                                        </div>
                                        <div className="col-span-1 text-center">
                                            <button
                                                onClick={() =>
                                                    removeCourse(
                                                        semIndex,
                                                        courseIndex
                                                    )
                                                }
                                                className="text-slate-300 hover:text-slate-500 transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                <button
                                    onClick={() => addCourse(semIndex)}
                                    className="mt-2 flex items-center gap-2 text-xs font-bold text-teal-600 hover:text-teal-700 transition-colors px-2 py-1 rounded hover:bg-teal-50 w-fit"
                                >
                                    <Plus className="w-4 h-4" />
                                    Add Course
                                </button>
                            </div>

                            {/* Semester Footer */}
                            <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex justify-between items-center">
                                <span className="text-xs font-medium text-slate-400 uppercase">
                                    Semester GPA
                                </span>
                                {/* We can calculate local GPA here if we want, or rely on backend result if available per semester */}
                                <span className="text-sm font-bold text-slate-700">
                                    {/* Placeholder or calculated locally */}
                                    --
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* Add Semester Button */}
                    <button
                        onClick={addSemester}
                        className="w-full py-8 border-2 border-dashed border-gray-300 rounded-2xl text-slate-400 font-medium hover:border-teal-500 hover:text-teal-600 hover:bg-white transition-all flex flex-col items-center gap-2"
                    >
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-teal-50 group-hover:text-teal-600">
                            <Plus className="w-6 h-6" />
                        </div>
                        Add Another Semester
                    </button>
                </div>

                {/* Right Side: The Scoreboard (Sticky HUD) */}
                <div className="lg:col-span-4">
                    <div className="sticky top-24 space-y-6">
                        {/* Main Result Card */}
                        <div className="bg-slate-900 rounded-2xl p-6 shadow-xl text-white relative overflow-hidden transition-all duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500 rounded-full filter blur-[60px] opacity-20 -mr-10 -mt-10"></div>

                            <div className="relative z-10 text-center">
                                <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
                                    Cumulative GPA
                                </h3>

                                <div className="flex items-baseline justify-center gap-1 mb-2">
                                    <span className="text-6xl font-bold tracking-tight text-white">
                                        {result?.cgpa
                                            ? result.cgpa.toFixed(2)
                                            : "0.00"}
                                    </span>
                                    <span className="text-lg text-slate-500 font-medium">
                                        / 5.0
                                    </span>
                                </div>

                                <div
                                    className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6 transition-all ${
                                        result?.cgpa
                                            ? "bg-teal-500/20 border border-teal-500/30 text-teal-300 animate-pulse"
                                            : "bg-slate-800 text-slate-500"
                                    }`}
                                >
                                    {result?.classOfDegree || "No Grades Yet"}
                                </div>

                                <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-6">
                                    <div>
                                        <div className="text-2xl font-bold text-white">
                                            {semesters.reduce(
                                                (acc, sem) =>
                                                    acc +
                                                    sem.courses.reduce(
                                                        (semAcc, course) =>
                                                            semAcc +
                                                            (parseInt(
                                                                course.creditUnits
                                                            ) || 0),
                                                        0
                                                    ),
                                                0
                                            )}
                                        </div>
                                        <div className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">
                                            Total Units
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">
                                            {result?.semesters
                                                ?.reduce(
                                                    (acc, sem) =>
                                                        acc +
                                                        (sem.courses?.reduce(
                                                            (semAcc, course) =>
                                                                semAcc +
                                                                course.gradePoint *
                                                                    course.creditUnits,
                                                            0
                                                        ) || 0),
                                                    0
                                                )
                                                ?.toFixed(0) || 0}
                                        </div>
                                        <div className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">
                                            Quality Pts
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Actions Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                            <h4 className="text-sm font-bold text-slate-800 mb-4">
                                Actions
                            </h4>
                            <div className="space-y-3">
                                <button
                                    onClick={() =>
                                        toast(
                                            "This feature will be ready soon!"
                                        )
                                    }
                                    className="w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold rounded-xl shadow-lg shadow-teal-200/50 transition-all flex items-center justify-center gap-2"
                                >
                                    <Download className="w-4 h-4" />
                                    Save & Download PDF
                                </button>
                                <button
                                    onClick={() => {
                                        setSemesters([
                                            {
                                                id: Date.now(),
                                                name: "Year 1 - First Semester",
                                                courses: [
                                                    {
                                                        courseCode: "",
                                                        creditUnits: "",
                                                        score: "",
                                                    },
                                                ],
                                            },
                                        ]);
                                        toast.success("Calculator reset");
                                    }}
                                    className="w-full py-3 px-4 bg-white border border-gray-200 hover:bg-gray-50 text-slate-600 text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                                >
                                    <RotateCcw className="w-4 h-4" />
                                    Reset Calculator
                                </button>
                            </div>
                        </div>

                        {/* Tip Card */}
                        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 flex gap-3 items-start">
                            <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                            <p className="text-xs text-blue-800 leading-relaxed">
                                <strong>Tip:</strong> Scores below 40 are
                                automatically graded as 'F' (0 points). Ensure
                                your units match your course registration form.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CalculatorPage;
