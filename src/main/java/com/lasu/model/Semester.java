package com.lasu.model;

import java.util.ArrayList;
import java.util.List;

public class Semester {
    private String name; // e.g., "Year 1 - Semester 1"
    private List<Course> courses = new ArrayList<>();
    private double gpa;

    public Semester() {}

    public Semester(String name) {
        this.name = name;
    }

    // Add a course and auto-update GPA
    public void addCourse(Course course) {
        this.courses.add(course);
        calculateGPA();
    }

    // The GPA Math: Total Points / Total Units
    public void calculateGPA() {
        double totalPoints = 0;
        int totalUnits = 0;

        for (Course c : courses) {
            totalPoints += c.getQualityPoint();
            totalUnits += c.getCreditUnits();
        }

        if (totalUnits > 0) {
            // Round to 2 decimal places
            this.gpa = Math.round((totalPoints / totalUnits) * 100.0) / 100.0;
        } else {
            this.gpa = 0.0;
        }
    }

    // Getters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public List<Course> getCourses() { return courses; }
    public double getGpa() { return gpa; }

    // Setters
    public void setCourses(List<Course> courses) {
        this.courses = courses;
        calculateGPA();
    }
}