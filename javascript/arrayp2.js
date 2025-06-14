const heroes =['Superman', 'Batman', 'Iron Man']
const powers = ['Flight',  'Genius Intellect']

// heroes.push(powers);
// console.log(heroes);
// console.log(heroes[3][0]); // Accessing 'Flight' from the nested array
// console.log(heroes[3][1]); // Accessing 'Genius Intellect' from the nested array

let combine= heroes.concat(powers);
console.log(heroes); // Original array remains unchanged
console.log(combine); // New array with combined elements

// Using spread operator to combine arrays
let combinespread =[...heroes,...powers];
console.log(combinespread); 

const anotherArr=[1,2,[3,[4,5,6],8,[9,10]]];
// Flattening the nested array using flat method
const flatArr = anotherArr.flat(Infinity); 
console.log(flatArr); // Output: [1, 2, 3, 4, 5, 6, 8, 9, 10]

// Checking if a variable is an array
console.log(Array.isArray(heroes)); // true
console.log(Array.isArray('Hello')); // false

// Creating an array from different data types
console.log(Array.from('Hello')); // Converts string to array: ['H', 'e', 'l', 'l', 'o']
console.log(Array.from({name: 'John', age: 30})); // Creates an array from the object's values: ['John', 30]

//
let score1 =100;
let score2 = 200;
let score3 = 300;
// Creating an array using Array.of
let scores = Array.of(score1, score2, score3);