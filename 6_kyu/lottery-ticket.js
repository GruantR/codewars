//https://www.codewars.com/kata/lottery-ticket/train/javascript
// 📌 DESCRIPTION:

// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.

// 💡 SOLUTION:

function bingo(ticket, win){
    return ticket
    .map(miniArr => miniArr[0].split('').some(item => item.charCodeAt(0) === miniArr[1]))
    // разбиваем строки в подмассивах на символы, сравниваем код символов с числом в подмассиве, если есть хоть одно совпадение возвращаем true
    .reduce((acc,value) => acc+ (value ? 1:0),0) === win ? 'Winner!':'Loser!'
    // суммируем колличество подмассивов вернувших true, и сравниваем его со значением win из услович
    }
  console.log(bingo([["DRBISXAT",82], ["BYXSJ",85], ["TXD",73], ["JOEZDHQE",74], ["MFWZEK",77], ["LXSRHKUB",65], ["FDY",76], ["HRDWKVP",86], ["ALWPVU",66]], 4))
  
  
  