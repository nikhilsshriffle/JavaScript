// function validateForm(){
//   // let emailvalue =document.querySelector(input)
//   console.log('emailvalue')
// }
const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
function handlechange(event) {
  console.log('event',event.target.value)  
  if (regex.test(event.target.value)) {
    document.querySelector('input').style.background ='yellow';
  }
  else {
    document.querySelector('input').style.background = 'red';
  }
} 