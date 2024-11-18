// git reset --hard origin/main
//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

// 📌 DESCRIPTION:

// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

// 💡 SOLUTION:

function findAverage(array) {
  
    return array.length>0 ? array.reduce((accum,item) =>accum+item)/array.length: 0
  }
  console.log(findAverage([1,2,3,4]))