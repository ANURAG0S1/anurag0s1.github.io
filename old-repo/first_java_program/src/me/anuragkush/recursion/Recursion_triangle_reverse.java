package me.anuragkush.recursion;

import java.util.Scanner;

public class Recursion_triangle_reverse {
    public static void main(String[] args) {
        System.out.println("enter the height of the triangle : ");
        Scanner scan = new Scanner(System.in);
        int num = scan.nextInt();
        Recurs(num);
    }
    static void Recurs(int n) {
        if (n == 0 || n == 1) {
            System.out.println(" * ");
        } else {
            if (n%2==0){
            StringBuilder star;
            star = new StringBuilder();
            star.append(" * ".repeat(n));
            System.out.println(star);
            Recurs(n - 1);}else{
                StringBuilder star;
                star = new StringBuilder();
                star.append("* ".repeat(n));
                System.out.println(star);
                Recurs(n - 1);
            }
        }
    }
}
