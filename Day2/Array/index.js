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


// shift the array remove first elment of array
let arr_shift = a.shift()
console.log('arr_shift',arr_shift)
console.log('a',a)

// unshift the array add element in 0 index
let arr_unshift = a.unshift(5)
console.log('arr_unshift',arr_unshift)
console.log('a',a)

// indexOf find index of array 
let arr_index = a.indexOf(3)
console.log('arr_index',arr_index)
console.log('a',a)

a.push(2);

// lastindexOf of the array
let arr_lastindexOf = a.lastIndexOf(2)
console.log('arr_lastindexOf',arr_lastindexOf)
console.log('a',a)


// toString() this method convert array in to string
let arr_toString = a.toString();
console.log('arr_toString',arr_toString);
console.log('a',a)  

// delete the array element 
let arr_delete = ['a','b','c','d','e']
delete arr_delete[0]
console.log('arr_delete',arr_delete)

// Concat the array
let first_arr = [1,2,3,4]
let second_arr = [5,6,7,8]
let concat_arr = first_arr.concat(second_arr)
console.log('concat_arr',concat_arr)

// Sort the array 
let unsort_arr = [8,1,3,2,6,4,5,7]
let sorted_arr = unsort_arr.sort()
console.log('sorted_arr',sorted_arr)