
let input = parseInt(prompt('Enter a day'));
switch (input) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
  default:
    day = "You choose Wrong number"
}
document.getElementById("demo").innerHTML = "Today is " + day;


// let x = parseInt(prompt('Enter a first Number'))
// let y = parseInt(prompt('Enter a  second Number'))
// let z = parseInt(prompt('Enter a  third Number'))

//   if(x>y && x>z) {
//     alert(`x is largest number ${x}`)
//     document.getElementById("demo1").innerHTML = "Largest Number is " + x;
//   }

//   else if (y>x && y>z) {
//     alert(`y is largest number ${y}`) 
//     document.getElementById("demo1").innerHTML = "Largest Number is " + y;
//   }

//   else {
//     alert(`z is largest number ${z}`)
//     document.getElementById("demo1").innerHTML = "Largest Number is " + z;
//   }
