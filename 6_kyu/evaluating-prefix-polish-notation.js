//https://www.codewars.com/kata/5e5b7f55c2e8ae0016f42339/train/javascript

// 📌 DESCRIPTION:

// Your task is to write a function calculate, which accepts a string with a mathematical exprssion written in prefix Polish notation and evaluates it. This means that all operations are placed before their operands. For example, the expression 3 + 5 is written in Polish notation as + 3 5, and (3 + 5) / (2 * 2) is / + 3 5 * 2 2.

// The only valid operations are +, -, * and /. The input string is guaranteed to be a valid expression.

// You can use eval or alternative if available in your language, but it is in no way needed for an idiomatic solution.

// Examples
// calculate('123.456')       == 123.456
// calculate('+ -5 5')        == 0
// calculate('* + 2 2 3')     == 12
// calculate('/ + 3 5 * 2 2') == 2
// Input
// A non-empty string consisting of numbers and arithmetic operators separated by spaces. This string is a valid arithmetic expression written in prefix polish notation.

// Output
// A number, result of evaluating the expression.

// 💡 SOLUTION:

function calculate(expression) {
    let arrNew = ["+", "-", "*", "/"];
    let arr = expression.split(" ");
    let target = arr.reverse();
  
    while (arrNew.some((operator) => target.includes(operator))) {
      for (let i = 0; i < target.length; i++) {
        if (
          isFinite(target[i]) &&
          isFinite(target[i + 1]) &&
          arrNew.includes(target[i + 2])
        ) {
          a = Number(target[i]);
          b = Number(target[i + 1]);
          let obj = {
            "+": b + a,
            "-": b - a,
            "*": b * a,
            "/": b / a,
          };
  
          target.splice(i, 3, obj[target[i + 2]]);
          break;
        }
      }
    }
  
    return Number(target.join(""));
  }
  console.log(calculate("0"));
  