//https://www.codewars.com/kata/656e4602ee72af0017e37e82/train/javascript

// 📌 DESCRIPTION:

// The cuckoo bird pops out of the cuckoo clock and chimes once on the quarter hour, half hour, and three-quarter hour. At the beginning of each hour (1-12), it chimes out the hour. Given the current time and a number n, determine the time when the cuckoo bird has chimed n  times.

// Input Parameters:
// initial_time - a string in the format "HH:MM", where 1 ≤ HH ≤ 12 and 0 ≤ MM ≤ 59, with leading 0’s if necessary.
// n - an integer representing the target number of chimes, with 1 <= n <= 200.

// Return Value: The time when the cuckoo bird has chimed n  times - a string in the same format as initial_time.

// If the cuckoo bird chimes at initial_time, include those chimes in the count. If the nth chime is reached on the hour, report the time at the start of that hour (i.e. assume the cuckoo finishes chiming before the minute is up).

// Example: "03:38", 19   should return "06:00".
// Explanation: It chimes once at "03:45", 4 times at "04:00", once each at "04:15", "04:30", "04:45", 5 times at "05:00", and once each at "05:15", "05:30", "05:45". At this point it has chimed 16 times, so the 19th chime occurs when it chimes 6 times at "06:00".

// Source: International Collegiate Programming Contest, North Central North American Regional, 2023.

// 💡 SOLUTION:

function cuckooClock(inputTime, chimes) {
 
    let hourse = Number(inputTime[0].slice(0,2))
    let minute = Number(inputTime[0].slice(3,5))
    let counter = chimes;
  
  if (minute%15 === 0 && minute !== 0) {counter--}
  if (minute === 0) {counter -= hourse}
  
  while (counter>0) {
      if (minute%15 !== 0) {
        minute = Math.floor(minute/15)*15;
      };
        minute +=15
        
      
      if (minute === 60) {
        hourse+=1;
        if (hourse === 13) {hourse = 1}
        minute = 0;
       counter -= hourse;
      }
      else{counter--}
  
  
    }
  
  
  let arar = [hourse.toString().length === 1 ? 0+hourse.toString():hourse,minute.toString().length === 1? 0+minute.toString():minute].join(':')
  return arar
  }
  console.log(cuckooClock(["08:17"],200))