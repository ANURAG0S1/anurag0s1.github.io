package me.anuragkush;

public class max_in_array {
    public static void main(String[] args) {
        int[] arr = {1,2,3,99,5,4,7,89};
        int max = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i]> max){
                max = arr[i];
            }
        }
        System.out.println(max);

    }
}
