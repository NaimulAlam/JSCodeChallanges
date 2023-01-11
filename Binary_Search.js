// Binary Search

// GIven a sorted Array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 is target element not found

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

const arrA = [-4, 1, 2, 3, 4, 5];
const arrEmpty = [];

console.log(binarySearch(arrEmpty, -4)); // -1
console.log(binarySearch(arrEmpty, 3)); //  -1
console.log(binarySearch(arrA, -4)); //  0
console.log(binarySearch(arrA, 3)); //  3
console.log(binarySearch(arrA, 5)); //  5
console.log(binarySearch(arrA, 20)); // -1

// Time Complexity of abobe binary Big-O = O(logn)

// // Create a function that takes a sorted array and a target value. Return the index of the target value in the array. If the target value is not in the array, return -1.

const recursiveBinarySearch = (
  arr,
  target,
  start = 0,
  end = arr.length - 1
) => {
  // console.log(start, end);

  if (start > end) {
    console.log("Not Found");
    return -1;
  }

  const middleIndex = Math.floor((start + end) / 2);

  if (arr[middleIndex] === target) {
    console.log(`${target} is found at position ${middleIndex}`);
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return recursiveBinarySearch(arr, target, start, middleIndex - 1);
  }
  if (target > arr[middleIndex]) {
    return recursiveBinarySearch(arr, target, middleIndex + 1, end);
  }
};
const arr = [1, 2, 3, 4, 5, 6];
const arr2 = [1, 2, 3, 4, 5, 6, 8, 11];
const arr3 = [1, 2, 3, 4, 5, 40, 50, 60];

console.log(recursiveBinarySearch(arr, 9)); // -1
console.log(recursiveBinarySearch(arr2, 11)); // 7
console.log(recursiveBinarySearch(arr3, 40)); // 5

// Time Complexity of abobe recursive binary Big-O = O(logn)