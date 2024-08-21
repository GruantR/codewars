//https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

// 📌 DESCRIPTION:
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// 💡 SOLUTION:

function towerBuilder(nFloors) {
    let arr = [];
    let sum = nFloors;
    let target = "*".repeat(nFloors * 2 - 1);
    for (let i = 1; i < nFloors; i++) {
      arr.push(" ".repeat(sum - 1) + "*".repeat(i * 2 - 1) + " ".repeat(sum - 1));
      sum--;
    }
    arr.push(target);
  
    return arr;
  }
  console.log(towerBuilder(4));
  