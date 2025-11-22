import { useState } from "react";

function App() {
    // State for form inputs
    const [courseCode, setCourseCode] = useState("");
    const [units, setUnits] = useState("");
    const [score, setScore] = useState("");

    // State for the list of courses added so far
    const [courses, setCourses] = useState([]);

    // State for the result coming back from Java
    const [result, setResult] = useState(null);

    const addCourse = () => {
        const newCourse = {
            courseCode: courseCode,
            creditUnits: parseInt(units), // Java expects int
            score: parseFloat(score), // Java expects double
        };
        setCourses([...courses, newCourse]);
        setCourseCode("");
        setUnits("");
        setScore("");
    };

    const calculateCGPA = async () => {
        // 1. Construct the Payload to match Student.java structure exactly
        const payload = {
            fullName: "Frontend User",
            matricNo: "000000",
            semesters: [
                {
                    name: "Current Semester",
                    courses: courses, // The list of courses we built
                },
            ],
        };

        try {
            // 2. Send to your Java Backend
            const response = await fetch("http://localhost:7000/calculate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            // 3. Get the calculated result
            const data = await response.json();
            setResult(data);
            console.log("Java Response:", data);
        } catch (error) {
            console.error("Error connecting to backend:", error);
            alert("Is the Java server running on port 7000?");
        }
    };

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h1>LASU CGPA Calculator</h1>

            {/* Input Section */}
            <div
                style={{
                    marginBottom: "20px",
                    border: "1px solid #000",
                    padding: "10px",
                }}
            >
                <h3>Add Course</h3>
                <input
                    placeholder="Course Code (e.g. CSC303)"
                    value={courseCode}
                    onChange={(e) => setCourseCode(e.target.value)}
                />
                <input
                    placeholder="Units (e.g. 3)"
                    type="number"
                    value={units}
                    onChange={(e) => setUnits(e.target.value)}
                />
                <input
                    placeholder="Score (e.g. 72)"
                    type="number"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                />
                <button onClick={addCourse}>Add</button>
            </div>

            {/* List of Added Courses */}
            <ul>
                {courses.map((c, index) => (
                    <li key={index}>
                        {c.courseCode} - {c.creditUnits} units - Score:{" "}
                        {c.score}
                    </li>
                ))}
            </ul>

            <button
                onClick={calculateCGPA}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "green",
                    color: "white",
                }}
            >
                CALCULATE CGPA
            </button>

            {/* Results Section */}
            {result && (
                <div
                    style={{
                        marginTop: "20px",
                        padding: "20px",
                        backgroundColor: "#000000",
                    }}
                >
                    <h2>CGPA: {result.cgpa}</h2>
                    <h3>Class: {result.classOfDegree}</h3>
                </div>
            )}
        </div>
    );
}

export default App;
