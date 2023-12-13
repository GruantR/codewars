// https://www.codewars.com/kata/5c44b0b200ce187106452139/train/javascript
// // 📌 DESCRIPTION:
// Write a function that returns the number of arguments it received.

// args_count() --> 0
// args_count('a') --> 1
// args_count('a', 'b') --> 2

// 💡 SOLUTION:

function args_count(...arg){
    return arg.length
  }
  console.log(args_count([2],2))
   
  how-many-arguments
  