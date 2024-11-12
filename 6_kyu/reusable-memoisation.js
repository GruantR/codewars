// git reset --hard origin/main
//https://www.codewars.com/kata/5b773b698adeaeb6b80000df/train/javascript

// 📌 DESCRIPTION:

// Recursive algorithms can sometimes be optimised with memoisation. Often however, the memoisation is tightly coupled with the algorithm, making reuse difficult.

// Task
// Implement a reusable memoisation function
// that, given a function of one argument, returns a memoised function of one argument.

// Functions of more than one argument can be memoised by currying the function and memoising it for every argument, one at a time. This has easier reusability than having a different memoisation component for every number of arguments.
// ( This scenario will be tested. )

// Performance vs. reusability
// Maximum performance is not the goal of this kata; maximum simplicity and reusability is.
// If, for any specific application, you need maximum performance, you would probably customise your reusable memo function for the job, and possibly couple it more tightly, thus shifting the balance away from simplicity and reusability more towards performance. There's always a balance to be struck, just as there is in resource allocation ( time vs. space, CPU vs. memory ).

// Testing
// Your function will be tested with naive implementations of recursive staples factorial, Ackermann and Fibonacci, and the algorithm for finding a longest common subsequence.
// The submit tests are exactly the same as the example tests, only with some random testing thrown in, but there are no surprises. If you pass the example tests, you should pass the submit tests, and you can read the example tests. ( It is recommended that you do. )

// Ackermann and the longest common subsequence implementation will test multiply memoising a curried function.

// The datatype of the function argument can be any primitive or object.
// If a function of zero arguments is passed, it is to be treated as a function of one argument which is undefined.

// Related kata
// any factorial or Fibonacci kata, e.g. The Millionth Fibonacci Kata
// Ackermann Function
// Longest Common Subsequence and its Performance version


// 💡 SOLUTION:

const factorial = (i) => (i ? i * factorial(i - 1) : 1);

function memo(fn) {
  let obj = {};

  return function (...arg) {
    let key = 0;
    if (arg.length === 1 && Number.isFinite(arg[0])) {
      key = arg[0];
    } else {
      key = JSON.stringify(arg);
    }

    if (key in obj) {
      return obj[key];
    }

    const result = fn(...arg);
    obj[key] = result;

    return result;
  };
}

const memoizedFactorial = memo(factorial);
console.log(memoizedFactorial(15));
console.log(memoizedFactorial(15));
