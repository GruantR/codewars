//https://www.codewars.com/kata/51689e27fe9a00b126000004/train/javascript

// 📌 DESCRIPTION:

// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

// Note:

// Empty string values should be ignored.
// Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
// Example: (Input --> output)

// ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
// ['ninja', '', 'ronin'] --> "ninja and ronin"
// [] -->""


// 💡 SOLUTION:

function formatWords(words){
    if (words === null) {
      return '';
    }
    const filteredWords = words.map((item)=> {if(item === null){return ''}; return item}).filter((item) => item.length > 0);
    if (filteredWords.length < 2) {
      return filteredWords.join('');
    }
    const lastWord = filteredWords.pop();
    return `${filteredWords.join(', ')} and ${lastWord}`
  }
  console.log(formatWords(['one', 'two', '', null, 'three']))