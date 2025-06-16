let x=40;// global scope
if(true){
    let x = 10;
    const y = 20;
    //var z = 30; // var is function scoped or globally scoped
    console.log(x); // Output: 10, block scoped variable x
}
// console.log(x); // ReferenceError: x is not defined
// console.log(y); // ReferenceError: y is not defined
//console.log(z); // 30, var is function scoped or globally scoped

console.log(x); // Output: 40, global x is accessible here

function one(){
    const email="some@gmail.com"
    function two(){
        channel="youtube";
        console.log(email)//email is global for fun two
    }
   // console.log(channel); 
   two();
}
one();

console.log(addone(6))//access func before declaration
//function declaration
function addone(num){
    return num +1;
}
//addone(6);


//addtwo(5)//error   cannnot access before declaration
//func declare and store in var
const addtwo =function(num){
    return num + 2;
}
addtwo(5);