// // Create a function that takes a sorted array and a target value. Return the index of the target value in the array. If the target value is not in the array, return -1.

// // function binarySearchOnSortedArr(arr, target, start = 0, end = arr.length - 1) {
// //   if (start > end) {
// //     console.log("Not Found");
// //     return -1;
// //   }

// //   const middle = Math.floor((start + end) / 2);

// //   if (arr[middle] === target) {
// //     console.log(`${target} Found at index ${middle}`);
// //     return middle;
// //   }
// //   if (arr[middle] > target) {
// //     return binarySearchOnSortedArr(arr, target, start, middle - 1);
// //   }
// //   if (arr[middle] < target) {
// //     return binarySearchOnSortedArr(arr, target, middle + 1, end);
// //   }
// // }

// // const find = binarySearchOnSortedArr(arr, targetToFind);

// // console.log(find);

// function search(arr, target, start = 0, end = arr.length - 1) {
//   console.log(start, end);

//   if (start > end) {
//     console.log("Not Found");
//     return -1;
//   }

//   const middle = Math.floor((start + end) / 2);
//   console.log("middle", arr[middle]);

//   if (arr[middle] === target) {
//     console.log(`Your ${target}'s position is at ${middle}`);
//     return middle;
//   }

//   if (arr[middle] > target) {
//     return search(arr, target, start, middle - 1);
//   }

//   if (arr[middle] < target) {
//     return search(arr, target, middle + 1, end);
//   }
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(search(arr, 3));

const sortedArrBinarySearch = (arr, target, start = 0, end = arr.length) => {
  console.log(start, end);

  if (start > end) {
    console.log("Not Found");
    return -1;
  }

  const median = Math.floor((start + end) / 2);

  if (arr[median] === target) {
    console.log(`${target} is found at position ${median}`);
    return median;
  }

  if (arr[median] > target) {
    return sortedArrBinarySearch(arr, target, start, median - 1);
  }
  if (arr[median] < target) {
    return sortedArrBinarySearch(arr, target, median + 1, end);
  }
};
const arr = [1, 2, 3, 4, 5, 6];
const arr2 = [1, 2, 3, 4, 5, 6, 8, 11];
const arr3 = [1, 2, 3, 4, 5, 40, 50, 60];

// console.log(sortedArrBinarySearch(arr, 9));
// console.log(sortedArrBinarySearch(arr2, 11));
console.log(sortedArrBinarySearch(arr3, 40));
