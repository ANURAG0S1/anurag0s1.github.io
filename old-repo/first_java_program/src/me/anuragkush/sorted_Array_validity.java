package me.anuragkush;

public class sorted_Array_validity {
    public static void main(String[] args) {
/*
        int[] arr = {12, 3, 4, 645, 564, 8775, 334, 2};
        int [] arr = { 1,2,3,4,5,6,7,8,9};
*/
        int [] arr = {9,8,7,6,5,4,3,1,1};
        int incOrder = 0;

        int decOrder = 0;
        for (int i = 0; i < arr.length - 1; i++) {
            if (arr[i] >= arr[i + 1])  decOrder++;
            else if (arr[i] <= arr[i +1])  incOrder++;
        }
        if(incOrder == arr.length -1) System.out.println("array is in increasing order");
        else if(decOrder ==arr.length -1) System.out.println("array is in decreasing order");
        else{System.out.println("array is not sorted");
             System.out.println(decOrder );
             System.out.println(incOrder );
        }
    }
}
