

function details() {
  console.log('Hello Welcome')
  clearTimeout()
}

setTimeout(()=>{
  details()
},10000)




function display() {
  console.log('Hello Welcome')
}

const timer = setInterval(()=>{
  display()
},1000)

 function stopdisplay() {
    clearInterval(timer)
 }






