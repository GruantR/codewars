//https://www.codewars.com/kata/596cf5b0e1665a2d02000007/train/javascript
// 📌 DESCRIPTION:
//In this kata, you will be given array of Objects a=[{obj1},{obj2},...]. You will return merged Objects. Incase a key exists in one or more Objects and since you can not have duplicate values for a single key in your final set, you keep the most recent value for that key as show in the example below.
// 💡 SOLUTION:

let a = { 1: "1", 2: "2", 3: "3" };
let b = { 3: "4", 5: "6", 6: "7", 7: "8" };
let c = { 5: "9", 8: "9", 6: "12", 23: "35" };
arr = [a, b, c];
function objConcat(o) {

  let newObj = {};
  o.forEach((item) => Object.assign(newObj, item));
  return newObj;
}
console.log(objConcat(arr));
