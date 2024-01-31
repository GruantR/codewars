//https://www.codewars.com/kata/scrolling-text/train/javascript
// 📌 DESCRIPTION:

// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]
// Good luck!

// 💡 SOLUTION:

function scrollingText(text){
    let arr = [];
    arr.push(text.toUpperCase())
    for (let i = 0; i< text.length-1; i++) {
      text = text.slice(1) + text.slice(0,1)
      arr.push(text.toUpperCase())
    }
  return arr
  }
  console.log(scrollingText('abc'));
  