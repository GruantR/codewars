// git reset --hard origin/main
//https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

// 📌 DESCRIPTION:

// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

// 💡 SOLUTION:

function oddOrEven(array) {
    let sum = array.reduce((accum,item) => accum+item,0);
    return sum === 0 || sum % 2 === 0 ? 'even' : 'odd'
  }
  console.log(oddOrEven([0]))