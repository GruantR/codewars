//https://www.codewars.com/kata/zero-plentiful-array/train/javascript

// 📌 DESCRIPTION:

// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters

// 💡 SOLUTION:

function kebabize(str) {
    let target = 'qwertyuiopasdfghjklzxcvbnm'.split('');
    let arr = str.split('').map(item => target.includes(item.toLowerCase()) ? (item === item.toLowerCase() ? item : '-' +item.toLowerCase()) : '').join('');
    if (arr[0] === '-') {arr = arr.slice(1)};
    return arr
  }
  console.log(kebabize('A!bstractSingletonProxyFactoryBean'));