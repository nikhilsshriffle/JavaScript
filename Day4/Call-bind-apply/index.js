const employee = {
  first_name : 'param',
  last_name : 'sharma',
  fullname: function(city,country) {
    return `Full Name is ${this.first_name} ${this.last_name} ${city} ${country}`
  }
}

const person = {
  first_name : 'Narendra',
  last_name : 'sharma'
}

// Call Bind Apply

console.log('Person Details 1',employee.fullname.call(person))
// console.log('person Details 2', employee.fullname.apply(null,['Mumbai','Maharastra']))
// console.log('person Details 3', )


const EmployeeDetails = employee.fullname.apply(person,['Mumbai','India'])
console.log('EmployeeDetails',EmployeeDetails)

// Bind 
const Alldetails = employee.fullname.bind(person);
console.log('All Details',Alldetails())