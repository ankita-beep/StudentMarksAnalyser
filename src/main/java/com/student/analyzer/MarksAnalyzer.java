package com.student.analyzer;

public class MarksAnalyzer {

    private final int gradeA;
    private final int gradeB;
    private final int gradeC;
    private final int gradeD;

    public MarksAnalyzer() {
        ConfigLoader config = ConfigLoader.getInstance();
        this.gradeA = config.getIntProperty("grade.threshold.a", 90);
        this.gradeB = config.getIntProperty("grade.threshold.b", 80);
        this.gradeC = config.getIntProperty("grade.threshold.c", 70);
        this.gradeD = config.getIntProperty("grade.threshold.d", 60);
    }

    public int calculateTotal(int[] marks) {
        int total = 0;
        for (int mark : marks) {
            total += mark;
        }
        return total;
    }

    public double calculateAverage(int total, int count) {
        if (count == 0)
            return 0;
        return (double) total / count;
    }

    public char determineGrade(double average) {
        if (average >= gradeA)
            return 'A';
        else if (average >= gradeB)
            return 'B';
        else if (average >= gradeC)
            return 'C';
        else if (average >= gradeD)
            return 'D';
        else
            return 'F';
    }

    public int findHighest(int[] marks) {
        if (marks == null || marks.length == 0)
            return 0;
        int max = marks[0];
        for (int mark : marks) {
            if (mark > max) {
                max = mark;
            }
        }
        return max;
    }

    public int findLowest(int[] marks) {
        if (marks == null || marks.length == 0)
            return 0;
        int min = marks[0];
        for (int mark : marks) {
            if (mark < min) {
                min = mark;
            }
        }
        return min;
    }
}
