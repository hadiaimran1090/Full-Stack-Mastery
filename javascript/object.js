// Object literal  syntax
//singleton ------object from constructor    

const mysym=Symbol('mysym123');// Creating a symbol(unique )

// Creating an object using object literal syntax
const jsUser ={
    name:"John",
    age: 30,
    isActive: true,
    [mysym]: 'This is a symbol property',
    skills: ['JavaScript', 'React', 'Node.js'],
}
// Accessing object properties
console.log(jsUser.name)
console.log(jsUser['isActive']); // Using bracket notation
console.log(jsUser['age']);
console.log(jsUser[mysym]); // Accessing symbol property

// jsUser.age = 31; // Updating property value
// Object.freeze(jsUser); // Freezing the object to prevent further modifications
// jsUser.age = 32; // This will not change the age property
// console.log(jsUser); 

// Adding a new property (method) to the object
jsUser.greeting =function(){
    console.log("hello world");
}
jsUser.greetingtwo = function(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
console.log(jsUser.greeting()); // Calling the method
console.log(jsUser.greetingtwo()); // Calling the method