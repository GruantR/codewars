//https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

// 📌 DESCRIPTION:
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// Good luck and enjoy!



// 💡 SOLUTION:

function wave(str){
    let arr = [];
    for (let i = 0; i<str.length; i++) {
      if (str[i]=== ' '){continue}
      arr.push(str.split('').map((item,index,array)=> index === i ? item.toUpperCase():item).join(''))
    }
    return arr
  }
  console.log(wave('hello'))
  