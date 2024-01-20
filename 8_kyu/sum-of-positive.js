//https://www.codewars.com/kata/sum-of-positive/train/javascript
// 📌 DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.
// 💡 SOLUTION:

function positiveSum(arr) {
    return arr.length === 0 ? 0 : arr.filter(item => item>0).reduce((accum,value) => accum+value,0)
    }
  console.log(positiveSum([1,-4,7,12]))