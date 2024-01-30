//https://www.codewars.com/kata/row-weights/train/javascript
// 📌 DESCRIPTION:

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, 
// where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// 💡 SOLUTION:

function rowWeights(array){
    let arr = [0,0]
    array.forEach((item,index) => {
      if (index === 0 || index % 2 === 0) {arr[0]+=item}
      else(arr[1]+=item)
    })
    return arr
  }
  console.log(rowWeights([39,84,74,18,59,72,35,61]))
  
  