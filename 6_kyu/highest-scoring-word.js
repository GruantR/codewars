//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

// 📌 DESCRIPTION:
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.
// 💡 SOLUTION:

function high(x){
    let target = "-abcdefghijklmnopqrstuvwxyz";
    let obj = {
    
    };
    for (let item of x.split(' ')) {
      obj[item] ? 1: obj[item] = item.split('').reduce((accum,elem) => accum+target.indexOf(elem),0)
    }
    return Object.entries(obj).sort((a,b)=> b[1]-a[1])[0][0]
    }
    console.log(high(('man i need a taxi up to ubud')))