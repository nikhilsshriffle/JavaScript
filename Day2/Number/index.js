let a = 10;
let b = '5';
console.log(a/b) 
// it gives number

let c = "nikhil"
console.log(a/c)
console.log(c/a)
console.log('typeof NaN',typeof NaN)

let str = "Ni12k345hil6";
let stroutput =""
let NoOutput = ""
for (let i of str) {
  if(isNaN(i)) {
    stroutput = stroutput + i;
  }

  else {
    NoOutput =NoOutput + i;
  }
}
console.log("stroutput",stroutput)
console.log("NoOutput",NoOutput)

