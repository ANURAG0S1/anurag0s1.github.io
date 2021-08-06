package me.anuragkush;

public class Add_two_matrices {
    public static void main(String[] args) {
        int[][] arr1 = {{1, 2, 3}, {1, 9, 3}};
        int[][] arr2 = {{3, 4, 5}, {3, 0, 5}};
        int[][] arr3 = {{0, 0, 0}, {0, 0, 0}};
        for (int i = 0; i < arr1.length; i++) {
            for (int j = 0; j < arr1[i].length; j++) {
                arr3[i][j] = arr2[i][j] + arr1[i][j];
            }
        }
        for (int i = 0; i < arr3.length; i++) {
            for (int j = 0; j < arr3[i].length; j++) {
                System.out.print(arr3[i][j]);
                System.out.print("  ");
            }
            System.out.println();
        }
    }
}
