package me.anuragkush;

import java.util.Scanner;

public class Km_to_Miles {
    public static void main(String[] args) {
        System.out.println("enter kilometer to be converted into miles : ");
        Scanner scan =  new Scanner(System.in);
        int km = scan.nextInt();
        System.out.println(km +"kms are equal to " + (km * 0.621371));
    }
}
