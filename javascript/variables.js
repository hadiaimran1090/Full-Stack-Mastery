const accountId=1234;//value lock
let accountEmail="hadia.imran@example.com";
var accountPassword="hadia1234";
accountcity="Karachi";
let accountState; //variable declared but not initialized

//accountId=2; not allowed as accountId is a constant
accountEmail="hadia@gmail.com";
accountPassword="abc123"; 
accountcity="Lahore"; 
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountcity, accountState]);//show data in table format

// we used const and let to declare variables
// const is used for constants, 
// let is used for variables that can change
//var is not used because of block scope and function scope issues