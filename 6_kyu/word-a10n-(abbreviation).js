//https://www.codewars.com/kata/5375f921003bf62192000746/train/javascript

// 📌 DESCRIPTION:

// The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

// A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
// Example
// abbreviate("elephant-rides are really fun!")
// //          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// // words (^):   "elephant" "rides" "are" "really" "fun"
// //                123456     123     1     1234     1
// // ignore short words:               X              X

// // abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// // all non-word characters (*) remain in place
// //                     "-"      " "    " "     " "     "!"
// === "e6t-r3s are r4y fun!"

// 💡 SOLUTION:

function abbreviate(string) {
    let alphabite = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    let arr = string.split("");
    let finalIndex = false;
    if (alphabite.includes(arr[arr.length - 1])) {
      arr.push(" ");
      finalIndex = true;
    }
    let start = 0;
    let end = arr.length;
    let finalArr = [];
  
    for (let i = start; i < end; i++) {
      if (!alphabite.includes(arr[i])) {
        finalArr.push(
          arr.slice(start, i).length > 3
            ? arr[start] +
                (arr.slice(start, i).length - 2).toString() +
                arr[i - 1]
            : arr.slice(start, i).join("")
        );
        finalArr.push(arr[i]);
        start = i + 1;
      }
    }
    if (finalIndex) {
      finalArr.pop();
    }
    return finalArr.join("");
  }
  console.log(abbreviate("Accessibility"));
  