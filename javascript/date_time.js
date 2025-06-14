let mydate= new Date();// Create a new date object with the current date and time
console.log(mydate.toString()); 
console.log(mydate.toDateString()); // Get the date part as a string
console.log(mydate.toTimeString()); // Get the time part as a string
console.log(mydate.toISOString()); // Get the date in ISO format
console.log(mydate.toLocaleDateString()); // Get the date in local format
console.log(mydate.toLocaleTimeString()); // Get the time in local format

console.log(typeof mydate); // Check the type of the date object   // Output: object

console.log("************************")
let createdDate=new Date('2025-06-14')
console.log(createdDate.toString()); 
console.log(createdDate.toLocaleString()); // Get the date part as a string
console.log(createdDate.getTime()); // Get the timestamp in milliseconds since January 1, 1970


let timestamp = Date.now(); // Get the current timestamp in milliseconds  since January 1, 1970
console.log(timestamp); // Output: current timestamp in milliseconds

//convert into seconds
let seconds = Math.floor(timestamp / 1000); // Convert milliseconds to seconds  
console.log(seconds); // Output: current timestamp in seconds

let newDate= new Date();
console.log(newDate.getMonth()+1); // Get the current month (0-11, where 0 is January)+1 to make it 1-12
console.log(newDate.getDay()); 