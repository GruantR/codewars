//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

// 📌 DESCRIPTION:

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// 💡 SOLUTION:

function solution(str) {
    if (str.length === 0) {
      return [];
    }
    if (str.length % 2 !== 0) {
      str += "_";
    }
    let arrStr = str.split("");
    let arr = [];
    while (arrStr.length > 0) {
      arr.push(arrStr.splice(0, 2).join(""));
    }
  
    return arr;
  }
  console.log(solution("abc"));
  