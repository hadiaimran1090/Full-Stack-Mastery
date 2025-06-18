// ***************************for of loop
//["",""]
//[{},{}]
const arr=['1','2','3','4']
for (const i of arr) {
    console.log(i)  // i...>values print of arr
}

const greatings = "hello"

for (const str of greatings) {
    console.log(`char is : ${str}`);
}


//Map ....>object
//key value pairs
const map= new Map()
map.set("name","hadia")
map.set("age","19")
console.log(map);

// for (const key of map) {   //key and value(both) print in array
//     console.log(key)
// }

for (const [key,value] of map) {   //de structuring
    console.log(key,":=>",value)//separate print 
}


//objects
// const myobj = {
//     game1 : "NFS",
//     'game2' : "ludo"
// }
// //objects are not iterable by using for of loop


//****************For in */
//objects are iterable with forin loop
const obj = {
    js : 'jacascript',
    py: 'python'
}
for (const key in obj) {
   console.log(key,obj[key]) //keys
}

const arr1=['1','2','3','4']
for (const i of arr1) {
    console.log(i,arr1[i])   //i shows keys of arrays
}


//********************************for each loop */

const code=["cpp","oop","js","react"]

// code.forEach(function(item){               //funcion without name 
//     console.log(item)
// });

code.forEach((value,index,arr)=>{   //it takes value,index,arr from code array
   console.log(value,index,arr)
})

const mycode=[
    {
    language:"CPP"
    }
    ,
    {
         language:"OOP"
    }
]

mycode.forEach((val)=>{
   console.log(val)
})