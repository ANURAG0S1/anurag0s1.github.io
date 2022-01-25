package me.anuragkush;

import java.util.Scanner;

public class Star_triangle4 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("enter the height of the triangle");
        int n = scan.nextInt();

        for (int i = 0; i <= n; i++) {
            StringBuilder star;
            star = new StringBuilder();
            star.append("*".repeat(n-i));
            System.out.println(star);
        }
    }
}
