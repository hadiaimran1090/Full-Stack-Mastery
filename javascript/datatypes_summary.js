/* 
JavaScript is a dynamically typed language. This means that variable types are determined at runtime,
 and you do not need to explicitly declare the type of a variable before using it.
 You can assign different types of values to a variable during its lifetime.
*/

/*
there are two main categories of data types in JavaScript:
1. Primitive data types (call by value)
2. non primitive data types (call by reference)

primitive data types(call by value)
- Number
- String
- Boolean
- Null
- Undefined
- Symbol
- BigInt(for large integers)
*/
const number = 42; // Number
const string = "Hello, World!"; // String
const boolean = true; // Boolean
const nullValue = null; // Null
const undefinedValue = undefined; // Undefined
const bigIntValue = 12345678901234567890n; // BigInt

const  id = Symbol("123"); // Symbol
const anotherId = Symbol("123"); // Symbol
console.log(id === anotherId); // false, because each Symbol is unique

/* non primitive data types (call by reference)
- Objects
- Arrays 
- Functions
*/
const heros = ["Hulk", "Thor", "Iron Man"];// Array

let myobject = {
    name: "hadia",
    age : 20,
    isStudent: true,
}; // Object

const myFunction =function(){
    console.log("Hello, World!");
}
//all non primitive data types are objects in JavaScript
console.log( typeof myobject);// obj =>object
console.log( typeof heros); //  array=>object
console.log( typeof myFunction); // function=>object function 
console.log( typeof nullValue);//null=>object


