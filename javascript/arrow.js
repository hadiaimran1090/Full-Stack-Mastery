const user = {
    name:"hadia",
    price:100,
    welcomeMsg:function(){
        console.log(`welcome ${this.name} to our store`);
        console.log(this)
    }
}
user.welcomeMsg();
// user.name="anika";
// user.welcomeMsg();
console.log(this);//empty object


//example 
const person = {
  name: "Hadia",
  regularFunc: function() {
    console.log("Regular:", this.name);
  },
  arrowFunc: () => {
    console.log("Arrow:", this.name);
  }
};

person.regularFunc();  // Regular: Hadia  Regular function mein this us object ko point karta hai jis ne function ko call kiya ho.

person.arrowFunc();    // Arrow: undefined  Bahar wale scope ka this (lexical this) 



// function chai(){
//      let username="hadia";
//        console.log(this)
//     console.log(this.username);//undefined
// }
// chai();


//const chai = function (){
//     let username="hadia";
//  console.log(this)
//     console.log(this.username);//undefined
// }
// chai();

//arrow function 
const chai=()=>{
     let username="hadia";
   console.log(this)

}
chai();
//
const addtwo=(num1,num2)=>{
   return num1+num2;
}
console.log(addtwo(3,5))


//if there is only 1 statement not need to use { return}

const add2=(num1,num2)=> (num1+num2);
console.log(add2(3,5))

//arrow func
// ()=>{}
// ()=>()