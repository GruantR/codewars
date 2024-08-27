//https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

// 📌 DESCRIPTION:

// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// How I crossed a mountainous desert the smart way.
// The directions given to the man are, for example, the following (depending on the language):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
// [North, South, South, East, West, North, West]

// 💡 SOLUTION:

function dirReduc(arr) {
    let stek = [];
    let objNegtive = {
      'EAST':"WEST",
      "WEST":'EAST',
      'NORTH':'SOUTH',
      'SOUTH':'NORTH'
    }
    arr.forEach(item => {
      if (
        (stek.length>0 && stek[stek.length-1] === objNegtive[item])
      ) {
        stek.pop();
      } else {
        stek.push(item);
      }
    });
    return stek;
  }
  console.log(
    dirReduc(["EAST","WEST","SOUTH","NORTH","NORTH","NORTH","NORTH","EAST","WEST","NORTH","SOUTH"])
  );
  