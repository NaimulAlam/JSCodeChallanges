function closedPaths(number) {
  // Write your code here

  let paths = 0;

  const numStr = number.toString();

  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] === "8") {
      paths += 2;
    } else if (
      numStr[i] === "0" ||
      numStr[i] === "4" ||
      numStr[i] === "6" ||
      numStr[i] === "9"
    ) {
      paths += 1;
    } else paths;
  }
  return paths;
}

console.log(closedPaths(608));