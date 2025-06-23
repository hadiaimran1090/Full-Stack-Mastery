function multiply(num){
    return num*5
}
multiply.power=2;//here func act as obj
console.log(multiply(5))
console.log(multiply.power)
console.log(multiply.prototype)

//*****************eg1***********func---->object */

//Every function has a special property called prototype.
//This property is used when you create objects using a constructor function with the new keyword.
function createUser(username, score) {
  this.username = username;
  this.score = score;
}
//methods
createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`score is ${this.score}`);
};

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.increment(); // chai.score becomes 26
chai.printMe();   // Output: score is 26

//**********************QUESTION*********************** */

String.prototype.truelength=function() {
    console.log(`true length is ${this.trim().length}`)
}
let name="hadia    "
name.truelength()
"Anika".truelength()

//**********************func,arr,string------->*obj  */

let arr=[1,2,3,5]//arr

const user = {//obj
  name: "Ali",
  score: 50
};

Object.prototype.chai=function(){
    console.log("hello")
}
Array.prototype.Tea=function(){
    console.log("hello ....")
}

user.chai()
arr.Tea()

//****************************INHERITANCE********************************************** */
const users={
    name:"hadia"
}
const Teacher = {
makeVideo:true
}
const TeacherSupport = {
 isAvailable:true
}
const TA = {
fullTime:true,
__proto__:TeacherSupport  //inherit
}

Teacher.__proto__=users; //inherit

//modern syntax

Object.setPrototypeOf(TeacherSupport,Teacher)//inherit