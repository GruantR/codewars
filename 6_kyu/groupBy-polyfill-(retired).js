// git reset --hard origin/main
//https://www.codewars.com/kata/653107dc0bbdb7003e9c59c8/train/javascript

// 📌 DESCRIPTION:

// Your task is to implement the Object.groupBy() polyfill.

// The groupBy function accepts two arguments: items and cb. The function calls cb once for each element in items, in ascending order, and constructs an object of arrays.

// Each value returned by cb is coerced to a property key, and the associated element is included in the array in the constructed object according to this property key.

// The cb function is called with two arguments: the value of the element and the index of the element.

// // group integers by the number of digits

// const items = [1, 4, 123, 44444, 88888, 12345];
// const cb = x => x.toString().length;
// const result = Object.groupBy(items, cb);

// // result === {
// //     "1": [1, 4],
// //     "3": [123],
// //     "5": [44444, 88888, 12345],
// // }
// Follow-up kata: GroupBy Advanced

// 💡 SOLUTION:

let groupBy = (Object.groupBy = function (items, cb) {
    let obj = {
      __proto__: null,
    };
  
    if (!Array.isArray(items)) {
      items = [...items];
    }
  
    items.forEach((value, index) => {
      let resFunc = cb(value, index);
  
      obj[resFunc] ? obj[resFunc].push(value) : (obj[resFunc] = [value]);
    });
    return obj;
  });
  
  let items = ["a", "b"];
  let cb = (x) => x;
  
  const result = Object.groupBy(items, cb);
  console.log(result);
  