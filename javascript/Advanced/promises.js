/*
A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.
It has three states:
Pending
Fulfilled (success)
Rejected (error)

const promise=new Promise(function(resolve,reject){

})

 */

//create
const promise1=new Promise(function(resolve,reject){

setTimeout(function(){
    console.log("async task completed")
    resolve() //connect with then()
},2000)

})

//consumed
promise1.then(function(){console.log("promise resolved 1")})


//***************eg2 *********************/

new Promise(function(resolve,reject){

setTimeout(function(){
    console.log("async task2 completed")
    resolve() //connect with then()
},2000)

}).then(function(){console.log("promise resolevd 2 ")})

//*****************eg3 *****************/

const promise3=new Promise(function(resolve,reject){

setTimeout(function(){
    resolve({user:"hadia", email:"hadia@gmail.com"}) //connect with then()
},2000)

})

//consumed
promise3.then(function(user){
    console.log(user)})

    //************************eg4***************************** */

const promise4=new Promise(function(resolve,reject){

    setTimeout(function(){
     let error =false;
     if(!error){
        resolve({username:"anika",password:"123"})
     }
     else{
        reject("Error occurs ")
     }
    },2000)
})

promise4.then(function(user){
    console.log(user)
    return user.username
})
.then(function(username){   //chaining 
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log("finally function resolved or reject")
})

//*************************eg5************************************* */

const promise5=new Promise(function(resolve,reject){

    setTimeout(function(){
     let error =true;
     if(!error){
        resolve({username:"javascript",password:"123"})
     }
     else{
        reject("Error occurs in js ")
     }
    },2000)
});

//we used async await insted of .then and .catch

async function  consumeprimise5(){
   try{    //.then
   const response =await promise5
   console.log(response)  
   }
   catch(error){     // .catch
     console.log(error)
   }
}

consumeprimise5()


//**********************************FETCH **************************************************************/

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()   //await
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()  //convert  and  return 
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))