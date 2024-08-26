//https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

// 📌 DESCRIPTION:
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// 💡 SOLUTION:

function count(string) {
    let obj = {};
    string.split('').forEach(item => obj[item] ? obj[item]+=1: obj[item] = 1);
    return obj
  }
  console.log(count('aba'))