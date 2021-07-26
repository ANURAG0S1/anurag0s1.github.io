package me.anuragkush;

import java.util.Scanner;

public class Int_check {
    public static void main(String[] args) {

        System.out.println("enter the input tp check type whether it is integer or not");
        Scanner scan = new Scanner(System.in);
        boolean inp =  scan.hasNextInt();
        if (inp){
            System.out.println(" you have entered an integer");
        }else
            System.out.println("the input you have entered is not an integer");
    }

}
