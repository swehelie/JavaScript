// kelvin is a constant value
const kelvin = 0;
// celsius is 273 less than kelvin
let celsius = kelvin - 273;
//f = c * (9/5) + 32
let fahrenheit = Math.floor(celsius * (9/5) + 32);
// round down temp
console.log("The temperature is " + fahrenheit + " degrees Fahrenheit.");