
console.log('Promise All')
let Promise1 = new Promise(function(resolve, reject) {
  const inputvalue1 = parseInt(prompt('Enter First number between 0-5'))
  if (inputvalue1===5) {
    resolve('Right input')
  }
  else {
    reject('Wrong input')
  }
  });

  // Promise1.then((result)=>alert(result)).catch((err)=>alert(err))
  
  
  const Promise2 = new Promise(function(resolve,reject) {
    const inputvalue2 = parseInt(prompt('Enter Second Number between 0-5'))
    if (inputvalue2===3) {
      resolve('Right input')
    }
    else {
      reject('Wrong input')
    }
  })


// Promise2.then((result)=>alert(result)).catch((err)=>alert(err))

const Promise3 = new Promise(function(resolve,reject) {
  const inputvalue3 = parseInt(prompt('Enter Third Number between 0-5'))
  if (inputvalue3===2) {
    resolve('Right input')
  }
  else {
    reject('Wrong input')
  }
})


// Promise3.then((result)=>alert(result)).catch((err)=>alert(err))

Promise.all([Promise1, Promise2, Promise3]).then((values) => {
  console.log('Promise All',values);
}).catch(err=>console.log('Promise All err',err));


Promise.allSettled([Promise1, Promise2, Promise3]).then((values) => {
  console.log('Promise All Settled',values);
}).catch(err=>console.log('Promise All Settled err',err));


Promise.any([Promise1, Promise2, Promise3]).then((values) => {
  console.log('Promise Any',values);
}).catch(err=>console.log('Promise Any err',err));


Promise.race([Promise1, Promise2, Promise3]).then((values) => {
  console.log('Promise Race',values);
}).catch(err=>console.log('Promise Race err',err))
.finally(()=>console.log('Completed'))



