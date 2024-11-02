// git reset --hard origin/main
//https://www.codewars.com/kata/53c29a6abb5187180d000b65/train/javascript

// 📌 DESCRIPTION:

// This is the first part of three (part2, part3).

// Generators and Iterators are ES6 features that allow things like this:

// function* fibonacci() {
//   let [prev, curr] = [0, 1];
//   for (;;) {
//     [prev, curr] = [curr, prev + curr];
//     yield curr;
//   }
// }
// Using them in this way, we can do amazing things:

// let seq = fibonacci();
// seq.next() ==> 1
// seq.next() ==> 2
// seq.next() ==> 3
// seq.next() ==> 5
// seq.next() ==> 8
// The goal of this kata is to implement pseudo-generators with ES5.

// The first thing to do is to implement the generator function:

// function generator(sequencer) {
//    ...
// }
// generator(sequencer[, arg1, arg2, ...]) receives a sequencer function to generate the sequence and returns an object with a next() method. When the next() method is invoked, the next value is generated. The method could receive as well optional arguments to be passed to the sequencer function.

// This is an example of a dummy sequencer:

// function dummySeq() {
//   return function() {
//     return "dummy";
//   };
// }
// To test generator(), you could use dummySeq() in this way:

// var seq = generator(dummySeq);
// seq.next() ==> 'dummy'
// seq.next() ==> 'dummy'
// seq.next() ==> 'dummy'
// ....

// 💡 SOLUTION:

function generator(sequencer, ...a) {
    let firstFunc = sequencer(...a);
    return {
      next() {
        return firstFunc();
      },
    };
  }
  
  function dummySeq() {
    return function () {
      return "dummy";
    };
  }
  
  function factorialSeq() {
    let i = -1;
    let lastValue = 1;
    let finalValue = 1;
    return function () {
      i++;
      if (i === 0 || i === 1) {
        return 1;
      }
      finalValue = i * lastValue;
      lastValue = finalValue;
      return finalValue;
    };
  }
  
  function fibonacciSeq() {
    let i = 0;
    let startValue = 0;
    let secondValue = 1;
    let finalValue = 0;
  
    return function () {
      i += 1;
      if (i === 1) {
        return 1;
      }
      finalValue = startValue + secondValue;
      startValue = secondValue;
      secondValue = finalValue;
  
      return finalValue;
    };
  }
  
  function rangeSeq(start, step) {
    let i = -1;
    let finalValue = start;
    return function () {
      i++;
      if (i === 0) {
        return finalValue;
      }
      finalValue += step;
      return finalValue;
    };
  }
  
  function primeSeq() {
    let numi = 2;
    let status = false;
  
    return function () {
  
      if (numi === 2) {
        numi++
        return 2;
      }
      if (numi === 3) {
        numi++
        return 3;
      }
  
      while (!status) {
        numi++;
        let index = Math.ceil(Math.sqrt(numi));
        for (let i = 2; i <= index; i++) {
          if (numi % i === 0 && numi !== i) {
            break;
          }
          if (i === index) {
            status = true;
          }
        }
      }
      status = false
      return numi;
    };
  }
  
  function partialSumSeq(...massiv) {
    let sum = 0
    let i = 0;
    return function (){
      if (massiv.length === i) {throw new Error('End of sequence error expected')}
      sum+=massiv[i]
      i++
  
      return sum
  
    }
  }
  
  var seq = generator(partialSumSeq,-1,4,2,5);
  console.log(seq.next());
  console.log(seq.next());
  console.log(seq.next());
  console.log(seq.next());
  console.log(seq.next());
  console.log(seq.next());
  console.log(seq.next());
  console.log(seq.next());
  console.log(seq.next());
  console.log(seq.next());
  