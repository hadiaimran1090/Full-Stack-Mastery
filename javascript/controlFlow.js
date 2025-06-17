//also called logic flow
//    = != > < >= <=   ===   !===
if(2==2){
    console.log("executed")
}

if(2==='2'){
    console.log("executed")
}

if(2!='3'){
    console.log("executed")
}

const temp =40;
if(temp<50){
    console.log("temp less than 50")
}
else
{
    console.log("temp greater than 50")
}

// const balance =1000;
// if(balance>800) 
// {
//     console.log("balance is greater than 800")
// }
// else if(balance>900)
// {
// console.log("balance is greater tha 900")
// }
// console.log("balnace is less than 400")




// const userloggedIn=true;
// const debitCard=true;
// const loggedInfromGoogle=false;
// const loggedInfromEmail=true;

// if(userloggedIn && debitCard){
//     console.log("welcome now you can buy anything")
// }
// if(loggedInfromGoogle || loggedInfromEmail){
//     console.log("hi ,allow to visit our website")
// }


const month=3;
switch(month){
    case 1:
    console.log("january");
    break;
    case 2:
    console.log("FEB");
    break;
    case 3:
    console.log("March");
    break;
    default:
        console.log("not matched")
        break;

}
const month1="March";
switch(month1){
    case "JAN":
    console.log("january");
    break;
    case "FEB":
    console.log("FEB");
    break;
    case "March":
    console.log("March");
    break;
    default:
        console.log("not matched")
        break;

}

//********falsy values */

// false, 0, -0, BigINt n,null,undefined,NaN, ""

//*************Truthy values */

//  "0" , 'false', " " ,[], {} , function(){}


// if(userEmail.length==0){
//     console.log("Array is Empty")
// }

const EmptyObj={
}
if(Object.keys(EmptyObj).length==0){   //array of keys of obj 
    console.log("obj is empty")
}

//******Nullish coalescing OPerator(??):   null undefined*/
///Returns the right-hand value only if the left-hand value is null or undefined.

let val1 ;
val1= 5 ?? 10
// let val2 = null ?? 6
let val2= null ?? 5 ?? 10
console.log(val2);


//***********Ternary operator */
// condition ? true : false

const price =900;
 price>800?console.log("price is greater"):console.log("price is less")