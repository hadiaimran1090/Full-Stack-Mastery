// const user = {
//   username: "hadia",
//   loginCount: 8,
//   signedIn: true,

//   getUserDetails: function () {
//     console.log(`Username: ${this.username}`);
//   }
// };

// console.log(user.username);
// console.log(user.getUserDetails());


//*************** */ constructor
// const promise1 =new Promise();

function user(name,login){
  this.name=name;
  this.login=login;
  this.greetings = function(){
    console.log("welcome")
  }
  return this
}
const userone= new user("hadia",123)  //
const userTwo= new user("hania",1333) // new instance 
console.log(userone)
console.log(userTwo)