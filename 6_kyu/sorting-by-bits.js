//https://www.codewars.com/kata/59fa8e2646d8433ee200003f/train/javascript

// 📌 DESCRIPTION:

// In this kata you're expected to sort an array of 32-bit integers in ascending order of the number of on bits they have.

// E.g Given the array [7, 6, 15, 8]

// 7 has 3 on bits (000...0111)
// 6 has 2 on bits (000...0110)
// 15 has 4 on bits (000...1111)
// 8 has 1 on bit (000...1000)
// So the array in sorted order would be [8, 6, 7, 15].

// In cases where two numbers have the same number of bits, compare their real values instead.

// E.g between 10 (...1010) and 12 (...1100), they both have the same number of on bits '2' but the integer 10 is less than 12 so it comes first in sorted order.

// Your task is to write a function that takes an array of integers and sort them as described above.

// Note: your solution has to sort the array in place.

// Example:

// [3, 8, 3, 6, 5, 7, 9, 1]   =>    [1, 8, 3, 3, 5, 6, 9, 7]

// 💡 SOLUTION:

function sortByBit(arr) {
    return arr.sort((a,b) => {
       let aa = a.toString(2).split('').filter(value=>value === '1').length;
       let bb = b.toString(2).split('').filter(value=>value === '1').length;
       if (aa < bb) {return -1}
       if (bb > aa) {return 1}
       if (aa == bb) {
        if (a > b) {return 1}
        if (a < b) {return -1}
        return 0
       }
       return 0
   })

  }
  console.log(sortByBit([ 3, 8, 3, 6, 5, 7, 9, 1]))

  