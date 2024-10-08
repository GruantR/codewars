//https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

// 📌 DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// 💡 SOLUTION:


function XO(str) {
    str = str.toLowerCase()
    if (str.includes('o') === false && str.includes('x') === false ) {
      return true
    }
    let obj = {}; 
    str.split('').forEach(item => obj[item] ? obj[item]+=1 : obj[item]=1);
    return obj.x === obj.o
  
    
  }
  console.log(XO("ooxx"))