// git reset --hard origin/main
//https://www.codewars.com/kata/58b38256e51f1c2af0000081/train/javascript

// 📌 DESCRIPTION:

// "AL-AHLY" and "Zamalek" are the best teams in Egypt, but "AL-AHLY" always wins the matches between them. "Zamalek" managers want to know what is the best match they've played so far.

// The best match is the match they lost with the minimum goal difference. If there is more than one match with the same difference, choose the one "Zamalek" scored more goals in.

// Given the information about all matches they played, return the index of the best match (0-based). If more than one valid result, return the smallest index.

// Example
// For ALAHLYGoals = [6,4] and zamalekGoals = [1,2], the output should be 1 (2 in COBOL).

// Because 4 - 2 is less than 6 - 1

// For ALAHLYGoals = [1,2,3,4,5] and zamalekGoals = [0,1,2,3,4], the output should be 4.

// The goal difference of all matches are 1, but at 4th match "Zamalek" scored more goals in. So the result is 4 (5 in COBOL).

// Input/Output
// [input] integer array ALAHLYGoals
// The number of goals "AL-AHLY" scored in each match.

// [input] integer array zamalekGoals
// The number of goals "Zamalek" scored in each match. It is guaranteed that zamalekGoals[i] < ALAHLYGoals[i] for each element.

// [output] an integer
// Index of the best match.

// 💡 SOLUTION:

function bestMatch(ALAHLYGoals, zamalekGoals) {
    let arr = [];
    ALAHLYGoals.forEach((item,index) => arr.push([item - zamalekGoals[index],index,zamalekGoals[index]]))

  return arr.sort((a,b)=>{
    if (a[0] === b[0]) {
      return b[2]-a[2]
    }
    return a[0]-b[0]
  })[0][1]
    
    
  }
  console.log(bestMatch([1, 2, 3, 4, 5],[0, 1, 2, 3, 4] ))


