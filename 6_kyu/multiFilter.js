// git reset --hard origin/main
//https://www.codewars.com/kata/56a298b27e9e994977000023/train/javascript

// 📌 DESCRIPTION:
// Write a function called multiFilter which receives a variable number of filter functions. The function should return a function that receives one element (a compound filter function).

// That is, if we have two functions:

// function isEven(el){
//   return el % 2 === 0;
// }
// and

// function isGTten(el){
//   return el > 10;
// }
// then

// [1,2,3,4,10,11,12,20,21,22].filter(multiFilter(isEven, isGTten));
// should return [12,20,22]

// Additional Rules
// multiFilter can't be implemented using loops like:

// for
// while
// do while
// WARNING: Using ES6 features may break these rules because Babel can introduce some for loops when transpiling your code. Please, open an issue if it happens.

// 💡 SOLUTION:

function isGTten(el) {
    return el > 10;
  }
  
  var isEven = function (el) {
    return el % 2 === 0;
  };
  
  function multiFilter(...args) {
    return function (elem) {
      return args.every(function (func) {return func(elem)});
    };
  }
  
  console.log(
    [1, 2, 3, 4, 10, 11, 12, 20, 21, 22].filter(multiFilter(isEven, isGTten))
  );
  