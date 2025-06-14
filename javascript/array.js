const myarray = [1, 2, 3, 4, 5];  //resizeable ,mixed data types
console.log(myarray[0]); // Access the first element of the array

//array methods
console.log(myarray.length); // Get the length of the array

myarray.push(6); // Add an element to the end of the array
console.log(myarray); // Output: [1, 2, 3, 4, 5, 6]

myarray.pop(); // Remove the last element of the array
console.log(myarray); // Output: [1, 2, 3, 4, 5]

myarray.unshift(0); // Add an element to the beginning of the array
console.log(myarray); // Output: [0, 1, 2, 3, 4, 5]

myarray.shift(); // Remove the first element of the array

console.log(myarray.includes(3)); // Check if the array includes the value 3, Output: true
console.log(myarray.indexOf(3)); // Get the index of the value 3, Output: 2

let newarr= myarray.join(); // Join the array elements into a string
console.log(myarray)
console.log(newarr); // Convert the array to a string, Output: "1,2,3,4,5"
console.log(typeof newarr); // Output: string

const myn1= myarray.slice(1, 3); // Get a slice of the array from index 1 to 3 (exclusive)
console.log('slice' ,myn1); // Output: [2, 3]
console.log(myarray); // Output: [1, 2, 3, 4, 5]

const myn2= myarray.splice(1, 3); //inclusive
console.log('splice', myn2); // Output: [2, 3, 4]
console.log(myarray); // Output: [1, 5]
//splice can change the original array(remove splice elements) while slice does not