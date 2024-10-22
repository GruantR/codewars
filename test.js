//https://www.codewars.com/kata/currying-functions-multiply-all-elements-in-an-array/train/javascript

// 📌 DESCRIPTION:
// To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

// Example:

// multiplyAll([1, 2, 3])(2) = [2, 4, 6];
// You must not mutate the original array.

// Here's a nice Youtube video about currying, which might help you if this is new to you.

// 💡 SOLUTION:

function chain(input, fs) {
  function add(num) {
    return num + 1;
  }
  let newNum = fs[0](input); 

  function mult(num) {
    return num * 30;
  }
  return fs[1](newNum)
  }
  console.log(chain(2, [add, mult]))