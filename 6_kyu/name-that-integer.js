//https://www.codewars.com/kata/name-that-integer/train/javascript

// 📌 DESCRIPTION:
// Write a method detect_int that returns the first positive integer for which an arbitrary number of lambdas returns true. If no arguments are passed in, then detect_int should return 1.

// For example:

// lam1 = x => x > 9
// lam2 = x => x**0.5 % 1 == 0

// detect_int()             // => 1
// detect_int(lam1)         // => 10
// detect_int(lam2)         // => 1
// detect_int(lam1,lam2)    // => 16
// The testing rubric will never ask for a number that does not exist, like:

// detect_int(n=>n%2==1, n=>n%2==0)      // => !??
// For examples, see the example test cases.

// 💡 SOLUTION:

function detectInt(...conditions) {
    let arr = false;
    let n = 0;
    while (!arr) {
      n += 1;
      arr = conditions.every((item) => item(n));
    }
    return n;
  }
  console.log(
    detectInt(
      (x) => x % 5 == 0,
      (x) => x % 3 == 0
    )
  );