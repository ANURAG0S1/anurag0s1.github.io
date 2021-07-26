package me.anuragkush;

import java.util.Scanner;

public class Array_presence {
    public static void main(String[] args) {
        int[] arr = {3, 5, 4, 5, 12};
        Scanner scan = new Scanner(System.in);
        int inp = scan.nextInt();
        boolean presence = false;
        for (int elem : arr
        ) {
            if (inp == elem) {
                presence = true;
                break;
            }
        }
        if (presence) {
            System.out.println("it is present in the array");
        } else {
            System.out.println("it is not present in the array");
        }
    }
}
