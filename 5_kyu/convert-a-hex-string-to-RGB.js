// https://www.codewars.com/kata/5282b48bb70058e4c4000fa7/train/javascript
// 📌 DESCRIPTION:
//When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

// Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
// Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
// Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

// Example
// "#FF9933" --> {r: 255, g: 153, b: 51}
// 💡 SOLUTION:

function hexStringToRGB(hexString) {
    let r =  parseInt(hexString.substring(1, 3),16);
    let g =  parseInt(hexString.substring(3, 5),16);
    let b =  parseInt(hexString.substring(5, 7),16);
     return {
       r:r,
       g:g,
       b:b,
     }
   }
   console.log(hexStringToRGB("FF9933"))