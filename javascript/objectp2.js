//object from constructor =>singleton object
const tinderUser = new Object();
// Adding properties to the object
tinderUser.name = "John Doe";
tinderUser.age = 28;
tinderUser.isActive = true;
tinderUser.interests = ["Traveling", "Photography", "Cooking"];

console.log(tinderUser); // Output the tinderUser object
console.log(Object.keys(tinderUser)); // Output: ['name', 'age', 'isActive', 'interests']
console.log(Object.values(tinderUser)); // Output: ['John Doe', 28, true, ['Traveling', 'Photography', 'Cooking']]
console.log(Object.entries(tinderUser)); // Output: [['name', 'John Doe'], ['age', 28], ['isActive', true], ['interests', ['Traveling', 'Photography', 'Cooking']]]
console.log(tinderUser.hasOwnProperty('name')); // Output: true

const regularUser = {
    email: "someemail@example.com",
    fullname: {
       userFullname: {
              firstName: "Jane",
              lastName: "Doe"
       }
    }
};
//console.log(regularUser.fullname.userFullname.firstName); // Accessing nested object property

const obj1 = { 1: "one", 2: "two" };
const obj2 = { 3: "three", 4: "four" };
const obj4 = { 5: "five", 6: "six" };
//combine
const obj3=Object.assign({},obj1,obj2,obj4)
//console.log(obj3);

//by using spread operator
const obj5 = { ...obj1, ...obj2, ...obj4 };
//console.log(obj5); // Output: { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six' }

//********obj from databases comes in array  so array of object is */

const Users =[
    {
        id: 1,
        name: "Alice",
        age: 30
    },
    {
        id: 2,
        name: "Bob",
        age: 25
    },
    {
        id: 3,
        name: "Charlie",
        age: 35
    }
]

// Accessing properties of objects in the array
console.log(Users[0].name); // Output: Alice
console.log(Users[1].age); // Output: 25