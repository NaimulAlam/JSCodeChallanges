// const printTokens = (str) => {
//   const specialChar = ["!", ",", "?", ".", "_", "@", "'"];

//   let strWithOutChar = "";

//   for (let i = 0; i < str.length; i++) {
//     const letter = str[i];
//     if (specialChar.includes(letter)) {
//       strWithOutChar += " ";
//     } else {
//       strWithOutChar += letter;
//     }
//   }
//   const tokens = strWithOutChar.split(" ").filter((token) => token !== "");
//   console.log(tokens.length);
//   tokens.forEach((token) => console.log(token));
//   console.log(tokens);
//   console.log(strWithOutChar);
// };

// printTokens("He is a very very good boy, isn't he?");

// 2nd method
// const printTokens = (str) => {
//   const specialChar = ["!", ",", "?", ".", "_", "@", "'"];

//   let strWithOutChar = str
//     .split("")
//     .map((letter) => {
//       if (specialChar.includes(letter)) {
//         return "";
//       } else {
//         return letter;
//       }
//     })
//     .join("");
//   console.log(strWithOutChar,);
// };

// printTokens("He is a very very good boy, isn't he?");

// 3rd Method 
const printTokens = (str) => {
  const specialChar = new Set(["!", ",", "?", ".", "_", "'", "@"]);

  let strWithOutChar = str
    .split("")
    .map((letter) => {
      if (specialChar.has(letter)) {
        return " ";
      } else {
        return letter;
      }
    })
    .join("");

  const tokens = strWithOutChar
    .split(" ")
    .filter((token) => token !== "");

  console.log(tokens.length);
  tokens.forEach((token) => console.log(token));
};

printTokens("He is a very very good boy, isn't he?");
