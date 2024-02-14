//https://www.codewars.com/kata/5894318275f2c75695000146/train/javascript

// 📌 DESCRIPTION:

// Task
// Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

// Example
// For n = 152, the output should be 52;

// For n = 1001, the output should be 101.

// Input/Output
// [input] integer n

// Constraints: 10 ≤ n ≤ 1000000.

// [output] an integer


// 💡 SOLUTION:

function deleteDigit(n) {
    let arr = n.toString().split('');
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr.filter((item,index) => i !== index).join(''))
    }
    return Math.max(...newArr)
    
  }
  console.log(deleteDigit(1001))