//https://www.codewars.com/kata/59d727d40e8c9dd2dd00009f/train/javascript

// 📌 DESCRIPTION:
// You are given a (small) check book as a - sometimes - cluttered (by non-alphanumeric characters) string:

// "1000.00
// 125 Market 125.45
// 126 Hardware 34.95
// 127 Video 7.45
// 128 Book 14.32
// 129 Gasoline 16.10"
// The first line shows the original balance. Each other line (when not blank) gives information: check number, category, check amount. (Input form may change depending on the language).

// First you have to clean the lines keeping only letters, digits, dots and spaces.

// Then return a report as a string (underscores show spaces -- don't put them in your solution. They are there so you can see them and how many of them you need to have):

// "Original_Balance:_1000.00
// 125_Market_125.45_Balance_874.55
// 126_Hardware_34.95_Balance_839.60
// 127_Video_7.45_Balance_832.15
// 128_Book_14.32_Balance_817.83
// 129_Gasoline_16.10_Balance_801.73
// Total_expense__198.27
// Average_expense__39.65"
// On each line of the report you have to add the new balance and then in the last two lines the total expense and the average expense. So as not to have a too long result string we don't ask for a properly formatted result.

// Notes
// See input examples in Sample Tests.
// It may happen that one (or more) line(s) is (are) blank.
// Round to 2 decimals your calculated results (Elm: without traling 0)
// The line separator of results may depend on the language \n or \r\n. See examples in the "Sample tests".
// R language: Don't use R's base function "mean()" that could give results slightly different from expected ones.

// 💡 SOLUTION:

function balance(book) {
    //Создадим массив из списка, разделяя каждую запись на элементы массива
    let bookArr = book.split("\n");
  
    //Удалим из массива баланс и выведем его в отдельную переменную
    let balance = parseFloat(bookArr.shift());
  
    let startBalance = balance;
  
    let elemArr = bookArr.map((item) => item.split(" "));
  
    let target = "qwertyuiopasdfghjklzxcvbnm".split("");
  
    elemArr = elemArr.map((item, index) => {
      if (item[1]) {
        item[1] = item[1]
          .split("")
          .filter((item) => target.includes(item.toLowerCase()))
          .join("");
      }
      if (item[2]) {
        item[2] = +item[2]
          .split("")
          .filter((item) => item === "." || isFinite(item))
          .join("");
      }
      item[3] = "Balance";
      item[4] = Math.ceil((balance = balance - +item[2]) * 100) / 100;
      return item.join(" ");
    });
  
    let finalBalance = startBalance - balance;
    let expense = Math.ceil((finalBalance / elemArr.length) * 100) / 100;
    elemArr.unshift(["Original Balance:", startBalance].join(" "));
    elemArr.push(
      ["Total expense", Math.ceil(finalBalance * 100) / 100].join(" ")
    );
    elemArr.push(["Average expense", expense].join(" "));
    return elemArr.join("\n");
  }
  
  console.log(
    balance(`1000.00
  125 Market 125.45
  126 Hardware 34.95
  127 Video 7.45
  128 Book 14.32
  129 Gasoline 16.10`)
  );
  