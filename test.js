// 📌 DESCRIPTION:

// 💡 SOLUTION:

function groupAnagrams(words) {
  let obj = {};
  for (let key of words) {
    let sortedElem = key.split('').sort().join('');
    if(obj[sortedElem]) {
        obj[sortedElem].push(key);
    }
    else {
        obj[sortedElem] = [key]
    }
    
  }
  return Object.values(obj);
}
console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]));
