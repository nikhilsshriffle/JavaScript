// We will learn all loops in one Example find with even 
// 1 for  
const arr = [1,2,3,4,5,6,7,8,9,10]

for (let i=0; i<arr.length; i++) {
  if(arr[i]%2 ===0) {
    console.log("Even No  normal for loop",arr[i]);
  }
}
console.log('\n')

for (let i in arr) {
  if(arr[i]%2 ===0) {
    console.log("Even No for in",arr[i]);
  }
}
console.log('\n')

for (let i of arr) {
  if(i%2 ===0) {
    console.log("Even No for of",i);
  }
}

console.log('\n')

let i = 0;
while (i<arr.length) {
  if(arr[i]%2 ===0) {
    console.log("Even No while loop",arr[i]);
  }
  i++;
}

console.log('\n')

do {
  if(arr[i]%2 ===0) {
    console.log("Even No do while loop",arr[i]);
  }  
  i++;
}
while (i < arr.length);  


