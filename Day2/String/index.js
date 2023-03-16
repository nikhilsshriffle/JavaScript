// String
// Slice the str  
let str = 'abcdefghijklmnopqrstuvwxyz'
console.log('str.slice(2,7)',str.slice(2,7))
console.log('str',str)

// str 
let strone = 'ronak, ranveer, samaksh';
let substr = strone.substring(0,5);
console.log('substr',substr)

// length method
let str_length = str.length;
console.log('str_length',str_length);


// By trim method we remove the spaces 
let str2 = '  Nikhil  ';
let str_trim = str2.trim();
console.log('str_trim',str_trim)

// By padstart it gives the spacing first
let str3 = 'My name is khan';
let str_padstart = str3.padStart(50);
console.log('str_padstart',str_padstart)

// replaceAll 
let str4 = 'My name is khan ,my fullname is Naman khan';
let str_replaceAll = str4.replaceAll('khan','sharma')
console.log('str4',str4)
console.log('str_replaceAll',str_replaceAll)

// replace 
let str_replace =  str4.replace('name','Name')
console.log('str4',str4)
console.log('str_replace',str_replace)

// charAt() string 
// let str_charAt = str4.charAt(0)
// console.log('str_charAt',str_charAt)

// toUpperCase()
let str_toUpperCase = str4.toUpperCase();
console.log('str_toUpperCase',str_toUpperCase)

//  toLowerCase()
let str5 = 'ABCDEFGHIJKLMNOPDFSNKFNLSKDNLSADDSLD';
let str_toLowerCase = str5.toLowerCase();
console.log('str_toLowerCase',str_toLowerCase )

// CharAt 
let str_charAt = str5.charAt(0)
console.log('str_charAt',str_charAt)


// split()  
let arr_split = str5.split('+');
console.log('arr_split',arr_split)
console.log('str5',str5)

// includes
let str_includes = str5.includes("D");
console.log('str_includes',str_includes)

// match 
let str_match = str5.match('ABCD')
console.log('str_match',str_match)

