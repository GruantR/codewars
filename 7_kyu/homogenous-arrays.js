//https://www.codewars.com/kata/homogenous-arrays/train/javascript
// 📌 DESCRIPTION:

// Given a two-dimensional array, return a new array which carries over only those arrays from the original, which were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, the arrays inside the array will only contain characters and integers.

// Example:

// Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], your function should return [[1, 5, 4], ['b']].

// Addendum:

// Please keep in mind that for this kata, we assume that empty arrays are not homogenous.

// The resultant arrays should be in the order they were originally in and should not have its values changed.

// No implicit type casting is allowed. A subarray [1, '2'] would be considered illegal and should be filtered out.

// 💡 SOLUTION:

function filterHomogenous(arrays) {
    // // Фильтруем массив на основе элементов с одинаковым типом данных и ненулевой длиной
    return arrays.filter(arrElem => arrElem.every((item,index,array) => typeof(array[0]) === typeof(item)) && arrElem.length > 0);
  }
  console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]))