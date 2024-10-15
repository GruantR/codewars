//https://www.codewars.com/kata/alphabetized/train/javascript

// 📌 DESCRIPTION:

// The alphabetized kata
// Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

// The input is restricted to contain no numerals and only words containing the english alphabet letters.

// Example:

// alphabetized("The Holy Bible") // "BbeehHilloTy"

// 💡 SOLUTION:

function alphabetized(s) {
    let target = "abcdefghijklmnopqrstuvwxyz";
    let arr = s.split("");
    return arr
      .filter((item) => target.includes(item.toLocaleLowerCase()))
      .sort(
        (a, b) =>
          target.indexOf(a.toLocaleLowerCase()) -
          target.indexOf(b.toLocaleLowerCase())
      )
      .join("");
  }
  
  console.log(alphabetized("The Holy Bible"));