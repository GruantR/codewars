//https://www.codewars.com/kata/remove-duplicate-words/train/javascript
// 📌 DESCRIPTION:
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

// 💡 SOLUTION:

function removeDuplicateWords (s) {
    let set = new Set(s.split(' '))
    return Array.from(set).join(' ')
  }
  console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))