// https://www.codewars.com/kata/56a28c30d7eb6acef700004d/train/javascript
// 📌 DESCRIPTION:
// A perfect number is a number in which the sum of its divisors (excluding itself) are equal to itself.

// Write a function that can verify if the given integer n is a perfect number, and return True if it is, or return False if not.

// Examples
// n = 28 has the following divisors: 1, 2, 4, 7, 14, 28

// 1 + 2 + 4 + 7 + 14 = 28 therefore 28 is a perfect number, so you should return True

// Another example:

// n = 25 has the following divisors: 1, 5, 25

// 1 + 5 = 6 therefore 25 is not a perfect number, so you should return False

// 💡 SOLUTION:

// function isPerfect(n) {
//   let arr = [];
//   for (let i = 1; i < n; i++) {
//     if (n % i === 0) { arr.push(i)} ;
//   }
//   return arr.reduce((accum, item) => accum + item, 0) === n;
// }
// console.log(isPerfect(28));


function isPerfect(n) {
    if (n === 1) {
      return false;
    }
  
    let sum = 1;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        console.log(sum += i);
        if (i * i !== n) { // Проверяем, чтобы не учитывать одинаковые делители дважды
          sum += n / i;
        }
      }
    }
  
    return sum === n;
  }
  console.log(isPerfect(28));