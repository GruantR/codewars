//https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript

// 📌 DESCRIPTION:

// In other words, try every combination of a, b, and c with the operators, without reordering the operands, and return the maximum value.

// Example
// With the numbers 1, 2, and 3, here are some possible expressions:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// The maximum value that can be obtained is 9.

// 💡 SOLUTION:

function expressionMatter(a, b, c) {
    let arr = [(a+b)*c, a*(b+c), a*b*c, a*b+c, a+b+c ]
    return arr.sort((a,b)=>b-a)[0]
  }
  console.log(expressionMatter(1,2,3))