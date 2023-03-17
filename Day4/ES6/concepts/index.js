// Destrucring

console.log('Destructuring')
const obj = {id:56,fullname:'ronak',marks:undefined}

const {fullname:n,marks:totalmarks = 94} =obj

console.log('name',n)
console.log('totalmarks',totalmarks)


// spread operators
console.log('spread operator')
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