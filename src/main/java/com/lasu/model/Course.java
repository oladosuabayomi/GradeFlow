package com.lasu.model;

public class Course {
    private String courseCode; // e.g., CSC 303
    private int creditUnits;   // e.g., 3
    private double score;      // e.g., 72.5
    private String grade;      // e.g., "A"
    private int gradePoint;    // e.g., 5

    // Constructor
    public Course() {} // Default constructor for JSON

    public Course(String courseCode, int creditUnits, double score) {
        this.courseCode = courseCode;
        this.creditUnits = creditUnits;
        this.score = score;
        calculateGrade(); // Auto-calculate immediately
    }

    // The LASU 5.0 Grading Logic
    private void calculateGrade() {
        if (score >= 70) {
            this.grade = "A";
            this.gradePoint = 5;
        } else if (score >= 60) {
            this.grade = "B";
            this.gradePoint = 4;
        } else if (score >= 50) {
            this.grade = "C";
            this.gradePoint = 3;
        } else if (score >= 45) {
            this.grade = "D";
            this.gradePoint = 2;
        } else if (score >= 40) {
            this.grade = "E";
            this.gradePoint = 1;
        } else {
            this.grade = "F";
            this.gradePoint = 0;
        }
    }

    // Method to calculate Quality Points for this course
    public double getQualityPoint() {
        return this.gradePoint * this.creditUnits;
    }

    // Getters and Setters (Vital for JSON to work)
    public String getCourseCode() { return courseCode; }
    public void setCourseCode(String courseCode) { this.courseCode = courseCode; }

    public int getCreditUnits() { return creditUnits; }
    public void setCreditUnits(int creditUnits) { this.creditUnits = creditUnits; }

    public double getScore() { return score; }
    public void setScore(double score) { 
        this.score = score; 
        calculateGrade(); // Recalculate if score changes
    }

    public String getGrade() { return grade; }
    public int getGradePoint() { return gradePoint; }
}