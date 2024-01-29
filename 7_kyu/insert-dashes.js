//https://www.codewars.com/kata/insert-dashes/train/javascript
// 📌 DESCRIPTION:
// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

// Note that the number will always be non-negative (>= 0).

// 💡 SOLUTION:

function insertDash(num) {
    return num.toString().split('').map((item,index,array) => item %2 !== 0 && (array[index-1] %2 !==0 && array[index-1] >=0) ? '-'+item: item).join('')
  }
  console.log(insertDash(1454793))