// git reset --hard origin/main
//https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript

// 📌 DESCRIPTION:

// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia c"

// "zodiac" -> 26
// The consonant substrings are: "z", "d" and "c" with values "z" = 26, "di" = 4 and "c" = 3. The highest is 26.

// "strength" -> 57
// The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

// For C: do not mutate input.

// More examples in test cases. Good luck!

// If you like this Kata, please try:



// 💡 SOLUTION :


function solve(s) {
    const vowel = 'aeiou'.split('');
    const target = '_abcdefghijklmnopqrstuvwxyz';
    let conter = 0;
    let max = 0;

    s.split('').forEach((item)=>  {
        if (vowel.includes(item)) {conter = 0}
        else {
            conter += target.indexOf(item)
            max < conter ? max = conter:1
        }
      
    })
    return max

     
  };

  console.log(solve('chruschtschov'))