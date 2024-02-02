//https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript
// 📌 DESCRIPTION:
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.
// 💡 SOLUTION:

function smallEnough(a, limit) {
    return Math.max(...a) <= limit;
  }
  console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120));
  