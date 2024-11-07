// git reset --hard origin/main
//https://www.codewars.com/kata/5a03b3f6a1c9040084001765/train/javascript

// 📌 DESCRIPTION:

//Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

// 💡 SOLUTION:

function angle(n) {
    return ((n-2)*180)
  }
  console.log(angle(3))