//https://www.codewars.com/kata/shortest-word/train/javascript
// 📌 DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
// 💡 SOLUTION:

function findShort(string){
    return string.split(' ').sort((a,b)=> a.length - b.length)[0].length
  }
  console.log(findShort("turns out random test cases are easier than writing out basic ones"))