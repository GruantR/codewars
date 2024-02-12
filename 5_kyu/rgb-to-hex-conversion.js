//https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

// 📌 DESCRIPTION:
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

// 💡 SOLUTION:

function rgb(r, g, b) {
    return Array.from(arguments).map(item => {
      if (item < 0){item = 0}
      if (item > 255){item = 255}
      if (item.toString(16).toUpperCase().length === 1)  {
        return '0'+ item.toString(16).toUpperCase()
      }
    else {
      return item.toString(16).toUpperCase()
    }}).join('');
  }
  console.log(rgb(11,9,117));
  