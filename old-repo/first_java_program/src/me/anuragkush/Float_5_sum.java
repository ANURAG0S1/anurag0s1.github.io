package me.anuragkush;

public class Float_5_sum {
    public static void main(String[] args) {
        float[] arr = {3.4f, 5.6f, 4.5f, 5.0f, 12.0f};
        float sum = 0;
        for (float elem : arr
        ) {
            sum = sum + elem;
        }
        System.out.println(sum);
    }
}
