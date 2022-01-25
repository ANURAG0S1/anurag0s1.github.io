let arr = [5, 3, 7, 2, 74, 7, 3, 636, 3, 9];

function selcsort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (let j = i+1; j < array.length; j++) {
      if (array[lowest] > array[j]) {
        lowest = j;
      }
    }
    [array[i], array[lowest]] = [array[lowest], array[i]];
  }
  return array;
}

console.log(selcsort(arr))