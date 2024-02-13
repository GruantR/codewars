//https://www.codewars.com/kata/proof-read/train/javascript

// 📌 DESCRIPTION:
// You've just finished writing the last chapter for your novel when a virus suddenly infects your document. It has swapped the 'i's and 'e's in 'ei' words and capitalised random letters. Write a function which will:

// a) remove the spelling errors in 'ei' words. (Example of 'ei' words: their, caffeine, deceive, weight)

// b) only capitalise the first letter of each sentence. Make sure the rest of the sentence is in lower case.

// Example: He haD iEght ShOTs of CAffIEne. --> He had eight shots of caffeine.



// 💡 SOLUTION:

function proofread(str) {
    return str
      .toLowerCase()
      .split("ie")
      .join("ei")
      .split(". ")
      .map((item) => item.split("")[0].toUpperCase() + item.slice(1))
      .join(". ");
  }
  
  console.log(
    proofread("Their deceit was inconceivable. She seized the moment.")
  );
  