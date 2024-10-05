//https://www.codewars.com/kata/52a112d9488f506ae7000b95/train/javascript

// 📌 DESCRIPTION:

// Write a function with the signature shown below:

// function isIntArray(arr) {
//   return true
// }
// returns true  / True if every element in an array is an integer or a float with no decimals.
// returns true  / True if array is empty.
// returns false / False for every other input.

// 💡 SOLUTION:


function isIntArray(arr) {
    if (arr === null || arr === undefined || !Array.isArray(arr)) {return false}
    if (arr.length === 0) {return true};
    if (arr.every(item => Number.isInteger(item) )) {return true}
  
    return false;
  }
  console.log(isIntArray([]))
  
  