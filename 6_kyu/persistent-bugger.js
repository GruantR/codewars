//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

// 📌 DESCRIPTION:
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

// 💡 SOLUTION:

function persistence(num) {
    let counter = 0;
    let target = 1;
    while (String(num).length > 1) {
      String(num)
        .split("")
        .map((item) => (target *= item));
      num = target;
      target = 1;
      counter++;
    }
    return counter;
  }
  console.log(persistence(39));
  