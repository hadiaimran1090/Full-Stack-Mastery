// console.log(5 == 5); // true
// console.log(2>1)
// console.log(2<=1);

//we should  avoid 
console.log("2" == 2); 
console.log("02" >= 1); 

console.log("***********")
console.log(null>0);
console.log(null==0);
console.log(null>=0);

console.log("***********")
console.log(undefined==0)
console.log(undefined>=0)

//== and >= behave differently in js
// ==  don't convert types, it checks for value equality  2== "2" is true
// === does not convert types, it checks for value and type equality  2=== "2" is false
// >= converts types, it checks for value and type equality
// so that null == 0 is false,
//  but null >= 0 is true   null=>0   

//=== strict equality operator (no type conversion)
console.log("2" === 2); // false, because types are different