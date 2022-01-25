package me.anuragkush;

import java.util.Scanner;

public class Three_sum_num {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("enter the number 1");
        int num1 = scan.nextInt();
        System.out.println("enter the number 2");
        int num2 = scan.nextInt();
        System.out.println("enter the number 3");
        int num3 = scan.nextInt();
        int sum = num1 + num2 + num3;
        System.out.println("the sum of three numbers you have entered is " + " "+ sum);
    }
}
