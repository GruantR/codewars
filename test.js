//https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript

// 📌 DESCRIPTION:

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.



// 💡 SOLUTION:

function sortByLength (array) {

    return array.sort((a,b)=>a.split('').length - b.split('').length)

}
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]))