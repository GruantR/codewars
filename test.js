//https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

// 📌 DESCRIPTION:
// Given an array of integers, return a new array with each value doubled.
// For example:

// [1, 2, 3] --> [2, 4, 6]


function maps(x){
 
return x.map(item => item*2)
}
console.log(maps([1, 2, 3]))