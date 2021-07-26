package me.anuragkush;

public class min_in_array {
    public static void main(String[] args) {
        int[] arr = {9,2,3,99,5,4,7,89};
        int min = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if (arr[i]< min){
                min = arr[i];
            }
        }
        System.out.println(min);

    }
}
