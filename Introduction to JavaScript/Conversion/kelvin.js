// This holds the constant value of kelvin
const kelvin = 293;
// This converts the kelvin to celsius by subtracting 273 to the kelvin
let celsius = kelvin - 273;
// Converts to fahrenheit
// Get rid of decimals
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degress Fahrenheit`);
