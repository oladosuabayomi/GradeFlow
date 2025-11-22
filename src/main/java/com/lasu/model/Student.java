package com.lasu.model;

import java.util.ArrayList;
import java.util.List;

public class Student {
    private String fullName;
    private String matricNo;
    private List<Semester> semesters = new ArrayList<>();
    private double cgpa;
    private String classOfDegree;

    public Student() {}

    public Student(String fullName, String matricNo) {
        this.fullName = fullName;
        this.matricNo = matricNo;
    }

    public void addSemester(Semester semester) {
        this.semesters.add(semester);
        calculateCGPA();
    }

    // The CGPA Math: Cumulative Points / Cumulative Units
    public void calculateCGPA() {
        double totalCumulativePoints = 0;
        int totalCumulativeUnits = 0;

        for (Semester sem : semesters) {
            for (Course c : sem.getCourses()) {
                totalCumulativePoints += c.getQualityPoint();
                totalCumulativeUnits += c.getCreditUnits();
            }
        }

        if (totalCumulativeUnits > 0) {
            this.cgpa = Math.round((totalCumulativePoints / totalCumulativeUnits) * 100.0) / 100.0;
        } else {
            this.cgpa = 0.0;
        }
        
        determineClassOfDegree();
    }

    private void determineClassOfDegree() {
        if (cgpa >= 4.50) this.classOfDegree = "First Class Honors";
        else if (cgpa >= 3.50) this.classOfDegree = "Second Class Upper";
        else if (cgpa >= 2.40) this.classOfDegree = "Second Class Lower";
        else if (cgpa >= 1.50) this.classOfDegree = "Third Class";
        else this.classOfDegree = "Pass / Fail";
    }

    // Getters
    public String getFullName() { return fullName; }
    public String getMatricNo() { return matricNo; }
    public List<Semester> getSemesters() { return semesters; }
    public double getCgpa() { return cgpa; }
    public String getClassOfDegree() { return classOfDegree; }

    // Setters
    public void setFullName(String fullName) { this.fullName = fullName; }
    public void setMatricNo(String matricNo) { this.matricNo = matricNo; }
    public void setSemesters(List<Semester> semesters) {
        this.semesters = semesters;
        calculateCGPA();
    }
}