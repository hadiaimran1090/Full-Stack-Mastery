let score =400;
console.log(score); 
let balance = new Number(100.0000); //explcitly telling JS that this is a number object
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2)); // Format number to 2 decimal places
//
let newbalance =374.999;
console.log(newbalance.toPrecision(4));// Format number to 4 significant digits

const hundered = 1000000;
console.log(hundered.toLocaleString()); // Format number with locale-specific separators
console.log(hundered.toLocaleString('en-US')); // US locale 

//************MATHS*************** */
//math is a built-in library in JavaScript that provides mathematical constants and functions
console.log(Math);
console.log(Math.abs(-10)); // Absolute value
console.log(Math.round(4.7)); // Round to nearest integer
console.log(Math.ceil(4.1)); // Round up to nearest integer
console.log(Math.floor(4.9)); // Round down to nearest integer
console.log(Math.max(10, 20, 30)); // Maximum value
console.log(Math.min(10, 20, 30)); // Minimum value

console.log(Math.random()); // Random number between 0 and 1
console.log(Math.floor((Math.random()*10)+1));// Random number between 1 and 10

const min =10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1)+min));// Random number between min and max (inclusive)