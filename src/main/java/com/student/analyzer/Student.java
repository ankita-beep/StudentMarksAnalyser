package com.student.analyzer;

import java.util.Arrays;

public class Student {
    private String name;
    private int rollNumber;
    private int[] marks;
    private int age;

    public Student(String name, int rollNumber, int[] marks, int age) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getRollNumber() {
        return rollNumber;
    }

    public int[] getMarks() {
        return marks;
    }
    public int getAge() {
        return age;
    }       

    @Override
    public String toString() {
        return "Name: " + name + ", Roll Number: " + rollNumber + ", Marks: " + Arrays.toString(marks) + ", Age: " + age;
    }
}
