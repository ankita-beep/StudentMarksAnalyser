public class MarksAnalyzer {

    public int calculateTotal(int[] marks) {
        int total = 0;
        for (int mark : marks) {
            total += mark;
        }
        return total;
    }

    public double calculateAverage(int total, int count) {
        if (count == 0) return 0;
        return (double) total / count;
    }

    public char determineGrade(double average) {
        if (average >= 90) return 'A';
        else if (average >= 80) return 'B';
        else if (average >= 70) return 'C';
        else if (average >= 60) return 'D';
        else return 'F';
    }

    public int findHighest(int[] marks) {
        if (marks == null || marks.length == 0) return 0;
        int max = marks[0];
        for (int mark : marks) {
            if (mark > max) {
                max = mark;
            }
        }
        return max;
    }

    public int findLowest(int[] marks) {
        if (marks == null || marks.length == 0) return 0;
        int min = marks[0];
        for (int mark : marks) {
            if (mark < min) {
                min = mark;
            }
        }
        return min;
    }
}
