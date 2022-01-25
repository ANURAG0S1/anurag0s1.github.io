package me.anuragkush;

public class reversing_array    {
    public static void main(String[] args) {

        int [] arr = {1,2,3,4,5,6,7,8,9};
        int [] newArr =new int[9];
        for (int i = 0; i < arr.length ; i++) {
            newArr[i] = arr[arr.length -1 - i];
        }
        System.out.print("[");
        for (int i = 0; i < newArr.length; i++) {
            System.out.print(newArr[i]);
            System.out.print(", ");
        }
        System.out.print("]");
    }
}
