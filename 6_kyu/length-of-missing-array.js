//https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611/train/javascript

// 📌 DESCRIPTION:
// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.


// 💡 SOLUTION:

function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays === null || arrayOfArrays.length === 0) {
      return 0;
    }
    else if (arrayOfArrays.some((item) => item === null || item.length === 0)) {
      return 0;
    };
  
    let arrSort = arrayOfArrays.map((item) => item.length).sort((a, b) => b - a);
    for (let i = 0; i < arrSort.length; i++) {
      if (!arrSort.includes(arrSort[i] - 1)) {
        return arrSort[i] - 1;
      }
    }
  }
  console.log(
    getLengthOfMissingArray([[],
      [3],
      [3, 2],
      [1, 3, 0],
      [3, 0, 2, 0],
      [3, 4, 3, 0, 2, 3]])
  );
  