let arr = [1, 1, 4, 6, 9, 2, 45, 12, 14, 1];

function bubblesort(array) {
  for (let index = array.length; index > 0;  index--) {
    for (let i = 0; i < index -1; i++) {
        console.log(array)
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
    console.log("ome pass complete")
  }
  return array;
}

console.log(bubblesort(arr));
