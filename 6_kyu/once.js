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

function once(fn) {
    let firstStart = false;
    return function (...arg) {
      if (!firstStart) {
        firstStart = true;
        let res = fn(...arg);
        return res;
      }
      return undefined;
    };
  }
  logOnce = once(console.log);
  logOnce("foo"); // -> "foo"
  logOnce("bar"); //
  logOnce("bar");
  logOnce("bar");
  