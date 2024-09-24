//https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript

// 📌 DESCRIPTION:

// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

// 💡 SOLUTION:

var encryptThis = function (text) {
    return text
      .split(" ")
      .map((item) => item.length<2 ? item.charCodeAt(0):item.length<3? item.charCodeAt(0)+item.slice(1):item.charCodeAt(0)+item[item.length-1]+item.slice(2,item.length-1)+item[1])
      .join(' ')
  };
  console.log(encryptThis("A wise old owl lived in an oak"));