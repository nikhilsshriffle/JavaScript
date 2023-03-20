let formDetails = {}

function handlechange(event) {
  formDetails = {...formDetails, [event.target.name]:event.target.value}
  console.log('formDetails',formDetails)
}
console.log('formDetails123',formDetails)

function handleSubmit(event) {
  if (formDetails.first_name === null ) {
    document.querySelector('input').style.background ="red"
  }
}
