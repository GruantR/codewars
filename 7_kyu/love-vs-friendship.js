// git reset --hard origin/main
//https://www.codewars.com/kata/59706036f6e5d1e22d000016/train/javascript

// 📌 DESCRIPTION:

// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.

// 💡 SOLUTION:

function wordsToMarks(string){
    let arr = '_abcdefghijklmnopqrstuvwxyz'
      return string.split('').reduce((accum,item) => accum+arr.indexOf(item),0)
    }
    console.log(wordsToMarks('adssds'))