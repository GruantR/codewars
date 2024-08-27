//https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript

// 📌 DESCRIPTION:

// We need a function to collect these numbers, that may receive two integers 
// 𝑎
// a, 
// 𝑏
// b that defines the range 
// [
// 𝑎
// ,
// 𝑏
// ]
// [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range 
// [
// 𝑎
// ,
// 𝑏
// ]
// [a,b] the function should output an empty list.

// 90, 100 --> []

// 💡 SOLUTION:

function sumDigPow(a, b) {
  let arr = [];
  for (let i = a; i<b; i++) {
    if (i === i.toString().split('').reduce((accum,item,index)=> accum + Math.pow(item,index+1),0)) {
      arr.push(i)
    }
  }
  return arr
}

console.log(sumDigPow(1,150))
