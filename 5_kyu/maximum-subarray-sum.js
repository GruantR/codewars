//https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

// 📌 DESCRIPTION:

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// 💡 SOLUTION:

var maxSequence = function (arr) {
    if (arr.length === 0) {
      return 0;
    }
    if (!arr.find((item) => item > 0)) {
      return 0;
    }
    let sum = 0;
    let answer = arr[0];
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      answer = Math.max(sum, answer);
      sum = +Math.max(sum, 0);
    }
    return answer;
  };
  console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -14]));
  