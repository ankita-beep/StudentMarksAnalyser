package com.student.analyzer;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        MarksAnalyzer analyzer = new MarksAnalyzer();

        System.out.println("Welcome to Student Marks Analyzer (Production Grade)!");
        System.out.print("Enter number of students: ");
        int numStudents = scanner.nextInt();
        scanner.nextLine(); // Consume newline

        Student[] students = new Student[numStudents];

        // Input loop
        for (int i = 0; i < numStudents; i++) {
            System.out.println("\nEnter details for Student " + (i + 1) + ":");
            System.out.print("Name: ");
            String name = scanner.nextLine();
            System.out.print("Roll Number: ");
            int roll = scanner.nextInt();

            System.out.print("Enter number of subjects: ");
            int numSubjects = scanner.nextInt();
            int[] marks = new int[numSubjects];

            System.out.println("Enter marks for " + numSubjects + " subjects:");
            for (int j = 0; j < numSubjects; j++) {
                marks[j] = scanner.nextInt();
            }
            scanner.nextLine(); // Consume newline

            students[i] = new Student(name, roll, marks);
        }

        // Analysis loop
        System.out.println("\n--- Student Analysis Report ---");
        for (Student student : students) {
            int[] m = student.getMarks();
            int total = analyzer.calculateTotal(m);
            double avg = analyzer.calculateAverage(total, m.length);
            char grade = analyzer.determineGrade(avg);
            int max = analyzer.findHighest(m);
            int min = analyzer.findLowest(m);

            System.out.println(student);
            System.out.println("Total Marks: " + total);
            System.out.println("Average: " + String.format("%.2f", avg));
            System.out.println("Grade: " + grade);
            System.out.println("Highest Mark: " + max);
            System.out.println("Lowest Mark: " + min);
            System.out.println("-------------------------------");
        }

        scanner.close();
        System.out.println("Analysis Complete.");
    }
}
