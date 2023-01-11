// const printTokens = (strings) => {
//   const specialChar = ["!", ",", "?", ".", "_", "@", "'"];

//   let stringsWithOutChar = "";

//   for (let i = 0; i < strings.length; i++) {
//     const letter = strings[i];
//     if (specialChar.includes(letter)) {
//       stringsWithOutChar += " ";
//     } else {
//       stringsWithOutChar += letter;
//     }
//   }
//   const tokens = stringsWithOutChar.split(" ").filter((token) => token !== "");
//   console.log(tokens.length);
//   tokens.forEach((token) => console.log(token));
//   console.log(tokens);
//   console.log(stringsWithOutChar);
// };

// printTokens("He is a very very good boy, isn't he?");

// 2nd method
// const printTokens = (strings) => {
//   const specialChar = ["!", ",", "?", ".", "_", "@", "'"];

//   let stringsWithOutChar = strings
//     .split("")
//     .map((letter) => {
//       if (specialChar.includes(letter)) {
//         return "";
//       } else {
//         return letter;
//       }
//     })
//     .join("");
//   console.log(stringsWithOutChar,);
// };

// printTokens("He is a very very good boy, isn't he?");

// 3rd Method 
const printTokens = (strings) => {
  const specialChar = new Set(["!", ",", "?", ".", "_", "'", "@"]); // set also returns uniq array

  let stringsWithOutChar = strings
    .split("")
    .map((letter) => {
      if (specialChar.has(letter)) {
        return " ";
      } else {
        return letter;
      }
    })
    .join("");

  const tokens = stringsWithOutChar
    .split(" ")
    .filter((token) => token !== "");

  console.log(tokens.length);
  tokens.forEach((token) => console.log(token));
};

printTokens("He is a very very good boy, isn't he?");
