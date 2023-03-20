// Async-await : With help of async await we Reduce the  then Chaining 
async function fetchdata() {
    console.log('Check Function')
      await fetch('https://dummyjson.com/products')
           .then(response =>  response.json() )
           .then(res=> console.log('res', res.products))
 }
 console.log('data', fetchdata())
