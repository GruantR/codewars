//https://www.codewars.com/kata/find-the-capitals-1/train/javascript
// 📌 DESCRIPTION:
// Instructions
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

// 💡 SOLUTION:

var capitals = function (word) {
	return word.split('').map((item,index)=> { if (item === item.toUpperCase())  {return index}}).filter(item => item !== undefined)
};
console.log(capitals('CodEWaRs'))