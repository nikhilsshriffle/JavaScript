 
//  closure = we can call the inner function inside outer function with help of lexical scope we can easily access the 
//  variables in innner function 
function overalldata() {
  return function outer() {
     let profile = 'React Developer'
   return function inner(name,id) {
      return `EMPLOYEE NAME :${name} \n EMPLOYEE ID ${id} EMPLOYEE PROFILE ${profile}`
   }
 }
}


console.log('hello')
// const detailsall =  overalldata()
const total = overalldata()
const maindetails = total()
console.log(maindetails( 'Nikhil',8 ))