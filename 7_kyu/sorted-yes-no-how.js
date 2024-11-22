// git reset --hard origin/main
//https://www.codewars.com/kata/580a4734d6df748060000045/javascript

// 📌 DESCRIPTION:

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.



// 💡 SOLUTION :



function isSortedAndHow(array) {
    let sortArr = array.slice()
    let obj = {
        'yes, ascending': sortArr.sort((a,b)=>a-b).join(''),
        'yes, descending': sortArr.sort((a,b)=>b-a).join('')
    }
return obj["yes, ascending"] === array.join('') ? 'yes, ascending': (obj[ 'yes, descending'] !== array.join('') ? 'no':'yes, descending')
}
console.log(isSortedAndHow([15, 7, 3, -8]))
