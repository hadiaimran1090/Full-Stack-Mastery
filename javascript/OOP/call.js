function SetUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)//call  this -->createuser
   // SetUsername(username)//call ho rha ha but ya apna this use kr rha ha isi liy foran destroy ho jata call k bad
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

/*Why .call(this, ...)?
 you tell SetUsername: “Run yourself and use my current this. */