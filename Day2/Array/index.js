//  Here Learned Array and its methods

let a= [];
// Inside array we can easily store elements
// 1 String ,2 Number, 3 null, 4 undefined 
// Ways to declare the array 
a=[1,2,3,4]
let b =  new Array(1,2,3,4,5,6)

console.log("a",a)
console.log("b",b)
console.log('\n')

console.log('Access by particular index')
// By the Particular index Accessable 
console.log("a[2]",a[2]) 
console.log("a[3]",a[3])

// Length method
console.log('a.length',a.length)

// push method add element in last index of array
a.push(5)
console.log('a.push()',a)

// pop method remove element in last index of array
a.pop();
console.log('a.pop()',a)

// slice method : Slice the array by first to last index
console.log('a.slice(1,3)',a.slice(1,3));
console.log('a',a);

// splice method remove and replace  element in last index of array
console.log('a.splice(4,0,5,6,7,8',a.splice(4,0,5,6,7,8,9,10))
console.log('a',a);
console.log('a.splice(8,2)',a.splice(8,2))
console.log('a',a);

// filter the array by the condition
let d =a.filter(c=>c>4)
console.log('d',d)
console.log('a.filter(c=>c>4)',a.filter(c=>c>4))
console.log('a',a)

// filter the array by the condition
let e =a.map(c=>c>4)
console.log('e',e)
console.log('a.map(c=>c>4)',a.map(c=> c))
console.log('a',a)


