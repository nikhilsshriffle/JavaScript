// Operators 
console.log("Operators", '\n ',"1.Arithmetic Operators")
// 1 Arithmetic Operators
let a = 4;

// Addition Operator + 
console.log("Addition Operator")
let b = 2;
console.log("a+b","operator+",a+b)

// Subtraction Operator -
console.log("Subtraction Operator")
console.log("a-b","operator-",a-b)

// Multiplication OPerator *
console.log("Multiplication operator")
console.log("a*b","operator *",a*b)

// Exponentiation Operator  
console.log("Exponentiation operator")
console.log("a**b","operator **",a**b)


// Exponentiation Operator  
console.log("Exponentiation operator")
console.log("a**b","operator **",a**b)

// Modulus (Division Remainder)
console.log("Modulus operator")
console.log("a%b","operator %",a%b) 

// Increment ++
console.log("Increment")
console.log('a++',a++);
console.log("a",a);

// Decrement --
console.log("Decrement")
console.log('b--',b--);
console.log('b',b,'\n');

// Assignment Operator
console.log("Assignment Operator");

//  assign Operator =
console.log("assign Operator")
let c = 6;
c=a
console.log('assign operator c=a =',c) 


// Addition Assignment Operator
console.log('Addition Assignment operator,+=	x += y	x = x + y');
//  +=	x += y	x = x + y
console.log("a+=b",a+=b)

// Substraction Assignment Operator
console.log('Substraction Assignment operator,-=	x -= y	x = x - y');
console.log("a-=b",a-=b)


// Multiplication Assignment Operator
console.log('Multiplication Assignment opera');
console.log('Multiplication Assignment operator,*=	x *= y	x = x * y');
console.log("a*=b",a*=b)

// Divide Assignment Operator
console.log('Divide Assignment opera');
console.log('Divide Assignment operator,/=	x /= y	x = x / y');
console.log("a/=b",a/=b)

// Modulus Assignment Operator
console.log('Modulus Assignment opera');
console.log('Modulus Assignment operator,%=	x %= y	x = x % y');
console.log("a%=b",a%=b)

// Exponential Assignment Operator
console.log('Exponential Assignment operator');
console.log('Exponential Assignment operator,**=	x **= y	x = x ** y');
console.log("a**=b",a**=b)


// Comparison Operators
console.log(' Comparison operator return boolean');
let E= 9;
let D = "9";
let N = 10;
console.log('1. Double Equal to operator E==D',E==D);
console.log('2. Triple Equal to operator E===D',E===D);
console.log('3 Not Equal to operator  E!=D',E!=D);
console.log('4 greater operator  E>N',E>N);
console.log('5 Less operator  E<N',E<N);
console.log('6 greater then equal to >=',E>=N)
console.log('7 less then equal to <=',E<=N);
console.log('ternary operator ?')
{E==9 ? console.log('right') : console.log('wrong')}

// Logical Operator 
console.log('Logical Operator')
console.log('1. or Operator ');
{E==8 || E==10 ? console.log(true) : console.log(false)} // If only one condition is satify then result is true
{E==8 || E==9 ? console.log(true) : console.log(false)}

console.log('2. And Operator')

{E==8 && E==9 ? console.log(true) : console.log(false)}  // If both condition is satify then result is true
{N==10 && E==9 ? console.log(true) : console.log(false)}

// type Operator
console.log('type of operator');
console.log('typeof',typeof a);
console.log('typeof',typeof b);

// Bitwise operator
console.log('Bitwise operator');
console.log('1 And Operator :&, 5 & 1	0101 & 0001	   result =0001	 ',5&1);
console.log('2 or Operator : |, 5|1, 0101 | 0001=0101	',5|1);
console.log('3 Not Operator : ! ~5 ~0101 1010',~5);
console.log('4 Xor operator')
