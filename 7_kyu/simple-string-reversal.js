// git reset --hard origin/main
//https://www.codewars.com/kata/5a8d1c82373c2e099d0000ac/train/javascript

// 📌 DESCRIPTION:

// In this Kata, you will be given a string and two indexes (a and b). Your task is to reverse the portion of that string between those two indices inclusive.

// str = "codewars", a = 1, b = 5 --> "cawedors"
// str = "cODEWArs", a = 1, b = 5 --> "cAWEDOrs"
// Input will be lowercase and uppercase letters only.

// The first index a will always be smaller than the string length; the second index b can be greater than the string length. More examples in the test cases. Good luck!

// Please also try:

// 💡 SOLUTION:

function solve(st,a,b){
    let target = st.slice(a,b+1)
    let arr = st.split(target).join(target.split('').reverse().join(''))
    return arr
   }
  console.log(solve("codewars",1,5))