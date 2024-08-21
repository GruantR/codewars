//https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/javascript

// 📌 DESCRIPTION:
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:
// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// 💡 SOLUTION:

function hoopCount (n) {
    return n>9?"Great, now move on to tricks":"Keep at it until you get it"  
  }
  console.log(hoopCount (10))