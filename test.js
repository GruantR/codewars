// git reset --hard origin/main
//https://www.codewars.com/kata/51fc3beb41ecc97ee20000c3/train/javascript

// 📌 DESCRIPTION:

// The makeLooper() function (or make_looper in your language) takes a string (of non-zero length) as an argument. It returns a function. The function it returns will return successive characters of the string on successive invocations. It will start back at the beginning of the string once it reaches the end.

// For example:

// var abc = makeLooper('abc');
// abc(); // should return 'a' on this first call
// abc(); // should return 'b' on this second call
// abc(); // should return 'c' on this third call
// abc(); // should return 'a' again on this fourth call
// Different loopers should not affect each other, so be wary of unmanaged global state.

// 💡 SOLUTION:

function makeLooper(str) {
  let i = -1;
  return function () {
    i++;
    if (i === str.length) {
      i = 0;
    }
    return str[i];
  };
}
var abc = makeLooper("abc");
console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());
