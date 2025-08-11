// Object with a Symbol (***Interview Q)
const sh= Symbol("key1");
console.log(typeof sh)
const a={
  name:'shrav',
  "Full name":'shravani',
  age: 21,
  ['sh'] :"key1",
  myarr: [1,2,3]
}
console.log(a)
console.log(a["Full name"])
console.log(typeof ("full name"))

// Also can be use with this too[''] and . operator but for full name it is enclosed in double quotes "" so that must be used with [] only it cannot be accessed with dot operator
console.log(a['name'])
console.log(a.name)
console.log(typeof a["name"])

//console.log(a['sh']) not coming output undefined 
console.log(a['sh'])

console.log(typeof a['sh']) //string

const user= new Object()
user.id=123
console.log(user)
user.name='Ram'
console.log(user)
//Object.freeze(user) change to id 546 it works
user.id=546
console.log(user)

user.myfun=function(){
  console.log('My function inside Object')
}
console.log(user)
console.log(user.myfun) //if not used'()' whole function is executed with syntax 
console.log(user.myfun())

user.myfun2=function(){
  console.log(`Hello ${user.name}`)
}
console.log(user.myfun2())

//Nested Objects

const myobj={
  name:'Sita',
  age:22,
  address:{
    State:'UP',
    Country:'India',
    pincode:500201
  }
}
console.log(myobj)
console.log(myobj.address.pincode)

//Object.assign()
let target={
  a:50,
  b:100
}
console.log(target)


let source={
  b:15,
  c:20
}
console.log(source)
const newTarget=Object.assign(target,source)
console.log(newTarget)

const newSource=Object.assign(source,target)
console.log(newSource)

if(target===newTarget) {
 console.log('Equal Target')
}
console.log("Change to old Target:",target)


if(source===newSource) {
  console.log('Equal Source')
}
console.log("Change to old Source:",source)

let obj1={1:'a' ,2:'b'}
let obj2={3:'a' ,4:'b'}
let obj3={5:'a' ,6:'b'}
const obj4={obj1,obj2,obj3}
const objnew=Object.assign(obj1,obj2,obj3)
console.log(obj1)//same output for obj1 and obj because the assign has change the values of the target and the returned target
console.log(objnew)
console.log(obj4)


let o ={obj2,...obj3};// the three dots are called rest operator and output: first obj3 will come followed by the obj2 elements
console.log(o);

let o2 ={obj1,...obj2};
console.log(o2);

let o3 ={obj3,...obj2};
console.log(o3);

console.log(Object.keys(obj1)) // to get all the key values which you have given
console.log(Object.values(obj1)) // similarly for values
