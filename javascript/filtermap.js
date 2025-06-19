const num=[1,2,3,4,5,6,7]
const value=num.filter((val)=>
    {
        return val>5
    })    //same as forEach  but it return values.....filter contains call back func
console.log(value)

const newnum=[]
num.forEach((num)=>{
 if(num>4){
    newnum.push(num)
 }
})
console.log(newnum)


//************************BOOK EXAMPLE***************** */
const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction"
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Classic"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1926,
    genre: "Classic"
  }
];

let  userbooks=books.filter((bk)=>{
    return bk.genre==="Classic"&&bk.year==1925})
console.log(userbooks)

//**************map */

// const numbers=[1,2,3,4,5,6,7,8,9,10]
// const newnumb=numbers.map((num)=>{
//    return num=num+10
// })

// console.log(newnumb)

//**************************chaining ********************/
const numbers=[1,2,3,4,5,6,7,8,9,10]
const newnumb=numbers.map((num)=>{return num*10}).map((num)=>{return num+1}).filter((num)=>{return num>=40})

console.log(newnumb)

//****************************reduce************** */

const mynumb=[1,2,3,4]
const total =mynumb.reduce((acc,currval)=>{
     console.log(`accumulator:${acc},current value:${currval}`)
     return acc+currval
},0)//accumulator starts with 0

console.log(total)