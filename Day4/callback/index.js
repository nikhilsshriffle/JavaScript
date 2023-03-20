
function displayname(y) {
  console.log('y',y)
  alert(`Your Name is ${y}`)
}

function Enteryourname(fn) {
  const x = prompt('Enter Your Name');
      fn(x)
}
console.log(Enteryourname(displayname))

