// git reset --hard origin/main
//https://www.codewars.com/kata/541b5694204d12573700101c/train/javascript

// 📌 DESCRIPTION:

// Create a combinator function named flip that takes a function as an argument and returns that function with it's arguments reversed.

// For example:

// flip(print)(4,5) // returns "5 -> 4"
// function print(a,b) {
//   return a + " -> " + b;
// }
// The idea is to reverse any number of arguments using a higher order function, without any concern for the function being passed into it.

// 💡 SOLUTION:

function print(a,b) {
  return a + " -> " + b;
}

function flip(fn) {
  return function (...arg) {
    return fn(...arg.reverse())
  }

} 


console.log(flip(print)(4,5))