function bubbleSort(arr) {
  const arrLen = arr.length;

  for (let i = 0; i < arrLen; i++) {
    for (let j = 0; j < arrLen; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}

const arr = [1, 234, 43, 55, 63, 5, 6, 235, 547];

bubbleSort(arr);
