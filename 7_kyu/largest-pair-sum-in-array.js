// git reset --hard origin/main
//https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

// 📌 DESCRIPTION:

// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

// 💡 SOLUTION :



function largestPairSum (numbers) {
    return numbers.sort((a,b)=> a-b).slice(-2).reduce((accum,item)=>accum+item,0)
  }

  console.log(largestPairSum([10,14,2,23,19]));
  










