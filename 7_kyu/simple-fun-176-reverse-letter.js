//git reset --hard origin/main
//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

// 📌 DESCRIPTION:

// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

// 💡 SOLUTION:

reverseLetter = (str) => str.split('').reverse().filter(item=> 'abcdefghijklmnopqrstuvwxyz'.includes(item)).join('')
console.log(reverseLetter("ultr53o?n"));