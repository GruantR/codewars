// https://www.codewars.com/kata/even-or-odd/train/javascript
// 📌 DESCRIPTION:
//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
//Создайте функцию, которая принимает целое число в качестве аргумента и возвращает «Чет» для четных чисел или «Нечет» для нечетных чисел.

// 💡 SOLUTION:
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd(2));
console.log(evenOrOdd(3));
