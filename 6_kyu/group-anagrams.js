//https://www.codewars.com/kata/537400e773076324ab000262/train/javascript
// 📌 DESCRIPTION:
// our job is to group the words in anagrams.

// What is an anagram ?
// star and tsar are anagram of each other because you can rearrange the letters for star to obtain tsar.

// Example
// A typical test could be :

// // input
// groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]);

// // output
// [
//   ["tsar", "star", "tars"],
//   ["rat", "tar"],
//   ["cheese"]
// ]
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
  