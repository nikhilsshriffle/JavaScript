// Three ways to declare variables
// 1 let 2 var 3 const 

console.log('var variable')
// 1 var variable
var x = 2;
console.log("Using var variable outside the function",x);

console.log("Using var variable inside function x",x)
function checkfirstvariable() {
  x = 3;
  console.log("Using var variable reasign x value without intialize",x)
} 

console.log(checkfirstvariable())
console.log("x",x)

// 2 Let variable
console.log('let variable')
let z = 2;
console.log("Using let variable outside the function",z);
function checksecondvariable() {
  let z= 3;
  console.log("Using let variable reasign z value",z)
} 
console.log(checksecondvariable())
console.log("z",z)

// 2 const variable
console.log('const variable')
const b = 2;
console.log("Using const variable outside the function",b);
function checkthirdvariable() {
  console.log("b inside function",b)
  const  d= 4;
  console.log("Using const variable reasign d value",d)
} 
console.log(checkthirdvariable())
console.log("b",b) 
console.log("d",d); // throw error