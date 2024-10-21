//https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

// 📌 DESCRIPTION:

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000, but fixed tests go higher.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.


// 💡 SOLUTION:



function getDivisorsCnt(n) {
    if (n === 1) { return 1; }
  
    let counter = 0;
    let index = Math.floor(Math.sqrt(n));
  
    for (let i = 1; i <= index; i++) {
        if (n % i === 0) {
            counter += 1; // Считаем i
            if (i !== n / i) {
                counter += 1; // Считаем n / i только если он не равен i
            }
        }
    }
    return counter; // Возвращаем общее количество делителей
  }
  
  console.log(getDivisorsCnt(25)); // Выводит 3 (1, 5, 25)
  
  
  