package me.anuragkush;

import java.util.Scanner;

public class FirstNsum {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int sum = 0;
        int j = 0;
        while (j < n) {
            if (j % 2 == 0) {
                sum = sum + j;
            }
            j++;
        }
        System.out.println(sum);
    }
}
