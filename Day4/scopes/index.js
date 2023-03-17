function exampleFunction() {
  const x = "declared inside function"; // x can only be used in exampleFunction
  console.log("Inside function");
  console.log(x);
}
// if access x outside the function its given array
// console.log(x);

const x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log("Inside function");
  console.log(x);
}

console.log("Outside function");
console.log(x);

let a =4;
function scopesforlet() {
  let a = 5;
  console.log(a)
}
console.log(scopesforlet())
console.log(a)

var v =4;
function scopesforvar() {
  var v = 5;
  console.log(v)
}
console.log(scopesforvar())
console.log(v)

// {
//   let r= 6;
// }
// console.log(r)  
