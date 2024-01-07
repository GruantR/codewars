// 📌 DESCRIPTION:


// 💡 SOLUTION:

function findUnique(numbers) {
    let numi = null;
    let obj = {};
    for (let key of numbers) {
      obj[key] ? obj[key]++ : (obj[key] = 1);
    }
    for (let key in obj) {
      if (obj[key] === 1) {
        numi = parseInt(key);
      }
    }
    return numi;
  }
  
  
  console.log(findUnique([3, 5, 5, 4, 4, 3, 2, 2, 9]));
  