//https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript

// 📌 DESCRIPTION:

// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

// 💡 SOLUTION:


function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length ===0 ) {
      return -1
    }
    let arr1 = [Math.max(...a1.map(item => item.length)),Math.min(...a1.map(item => item.length))];
    let arr2 = [Math.max(...a2.map(item => item.length)),Math.min(...a2.map(item => item.length))];
    return Math.max(arr1[0]-arr2[1],arr2[0]-arr1[1])
  
  }
  var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
  var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
  console.log(mxdiflg(s1,s2))
  