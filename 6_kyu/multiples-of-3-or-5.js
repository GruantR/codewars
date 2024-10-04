//https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

// 📌 DESCRIPTION:

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.
// 💡 SOLUTION:

function solution(number) {
    if (number < 1) {
      return 0;
    }
    let arr = [];
    for (let i = number - 1; i > 0; i--) {
      i % 3 === 0 ? arr.push(i) : i % 5 === 0 ? arr.push(i) : 1;
    }
    return arr.reduce((accum, item) => accum + item, 0);
  }
  console.log(solution(20));
  