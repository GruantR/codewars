//https://www.codewars.com/kata/52a112d9488f506ae7000b95/train/javascript

// 📌 DESCRIPTION:

// Write a function with the signature shown below:

// function isIntArray(arr) {
//   return true
// }
// returns true  / True if every element in an array is an integer or a float with no decimals.
// returns true  / True if array is empty.
// returns false / False for every other input.

// 💡 SOLUTION:

// snail = function(array) {
//   let newArr = [];

//   for (let i = 0; i<= 4; i++) {

//     if (i === 0) {newArr.push(array[0].splice(0,array.length-1))}
//     if (i === 1 ) {
//       for (let j = 0; j<array.length; j++) {
//         newArr.push(array[j].splice(array[j].length-1,1))
//       }
//     }
//     if (i === 2) {
//       newArr.push()
//     };
//   }
//   return newArr
// }
// console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))


function isIntArray(arr) {
  if (arr === null || arr === undefined || !Array.isArray(arr)) {return false}
  if (arr.length === 0) {return true};
  if (arr.every(item => Number.isInteger(item) )) {return true}

  return false;
}
console.log(isIntArray([]))

