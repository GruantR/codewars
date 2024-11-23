// git reset --hard origin/main
//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

// 📌 DESCRIPTION:

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.


// 💡 SOLUTION :

function noOdds( values ){
    return values.filter(item => item === 0 || item % 2 === 0)
  }
  console.log(noOdds([0,1,2,3,4,5,6]))
