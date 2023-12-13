// https://www.codewars.com/kata/reversed-strings/train/javascript
// 📌 DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// 💡 SOLUTION:

function solution(str) {
  return str.split("").reverse().join("");
}
console.log(solution("world"));
