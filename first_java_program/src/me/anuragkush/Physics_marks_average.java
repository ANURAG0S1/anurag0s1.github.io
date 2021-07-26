package me.anuragkush;

public class Physics_marks_average {
    public static void main(String[] args) {
        double [] phyMarks ={60.5,90.5,100,40.0,89.0,89.0};
        Double total_marks = 0.0;

        for (double marks:phyMarks
             ) {
            total_marks = marks+total_marks;
        }
        double avgMarks = total_marks / phyMarks.length;
        System.out.println( "average marks is "+ " "+ avgMarks);
    }
}
