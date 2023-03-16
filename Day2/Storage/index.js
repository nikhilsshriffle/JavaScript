let x = {id:1,name:'Nikhil'}
localStorage.setItem('y',JSON.stringify(x))

let z = localStorage.getItem('y')
console.log('z',z)

let a = JSON.parse(z)
console.log('a',a)
