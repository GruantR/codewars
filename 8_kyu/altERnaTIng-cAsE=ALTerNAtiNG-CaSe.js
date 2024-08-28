//https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript

// 📌 DESCRIPTION:

// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase 
// in your selected language; see the initial solution for details) such that each lowercase letter 
// becomes uppercase and each uppercase letter becomes lowercase. For example:

// 💡 SOLUTION:

String.prototype.toAlternatingCase = function () {
    return this.split('').map(item=> item === item.toUpperCase() ? item.toLowerCase(): item.toUpperCase()).join('')
  }
  console.log("hello World".toAlternatingCase()) 