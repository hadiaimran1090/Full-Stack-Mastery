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