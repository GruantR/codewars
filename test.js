//https://www.codewars.com/kata/5d2d0d34bceae80027bffddb/train/javascript

// 📌 DESCRIPTION:

// The goal of this Kata is to write a function that will receive an array of strings as its single argument, then the strings are each processed and sorted (in desending order) based on the length of the single longest sub-string of contiguous vowels ( aeiouAEIOU ) that may be contained within the string. The strings may contain letters, numbers, special characters, uppercase, lowercase, whitespace, and there may be (often will be) multiple sub-strings of contiguous vowels. We are only interested in the single longest sub-string of vowels within each string, in the input array.

// Example:

// str1 = "what a beautiful day today"
// str2 = "it's okay, but very breezy"
// When the strings are sorted, str1 will be first as its longest sub-string of contiguous vowels "eau" is of length 3, while str2 has as its longest sub-string of contiguous vowels "ee", which is of length 2.

// If two or more strings in the array have maximum sub-strings of the same length, then the strings should remain in the order in which they were found in the orginal array.

// 💡 SOLUTION:


function sortStringsByVowels(strings){
    let target = 'aeiouAEIOU'.split('')
    let obj = {};
   strings.forEach((item,index) => obj[item] = index);
let arr = strings;
      arr.sort((a,b) => {

      function firstNum(a) {
        let sumA = 0;
        let counterA = 0;
        for (let value of a) {
          target.includes(value) ? counterA+=1 : counterA = 0;
          counterA > sumA ? sumA = counterA : sumA;
        }
        return sumA
      }
      let aa = firstNum(a);

      function secondNum(b) {
        let sumB = 0;
        let counterB = 0;
        for (let value of b) {
          target.includes(value) ? counterB+=1 : counterB = 0;
          counterB > sumB ? sumB = counterB : sumB;
        }
        return sumB
      }
      let bb = secondNum(b)
      if (aa!==bb) {return bb-aa}
      return obj[a] - obj[b]
    })
    return arr
  }
    console.log(sortStringsByVowels(["AIBRH","YOUNG","GREEEN"]))

