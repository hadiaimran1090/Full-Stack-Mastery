console.log("*****conversion in number *****");
let score = "33";   
console.log(typeof score); //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //33

let score2 = "abc333";
let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2); //number
console.log(valueInNumber2);  //NaN => Not a Number when conversion fails

let score3 = null;
console.log(typeof score3); //object )
let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber3); //number
console.log(valueInNumber3); //0

let score4 = undefined;
console.log(typeof score4); //undefined
let valueInNumber4 = Number(score4);
console.log(typeof valueInNumber4); //number
console.log(valueInNumber4); //NaN

let score5 = true;
console.log(typeof score5); //boolean
let valueInNumber5 = Number(score5);
console.log(typeof valueInNumber5); //number
console.log(valueInNumber5); //1

 //*****conversion in to number */
//"33" => 33
//"abc333" => NaN
//null => 0
//undefined => NaN  
//true => 1
//false => 0
console.log("*****conversion in boolen *****");
let isloggedIn =1;
let isLoggedInBoolean = Boolean(isloggedIn);
console.log(typeof isLoggedInBoolean); //boolean
console.log(isLoggedInBoolean); //true

//1 => true
//0 => false
// ""=> false
 // "abc" => true


 console.log("*****conversion in string *****");
 let  value = 33;
 let valueInString = String(value);
 console.log(typeof valueInString); //string
 console.log(valueInString); // "33"