function myname(){
    //console.log("My name is Hadia");
}
myname();

// function add(a,b){
//     console.log(a+b);
// }
// const result = add(5,10);
// console.log(result); // undefined because function does not return anything


function add2(a,b){
    return a+b; // return statement will return the value to the caller
}
const result2 = add2(5,10);
//console.log(result2); // Output: 15

function login(username){
    if(!username){
        return "Please enter a username"; // if username is not provided, return this message
    }
    return `Welcome ${username}`; 
}
// console.log(login("Hadia")); // Output: Welcome Hadia
// console.log(login()); // Output: Please enter a username

//*************************func with objects */

//rest operator is used to collect all remaining argumnts 
 function calculatetotalprice(...items){
    return items;
 }
 console.log(calculatetotalprice(10,20,30,40)); // Output: [10, 20, 30, 40]

 //
 const user ={
    name : "Hadia",
    age: 20
 }
 function handleobject(anyobj){
    console.log(`Name: ${anyobj.name}, Age: ${anyobj.age}`);
    
 }
handleobject(user);

//another way to handle object
// handleobject({name: "Hadia", age: 20}); // Output: Name: Hadia, Age: 20

//function with array
arr=[1,2,3,4,5];
function handlearr(anyarr){
    return anyarr[1];

}
console.log(handlearr(arr)); // Output: 2

//another way to handle array
//handlearr([1,2,3,4,5]); // Output: 2