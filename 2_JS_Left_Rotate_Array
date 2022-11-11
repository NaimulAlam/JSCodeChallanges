function rotLeft(arr, rotations) {
  const rotatedArray = arr.concat();

  for (let i = 0; i < rotations; i++) {
    const frontItem = rotatedArray.shift();
    rotatedArray.push(frontItem);
  }
  return rotatedArray;
}

const numRotations = 3;
const sampleArray = [1, 2, 3, 4, 5];

console.log(rotLeft(sampleArray, numRotations));
