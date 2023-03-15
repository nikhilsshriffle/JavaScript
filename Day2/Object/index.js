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

const company = {
  developers :100,
  front_developers: null,
  backend_developers:30,
  set developers_stregth(strenght) {
    this.front_developers = strenght    
  }
}

console.log('comapny_keys',Object.keys(company))
console.log('comapny_values',Object.values(company))
console.log('comapny_enteries',Object.enter(company))

console.log('front_developers_before',company.front_developers)
company.developers_stregth = 20
console.log('front_developers_after',company.front_developers)