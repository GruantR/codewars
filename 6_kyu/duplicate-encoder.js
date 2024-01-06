//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

// 📌 DESCRIPTION:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
// 💡 SOLUTION:

function duplicateEncode(word) {
  let str = word.toLocaleLowerCase();
  let map = new Map();
  for (let letter of str) {
    map.has(letter) ? map.set(letter, map.get(letter) + 1) : map.set(letter, 0);
  }
  let finalyStr = [...str]
    .map((item) => (map.get(item) > 0 ? ")" : "("))
    .join("");

  return finalyStr;
}
console.log(duplicateEncode("Success"));
