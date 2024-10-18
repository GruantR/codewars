//https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/train/javascript

// 📌 DESCRIPTION:

// In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// -- We sort by highest frequency to lowest frequency.
// -- If two elements have same frequency, we sort by increasing value.
// More examples in test cases.

// Good luck!

// Please also try Simple time difference
// 💡 SOLUTION:

function solve(arr){
    let obj = {}
    arr.forEach(item => obj[item] ? obj[item]+=1: obj[item] = 1)
    let finalArr = [];
    let newArr = Object
    .entries(obj)
    .sort((a,b)=> {
      if (b[1] !== a[1]) {
      return b[1]-a[1]
      }
      return a[0]-b[0]
    })
    .forEach(item => {
      for (let i = 0; i<item[1]; i++ ) {
        finalArr.push(Number(item[0]))
      }
    })       
  
    return finalArr
  }
  console.log(solve([26, 26, 26, 35, 35, 35, 0, 0, 5, 5, 7, 7, 20, 20, 33, 33, 38, 38, 43, 43, 50, 50, 3, 11, 12, 13, 15, 17, 18, 22, 34, 36, 37, 39, 41, 45, 47, 49]))
  