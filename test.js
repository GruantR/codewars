// git reset --hard origin/main
//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

// 📌 DESCRIPTION:

// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

// 💡 SOLUTION :

// function groupBy(
//   array,
//   classifier,
//   downstream,
//   accumulatorSupplier,е

// let collectMap = new Map();
// array.forEach(item => {
//   let key = classifier(item);
//   let value = downstream(accumulatorSupplier(item),item)
//   console.log(key)
//   //collectMap.has(key) ?  collectMap.set( key,collectMap.get(key)+value) :  collectMap.set(key,value)
//   collectMap.has(key) ?  collectMap.set( key,collectMap.get(key).concat(value)) :  collectMap.set(key,value)

// }
// )
//   return collectMap
// }

// const employees = [
//   { name: "James", income: 1000, profession: "developer", age: 23, },
//   { name: "Robert", income: 1100, profession: "qa", age: 34, },
//   { name: "John", income: 1200, profession: "designer", age: 32, },
//   { name: "Mary", income: 1300, profession: "designer", age: 22, },
//   { name: "Patricia", income: 1400, profession: "qa", age: 23, },
//   { name: "Jennifer", income: 1500, profession: "developer", age: 45, },
//   { name: "Max", income: 1600, profession: "developer", age: 27, },
// ];

// const profession2names = groupBy(
//   employees,
//   employee => employee.profession,
//   (acc, employee) => [...acc, employee.name],
//   () => [],
// );

// console.log(profession2names)

function isSortedAndHow(array) {
    let sortArr = array.slice()
    let obj = {
        'yes, ascending': sortArr.sort((a,b)=>a-b).join(''),
        'yes, descending': sortArr.sort((a,b)=>b-a).join('')
    }
return obj["yes, ascending"] === array.join('') ? 'yes, ascending': (obj[ 'yes, descending'] !== array.join('') ? 'no':'yes, descending')
}
console.log(isSortedAndHow([15, 7, 3, -8]))
