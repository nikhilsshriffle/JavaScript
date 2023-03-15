const element = document.getElementById('btn');
const Inputfield = document.getElementById('textfield')

function display() {
  alert('Hello welcome click event')
  console.log('jsdijse');
}

element.addEventListener('click', display())

element.addEventListener('mouseover', function() {
  element.style.backgroundColor = 'red'

})

element.addEventListener('mouseout', function() {
  element.style.color = 'blue'
})

// Inputfield.addEventListener('change', function() {
//   console.log('change event')
// })

// alert('hELLO welcome')

// function handlechange() {
//   alert('chalooooooooo')
//   console.log('Hello Welcome')
//   // document.getElementById('btn').style ='blue'
// }

function handleblur(event) {
  event.target.style.width = "500px"
  console.log("event name")
  console.log("event target value")
}