//https://www.codewars.com/kata/529b54d9aba78c924d00088e/train/javascript

// 📌 DESCRIPTION:

// Given a string and an object/array you need to return a formatted string. Replace all occurrences in the string where the name of a key in the object is surrounded by curly brackets.

// Inherited object properties should not be applied

// An example says more than a thousand words..

// Example using object

// var s = 'Hello {foo} - make me a {bar}';
// var o = {
//   foo : 'Jack',
//   bar : 'sandwich'
// };

// format(s, o); // "Hello Jack - make me a sandwich"
// Example using array

// var s = 'Hello {0} - make me a {1}';
// var a = ['Jack', 'sandwich'];

// format(s, a); // "Hello Jack - make me a sandwich"
// See tests for more information.

// 💡 SOLUTION:

var obj = { foo: "Jack", bar: "sandwich" };
var a = ["Jack", "sandwiches", 0];
var format = function (str, obj) {
  let arr = str.split(" ");
  let i = 0;
  for (let item of arr) {
    if (
      (item.includes("{" && "}") &&
        obj[item.slice(item.indexOf("{") + 1, item.indexOf("}"))]) ||
      obj[item.slice(item.indexOf("{") + 1, item.indexOf("}"))] === 0
    ) {
      //arr[i] = obj[item.slice(1,item.length-1)]
      arr[i] = item
        .split(`${item.slice(item.indexOf("{"), item.indexOf("}") + 1)}`)
        .join(`${obj[item.slice(item.indexOf("{") + 1, item.indexOf("}"))]}`);
    }
    i++;
  }

  return arr.join(" ");
};
console.log(format("Hello {0} - {foobar} make me {2} {1} - I'm full..", a));
