// git reset --hard origin/main
//https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript

// 📌 DESCRIPTION:

// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"
// Don't forget to rate this kata! Thanks :)

// 💡 SOLUTION:

String.prototype.camelCase=function(){
    if (this.length === 0) {return ''}
    return this.split(' ').map(item=> item[0].toUpperCase()+item.slice(1)).join('')
      
  }
  console.log("".camelCase())
  
  
  
  
  