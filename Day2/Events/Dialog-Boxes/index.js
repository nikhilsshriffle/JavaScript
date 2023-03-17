

function handleconfirm() {
  let a = prompt('Enter your Name')
  //  alert('alert use for alert',a)
   let retVal = confirm("Its your right name");
   if(retVal == true ) {
      document.write (a);
      // return true;
   } else {
      alert('Right Your Correct Name')
      return handleconfirm();
   }
  // console.log('b',b)
}   
