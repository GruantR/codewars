//https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

// 📌 DESCRIPTION:




// 💡 SOLUTION:

function wave(str){
  let arr = (str+' ').repeat(str.length).trim().split(' ')
  return arr
  .map((item,index)=> item.slice(0,index) + (item[index] === ' ' ? '' : item[index].toUpperCase()) +item.slice(index+1))

}
console.log(wave('hello'))

