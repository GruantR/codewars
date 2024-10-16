//https://www.codewars.com/kata/59557b2a6e595316ab000046/train/javascript

// 📌 DESCRIPTION:

// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Good Luck!

// 💡 SOLUTION:

function convertHashToArray(hash){
    return Object.entries(hash)
     
   }
   console.log(convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}))