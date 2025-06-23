const user={
    name:"hadia",
    rollNo:10
}
console.log(Object.getOwnPropertyDescriptor(user,"name"))

Object.defineProperty(user,'name',{
 value: 'hadia imran',
  writable: false,
  enumerable: true,
  configurable: true
})
console.log(Object.getOwnPropertyDescriptor(user,"name"))
