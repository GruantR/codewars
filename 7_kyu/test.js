// 📌 DESCRIPTION:

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
