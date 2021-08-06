package me.anuragkush.hackerrrank;




public class find_missing {
    static int[] arr = new int[]{0, -10, 1, 2, 4, 3, -20};

    public find_missing() {
    }

    static int min() {
        int min = 1;

        for (int i = 0; i < arr.length; ++i) {
            if (arr[i] > 0 && arr[i] <= min) {
                min = arr[i];
            }
        }

        System.out.println(min);
        return min;
    }

    public static void main(String[] args) {
        int numf = min();
        recrse(numf);
    }

    public static void recrse(int a) {
        for (int i = 0; i < arr.length; ++i) {
            if (arr[i] > a) {
                System.out.println("the minimum positive number is " + a);
                ++a;
            }
        }
    }
}