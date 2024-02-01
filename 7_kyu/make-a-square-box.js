//https://www.codewars.com/kata/make-a-square-box/train/javascript
// 📌 DESCRIPTION:

// Easy; Make a box
// Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.
// Like this:

// n = 5

// [
//   '-----',
//   '-   -',
//   '-   -',
//   '-   -',
//   '-----'
// ]
// n = 3

// [
//   '---',
//   '- -',
//   '---'
// ]

// 💡 SOLUTION:


function box(num){
    let target = '-'
    let targetSpace = ' '
    let arr = [];
    for(let i = 0; i<num; i++) {
        if (i === 0 || i === num-1 ) {
            arr.push(target.repeat(num))
        }
        else {
        arr.push(target + targetSpace.repeat(num-2) + target)
        }
    }
    return arr
  }
  console.log(box(5))
  
  