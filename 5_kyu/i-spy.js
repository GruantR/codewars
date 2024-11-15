// git reset --hard origin/main
//https://www.codewars.com/kata/i-spy/train/javascript

// 📌 DESCRIPTION:

// In testing, a spy function is one that keeps track of various metadata regarding its invocations. Some examples of properties that a spy might track include:

// Whether it was invoked
// How many times it was invoked
// What arguments it was called with
// What contexts it was called in
// What values it returned
// Whether it threw an error
// For this kata, implement a spyOn function which takes any function func as a parameter and returns a spy for func. The returned spy must be callable in the same manner as the original func, and include the following additional properties/methods:

// .callCount() — returns the number of times spy has been called
// .wasCalledWith(val) – returns true if spy was ever called with val, else returns false.
// .returned(val) — returns true if spy ever returned val, else returns false
// Below is a specific example of how spyOn might work in the wild.

// function adder(n1, n2) { return n1 + n2; }
// var adderSpy = spyOn( adder );

// adderSpy(2, 4); // returns 6
// adderSpy(3, 5); // returns 8
// adderSpy.callCount(); // returns 2
// adderSpy.wasCalledWith(4); // true
// adderSpy.wasCalledWith(0); // false
// adderSpy.returned(8); // true
// adderSpy.returned(0); // false

// 💡 SOLUTION:

function spyOn(func) {
    let counter = 0;
    let arrInput = [];
    let arrOutput = [];
  
    let spyFunc = function (...arg) {
      arrInput.push(...arg);
      counter++;
      let result = func(...arg);
      arrOutput.push(result);
      return result;
    };
  
    spyFunc.callCount = function () {
      return counter;
    };
  
    spyFunc.wasCalledWith = function (searchElem) {
      return arrInput.includes(searchElem);
    };
  
    spyFunc.returned = function (searchElem) {
      return arrOutput.includes(searchElem);
    };
  
    return spyFunc;
  }
  
  function adder(n1, n2) {
    return n1 + n2;
  }
  
  var adderSpy = spyOn(adder);
  
  console.log(adderSpy(2, 4)); // returns 6
  console.log(adderSpy(3, 5)); // returns 8
  console.log(adderSpy.callCount()); // returns 2
  console.log(adderSpy.wasCalledWith(4)); // true
  console.log(adderSpy.wasCalledWith(0)); // false
  console.log(adderSpy.returned(8)); // true
  console.log(adderSpy.returned(0)); // false
  