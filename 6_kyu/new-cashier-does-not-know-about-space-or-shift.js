//https://www.codewars.com/kata/5d23d89906f92a00267bb83d/train/javascript

// 📌 DESCRIPTION:

// All the orders they create look something like this:

// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

// Their preference is to get the orders as a nice clean string with spaces and capitals like so:

// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.

// The menu items are fairly simple, there is no overlap in the names of the items:

// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke

// 💡 SOLUTION:

function getOrder(input) {
    let newArr = [];
    let start = 0;
    let arr = ['burger', 'fries', 'chicken', 'pizza', 'sandwich', 'onionrings', 'milkshake', 'coke'];
    for (let i = 0; i<=input.length; i++) {
       
        if (arr.includes(input.slice(start,i))) {
            newArr.push(input.slice(start,i))
            start = i;
        }
    };
    let result = [];
    for (let i = 0; i< arr.length; i++) {
        newArr.forEach(item => item === arr[i] ?result.push(item[0].toUpperCase()+item.slice(1)):1)
    }

    
    return result.join(' ')
  }
  console.log(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"))