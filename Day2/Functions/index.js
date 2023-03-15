//  Here We Learned the functions three types of function 
//  1. Normal Function
//  2. Arrow Functin
//  3. Anonymous Function
//  4. IIMF



function add(a,b) {
  return `Addition of Two Numbers ${a + b}`;
}

console.log('\n');
const x = parseInt(prompt('Enter First Number'));
const y = parseInt(prompt('Enter Second Number'))
console.log("1.Normal Function")
console.log(add(x,y));

const subtruct = (a,b) =>`Subtraction of Two Numbers ${a - b}`; 
console.log("2. Arrow Function")
console.log(subtruct(x,y))

console.log("3. Anonymous Function");

const firstobj = {
  Employee_ID : 1,
  Employee_Name : 'Ranveer Singh',
  Employee_Details : function(profile) {
    console.log('this',this);
    return `EmployeeID : ${this.Employee_ID} EmployeeName :${this.Employee_Name} EmployeeProfile : ${profile}`
  }
}

console.log(firstobj.Employee_Details('Java Developer'))

( function() {
  return 'javascript'
})()



