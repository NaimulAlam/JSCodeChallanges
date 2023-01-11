// Find a target element 't's index from an given array

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

//Big-O = O(n)

const array = [-5, 1, 20, 3, 4, 5, 6];
const target1 = -5; // 0
const target2 = 20; // 2
const target3 = 25; // -1
// console.log(linearSearch(array, target1));
// console.log(linearSearch(array, target2));
// console.log(linearSearch(array, target3));


