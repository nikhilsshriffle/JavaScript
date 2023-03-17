// Way to Create The Object
// Objects

// By new keyword we can easily create Object

let x = new Object();
x.id ='1'
x.name ='Nikhil Solanki'

console.log(x)
console.log('by the . operator we can easily access',x.id)
console.log('by the . operator we can easily access',x.name)

const firstobj = {
  Employee_ID : 1,
  Employee_Name : 'Ranveer Singh',
  Employee_lang : 'English',
  Employee_Details : function(profile) {
    console.log('this',this);
    return `EmployeeID : ${this.Employee_ID} EmployeeName :${this.Employee_Name} EmployeeProfile : ${profile}`
  },
  get lang() {
    return this.Employee_lang
  }, 
}

console.log(firstobj.Employee_Details('Java Developer'))
console.log(firstobj.lang )

const person = {};
person.firstName = "ritik";
person.lastName = "roshan";
person.age = 50;
person.eyeColor = "blue"

console.log('person',person)
const y =person.age = 40;
console.log('y',y )

