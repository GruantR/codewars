//https://www.codewars.com/kata/function-composition-1/train/javascript

// 📌 DESCRIPTION:
// Javascript functions can be combined to form new functions. For example the functions addOne and multTwo can be combined to form a new function which first adds one and then multiplies by two, as follows:

// const addOne = (a) => a + 1
// const multTwo = (b) => b * 2
// const addOneMultTwo = (c) => multTwo(addOne(c))

// addOneMultTwo(5) // returns 12
// Combining functions like this is called function composition. Functional programming libraries in Javascript such as Ramda include a generic compose function which does the heavy lifting of combining functions for you. So you could implement addOneMultTwo as follows:

// const addOneMultTwo = compose(multTwo, addOne)

// addOneMultTwo(5) // returns 12
// A simple implementation of compose, could work as follows:

// 💡 SOLUTION:
const addOne = (a) => a + 1;
const multTwo = (b) => b * 2;

function compose(...func) {
  return function (param) {
    return func.reverse().reduce((accum, item) => item(accum), param);
  };
}
console.log(compose(addOne, multTwo, addOne, addOne)(2));
