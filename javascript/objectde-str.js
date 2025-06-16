const course ={
    courseName: "JavaScript Basics",
    duration: "4 weeks",
    courseInstructor: "John Smith",
}
//destructuring the object
//course.courseInstructor
const {courseInstructor:instructor } = course;
console.log(instructor); // Output: John Smith

const{courseName:name, duration} = course;
console.log(name); 
console.log(duration); 

//Apis --- we get data from APIs in the form of objects and arrays(of objects) in jason format
// {
//     "name": "John Doe",
//     "age": 30,
//     "location": "New York"
// }

// [
//     {},
//     {},
//     {}
// ]

//jason formatter is a tool that is used to understand the jason format