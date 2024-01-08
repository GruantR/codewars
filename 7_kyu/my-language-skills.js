https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript

// 📌 DESCRIPTION:
// Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
// 💡 SOLUTION:
function myLanguages(results) {
    let arr = Object
    .entries(results)
    .sort((a,b) =>b[1]-a[1])
    .filter(item => item[1] >= 60)
    .map(item => item[0])
      return arr
    }
    console.log(myLanguages({"Hindi" : 60, "Greek" : 55, "Dutch" : 93}))