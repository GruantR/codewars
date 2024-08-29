//https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

// 📌 DESCRIPTION:

// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// 💡 SOLUTION:

function incrementString(strng) {
    if (  !isFinite(strng[strng.length-1])) {
      return strng+'1'
   }
    let target = [];
    for (let i = strng.length - 1; i >= 0; i--) {
      if (!isFinite(strng[i])) {
        break;
      }
      target.push(strng[i]);
    }
    let newStr = strng.slice(0, strng.length - target.length);
    let newTarget = target.reverse().join("");
    
    return (
      newStr + (parseInt(newTarget) + 1).toString().padStart(newTarget.length, 0)
    );
  }
  
  console.log(incrementString("lmlm0"));
  