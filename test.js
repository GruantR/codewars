// 📌 DESCRIPTION:

// 💡 SOLUTION:
var list = [
  {
    firstName: "Sofia",
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: "Python",
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

function greetDevelopers(list) {
  for (let obj of list) {
    obj.greeting = `Hi ${obj.firstName}, what do you like the most about ${obj.language}?`;
  }
  return list;
}
console.log(greetDevelopers(list));
