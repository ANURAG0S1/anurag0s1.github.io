package me.anuragkush;

import java.util.Scanner;

public class Username {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        System.out.println("enter your name for a good message");
        String name = scan.nextLine();
        System.out.println("Hello " + name + ", have a good day going ahead.");
    }
}
