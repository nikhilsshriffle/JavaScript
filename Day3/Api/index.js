 function fetchdata() {
  fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json())
   .then(response=>{ return response})
   console.log('data',response)
}