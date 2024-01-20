//https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
// 📌 DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
// 💡 SOLUTION:

function getCount(str) {
    let target = 'aeiou'.split('')
    return str.split('').filter(item => target.includes(item)).length;
  }
  console.log(getCount("abracadabra"))