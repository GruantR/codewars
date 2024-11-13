// git reset --hard origin/main
//https://www.codewars.com/kata/once/train/javascript

// 📌 DESCRIPTION:

// You'll implement once, a function that takes another function as an argument, and returns a new version of that function that can only be called once.

// Subsequent calls to the resulting function should have no effect (and should return undefined).

// For example:

// logOnce = once(console.log)
// logOnce("foo") // -> "foo"
// logOnce("bar") // -> no effect

// 💡 SOLUTION:

const sequenceSum = (begin, end, step) => {
  if (end < begin) {return 0}
  let sum = begin;
  let finish = begin
  while (end > sum) {
    sum+=step;
    finish+=sum


  }
  return finish
};
console.log(sequenceSum(1,5,3))
