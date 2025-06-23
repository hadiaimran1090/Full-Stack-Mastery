class user{
    constructor(name,email,password){
        this.name=name
        this.email=email
        this.password=password
    }
    encrpt(){
        return`${this.password}abc`
    }
}
const user1=new user("hadia","abc@gmail","12345")
console.log(user1.encrpt())

//************************inheritance*********** */
// Parent class (Base class)
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Child class (Derived class) inherits from Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks. It is a ${this.breed}.`);
  }
}

// Create objects
const dog1 = new Dog("Tommy", "Labrador");

dog1.speak(); // Output: Tommy barks. It is a Labrador.

//******************************STATIC */
//static methods belong to the class itself, not to the instances (objects) of that class.

class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }

  // Static method
  static register(name) {
    return new User(name);
  }
}

// Calling static method
// const user1 = User.register("Hadia");
// ❌ Invalid: user1.register() → will give error
user1.greet();  // Output: Hello, Hadia


