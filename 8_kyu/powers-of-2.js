//https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript

// 📌 DESCRIPTION:
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
// 💡 SOLUTION:

function powersOfTwo(n){
    let arr=[];
    for (let i=0; i<=n; i++){
      arr.push(Math.pow(2,i))
    }
    return arr
  }
  console.log(powersOfTwo(4))