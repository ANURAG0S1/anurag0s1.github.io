let array = [1, 7, 4, 3, 6, 3, 7, 3, 8,5];

function bubblesort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr
}


console.log(bubblesort(array))