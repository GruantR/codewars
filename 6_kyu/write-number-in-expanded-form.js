//https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
// 📌 DESCRIPTION:

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

// 💡 SOLUTION:
function expandedForm(num) {
    let newArr = [];
    let arr = num.toString().split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr.push(arr[i] + '0'.repeat(arr.length - 1 - i))
        }
    }
    return newArr.join(' + ')
  }
  console.log(expandedForm(4025))
  