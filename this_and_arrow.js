//**********this keyword(References to current context) context means what our variables hold i.e value
const obj={
  name:'Shrav',
  age:20,
  myfun : function(){
    console.log(`Hello ${this.name}`) //prints only Hello if not used this keyword 
    console.log(this) //Here this refers to object 

  }
}
user.myfun() //function call
user.name='Manu'
user.myfun() //even it is const the value can change
console.log(this) //Since code is working inside browser i.e why window object ***imp

function one()
{
  console.log(this)
}
one() // Same Window Object

// Remember this keyword doesn't work inside function only works for objects
function two(){
  let name='Manju'
  console.log(name) //prints 
  console.log(this.name) //empty no error //sir got "undefined
  console.log(`GM,${this.name} hwr` ) //GM hrw
}
two()
// Why not to used this and arrow keyword together 
//simply remove function word and after parenthesis place an arrow => equal and greater than operator together 

const my =() => {
    let name='Manju'
    console.log(`this: ${this}`)
    console.log(`this.name: ${this.name} `) 
}
my() //no change

//********arrow keyword
//Syntax ()=>{} also u can hold this in a variable 
const myarrow= () => {
  return `hello`
}
console.log(myarrow()) //Hello

// () => {"Arrow"} //error "Malformed arrow function parameter list"

const add1= (n1,n2) =>{
  return n1+n2 //Explicit return 
}
console.log(add1(3,6)) //9

//In the above add1 we can remove "{}" Curly braces and "return type" by default it returns know as 'Implicity' which is shown below add2
const add2= (n1,n2) => n1+n2 //Implicit
console.log(add2(3,6)) //9


const add3= (n1,n2) => (n1+n2)
console.log(add3(3,6)) //9

const mynamein_arrow = (n1,n2) => { name: 'Shravani'}
console.log(mynamein_arrow(7,6)) //undefined
//to return object in implicit we need to add parenthesis ()
const mynamein_arrow2 = (n1,n2) => ( { name: 'Shravani'} )
console.log(mynamein_arrow2(7,6)) //output: Object{ name: "Shravani"} 
