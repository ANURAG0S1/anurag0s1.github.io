package me.anuragkush;

import java.util.Scanner;

public class Gpa {
    public static void main(String[] args) {
        System.out.println("this program calculate gpa out of three subjects");
        Scanner scan = new Scanner(System.in);
        System.out.println("enter your marks of maths");
        int maths = scan.nextInt();
        System.out.println("enter your marks of science");
        int science = scan.nextInt();
        System.out.println("enter your marks of english");
        int english =  scan.nextInt();
        double gpa;
        gpa = ((maths + science + english) / 3)* 0.05d;
        System.out.println("your gpa is" + gpa + "out of 5");
    }
}
