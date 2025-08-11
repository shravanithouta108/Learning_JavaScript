//*********** FUNCTION
function simple(){
  console.log("here's my first function")
}
simple() // function call

function add(num1,num2){
  console.log(num1+num2);
}
add() //NaN
add(5,3) // 8
add('5') //5undefined
add(5)  //NaN
add('5'+'7') //57undefined
add(null,5) //5
add(5,null) //5
const result=add(5,3)
console.log('Result without return:',result) // undefined because the function does not return the value in result variable which is outside the function
function myfun(num1,num2){
  //without printing returning the value to the function 
return num1+num2 //undefined if we do not use the return keyword 
}
//console.log(myfun(2,5)) 
const output=myfun(2,9)
console.log(output)

function text (name){
    if(!name==''){
  return `Hello ${name} nice to meet you`
}
}
console.log(text(''))//Hello nice to meet you
console.log(text(5))
console.log(text('Ram'))
console.log(text())//"undefined" output after if condition, is there is no if condition then "hello undefine makes to meet you"

//To give a Default value 
def()//no error here hosting does not work
function def(name='Sita'){
  console.log('Namaste', name)
}
def('Ram') //Ram is over written by Sita
def() //default value

//If Multiple values are given in a function called used rest operator in function definition parameter
function num(...n){
  return n
}
console.log(num(5,6,7))//5 is not used rest operator, if use rest operator i.e 3 dots before n "...n" [5, 6, 7]
function num2(val,val2,...n){
  return n
}
console.log(num2(5,6,7,8))//[7, 8]

//************ HOSTING it will only work if you store the function in a variable 
//host()//error output:"cannot access 'host' before initialization"
const host = function(){
  console.log('hosting')
}
host() //works normally 
