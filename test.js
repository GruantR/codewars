// git reset --hard origin/main
//https://www.codewars.com/kata/58b38256e51f1c2af0000081/train/javascript

// 📌 DESCRIPTION:

// 💡 SOLUTION:

function generator(sequencer,...a) {
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
  let finalValue = start
  return function(){
    i++;
    if (i === 0) {return finalValue}
    finalValue +=step
    return finalValue
  }
}

function primeSeq() {
let index = 1
return function () {
  index++
  if (index === 2) {return 2}
  if (index === 3) {return 3}
  let pusk = false;
  while (!pusk) {
    index+=1
    for (let i = 2; i<=Math.ceil(index/2); i++) {
      if (index % i === 0) {break} 
      if (i === index) {
        pusk = true;
        break
      }
    }
    
    return index

  }
}
}



var seq = generator(primeSeq)
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
console.log(seq.next());
console.log(seq.next());
console.log(seq.next());

