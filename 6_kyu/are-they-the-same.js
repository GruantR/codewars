//https://www.codewars.com/kata/550498447451fbbd7600041c/javascript

// 📌 DESCRIPTION:
// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, 
// with the same multiplicities (the multiplicity of a member is the number of times it appears). 
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// 💡 SOLUTION:

a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
function comp (a,b){
  if (a === null || b === null) {
    return false;
}
  let sortA = [...a].sort((a,b)=>a-b);
  let sortB = [...b].map(item=> Math.sqrt(item)).sort((a,b)=>a-b);
  for (let i=0; i<sortA.length; i++){
    if (sortA[i]!==sortB[i]){
      return false
    }
  }
  return true
}
console.log(comp(a,b))
