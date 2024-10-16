//https://www.codewars.com/kata/59557b2a6e595316ab000046/train/javascript

// 📌 DESCRIPTION:

// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Good Luck!

// 💡 SOLUTION:


// function sortStringsByVowels(strings){
//     let target = 'eyuioa'.split('')

//     if (!Array.isArray(strings)){
//     var results = strings.split(',')
//     }
//     else {
//         var results = strings.join(',').split(',')
//     }

    

//     results.sort((a,b)=>{

//        let aa = a.split('').filter(value=> target.includes(value.toLowerCase())).join('').length;
//        let bb = b.split('').filter(value=> target.includes(value.toLowerCase())).join('').length;
//     if (aa !== bb) {return bb-aa}
//         return 0

//     });

//     return results;
//     }

//     console.log(sortStringsByVowels(["high","day","boot"]))

function convertHashToArray(hash){
   return Object.entries(hash)
    
  }
  console.log(convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}))