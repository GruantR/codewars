//https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript
// 📌 DESCRIPTION:
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

// 💡 SOLUTION:
function checkExam(array1, array2) {
    let keks = array1.reduce((accum, item, index, array) => {
      if(array1[index] === array2[index]){
        return accum+4;
      } else if(array2[index] === ''){
        return accum + 0;
      } else{
        return accum-1;
      }}, 0)
    return keks > 0 ? keks:0;
   }
  console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])) 