//https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/javascript

// 📌 DESCRIPTION:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

// 💡 SOLUTION:

function doubleChar(str) {
  return str.split('').reduce((acc,item)=>acc+item+item,"")
}
console.log(doubleChar('stRinf'))