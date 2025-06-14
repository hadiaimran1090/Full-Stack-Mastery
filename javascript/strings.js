const name = "anika-khan"; // String literal
const greeting = new String("hello");//another way to create a string
const age = 20;

console.log(name + " is " + age + " years old"); // Concatenation
console.log(`hello my name is ${name} and I am ${age} years old`); // string interpolation (modern way)

console.log(greeting[0]);
console.log(greeting[1])
console.log(name[1]);

console.log(name.length); // Length of the string
console.log(name.toUpperCase()); // Convert to uppercase
console.log(name.toLowerCase()); // Convert to lowercase
console.log(name.charAt(3)); // Get character at index 3
console.log(name.indexOf('n')); // Get index of character 'n'

const newString =name.substring(0, 5); // Get substring from index 0 to 5
console.log(newString); // Output: anika

console.log(name.slice(-4, -1)); // Another way to get substring ..slice (-ve index)(exclusive of end index)
// counting from the end if index is negative 
console.log(name.replace('anika', 'nazia')); // Replace substring

let str = "  Hello World!  ";
console.log(str);
console.log(str.trim()); // Remove whitespace from both ends
console.log(str.trimStart()); // Remove whitespace from the start
console.log(str.trimEnd()); // Remove whitespace from the end

console.log(name.includes('anika')); // Check if 'anika' is present in the string

// Split the string into an array using  delimiter
console.log(name.split('-')); // Split the string into an array using '-' as a delimiter