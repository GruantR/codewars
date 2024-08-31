//https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript

// 📌 DESCRIPTION:

// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

// This kata is part of the Simple Encryption Series:

// Simple Encryption #1 - Alternating Split
// Simple Encryption #2 - Index-Difference
// Simple Encryption #3 - Turn The Bits Around
// Simple Encryption #4 - Qwerty
// Have fun coding it and please don't forget to vote and rank this kata! :-)


// 💡 SOLUTION:

function encrypt(text, n) {
    if(n<1 || text === null || text.length === 0){return text}
    for (let y = 0; y<n; y++) {
  let arr = text.split('')
  let newArr= [[],[]];
  for (let i=0; i<arr.length;i++) {
    i%2 === 0 || i === 0 ? newArr[1].push(arr[i]) : newArr[0].push(arr[i]) 
  }
  text = newArr.flat().join('')
    }
  return text
  }
  console.log(encrypt("This is a test!", 1))
  
  
  
  function decrypt(encryptedText, n) {
    if(n<1 || encryptedText === null || encryptedText.length === 0){return encryptedText}
    for (let y = 0; y<n; y++) {
  let len = Math.floor(encryptedText.length/2);
   let a = encryptedText.slice(0,len).split('');
   let b = encryptedText.slice(len).split('');
   let newArr = [];
   for (let i = 0; i<len+1; i++) {
  newArr.push(b[i],a[i])
   }
   encryptedText = newArr.join('')
  }
  return encryptedText
  }
  console.log(decrypt("hsi  etTi sats!",1))
  