// git reset --hard origin/main
//https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

// 📌 DESCRIPTION:

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity


function capitalize(s){
    let arr1 = [];
    let arr2 = [];
    s.split('').forEach((item,index) => {index === 0 || index % 2 ===0 ? arr1.push(item.toUpperCase()) && arr2.push(item) : arr2.push(item.toUpperCase()) && arr1.push(item) })
    return [arr1.join(''),arr2.join('')]
    };
    
    
    console.log(capitalize("abcdef"))