//https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
// 📌 DESCRIPTION:
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: https://leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]
// 💡 SOLUTION:

function twoSum(numbers, target) {
  let arrIndex = [];
numbers.forEach((item,index) => numbers.includes(target-item,index+1) ? arrIndex.push(numbers.indexOf(item),numbers.lastIndexOf(target-item)): -1)
  return arrIndex
}
console.log(twoSum([1234, 5678, 9012], 14690))