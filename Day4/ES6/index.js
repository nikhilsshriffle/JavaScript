// Destrucring

console.log('Destructuring')
const obj = {id:56,fullname:'ronak',marks:undefined}

const {fullname:n,marks:totalmarks = 94} =obj

console.log('name',n)
console.log('alias')
console.log('totalmarks',totalmarks) 


// spread operators
console.log('Spread Operator')
let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]
console.log("concat two array by spread operator",[...arr1,...arr2])

function numbers(a,b,c,e) {
  console.log(a,b,c,e)
}

console.log(numbers(...arr1))

// rest operators 
console.log('rest operator')
function addnumbers(...arr) {
  let sum = 0
  for (let i of arr) {
    sum+=i
  }
  return sum
}
console.log(addnumbers(5,6,7,9,10))


// let arrnumbers = [7,8,9,10,11,12,13,14]
// console.log('arrnumbers.find(8)',arrnumbers.find(function(8,arrnumbers)))

console.log('Template literals')
const firstObj = {
  id:5,
  first_name:'naman',
  last_name:'sinha',
  details: function() {
    console.log('outer',this)
    return function() {
      console.log('inner',this)
      return `Name ${this.first_name} ${this.last_name}`
    }
  }
}

const totaldetails = firstObj.details()
console.log('details',totaldetails())
