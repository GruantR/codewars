//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

// 📌 DESCRIPTION:

// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// 💡 SOLUTION:

snail = function (array) {
    if (array.flat().length === 0) {
      return [];
    }
    if (array.flat().length === 1) {
      return array[0];
    }
    let newArr = [];
    while (array.length > 0) {
      newArr.push(array[0].splice(0));
      array.shift();
      if (array.length === 1) {
        newArr.push(array[0].splice(array[0].reverse()));
        array.pop();
      } else {
        for (let j = 0; j < array.length; j++) {
          newArr.push(array[j].splice(array[j].length - 1, 1));
        }
  
        newArr.push(
          array[array.length - 1].splice(array[array.length - 1].reverse())
        );
        array.pop();
  
        if (array.length === 1) {
          newArr.push(array[0].splice(0));
          array.pop();
        } else {
          for (let j = array.length - 1; j >= 0; j--) {
            newArr.push(array[j].splice(0, 1));
          }
        }
      }
    }
    return newArr.flat();
  };
  
  console.log(
    snail([
      [1, 2, 3, 4, 5, 6],
      [20, 21, 22, 23, 24, 7],
      [19, 32, 33, 34, 25, 8],
      [18, 31, 36, 35, 26, 9],
      [17, 30, 29, 28, 27, 10],
      [16, 15, 14, 13, 12, 11],
    ])
  );
  