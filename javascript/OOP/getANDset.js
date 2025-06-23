class Person {
  constructor(name) {
    this._name = name;  
  }

  // Getter
  get name() {
    return this._name.toUpperCase(); // always return in uppercase
  }

  // Setter
  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;   // underscore means "private-like"
    } else {
      console.log("Name cannot be empty");
    }
  }
}

// Create object
const person = new Person("Hadia");

console.log(person.name); // HADIA (uses getter)

person.name = "Sara";     // uses setter
console.log(person.name); // SARA

person.name = "";         // ❌ Invalid update
// Output: Name cannot be empty
