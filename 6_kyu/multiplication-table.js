//https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

// 📌 DESCRIPTION:

// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

// 💡 SOLUTION:



multiplicationTable = function(size) {
    let arr = [];
    for(let i = 1; i<=size; i++) {
      arr.push([])
      for(let y= 1; y<=size; y++) {
        arr[i-1].push(i*y)
      }
  
    }
  
  return arr
  }
  console.log(multiplicationTable(3))