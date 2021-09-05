let arr = [3, 100, 4, 6, 9, 2, 45, 12, 14, 1];

function bubblesort(array) {
  for (var index = 0; index < array.length; index++) {
    let min = index;
    for (var i = index + 1; i < array.length; i++) {
      if (array[i]<array[min] ) {
        min = i;
      }
    }
    [array[min], array[index]] = [array[index], array[min]];
  }
  return array;
}

console.log(bubblesort(arr));
