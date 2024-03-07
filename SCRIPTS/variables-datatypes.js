const id=123
let a=2111
var b=1
console.table([id,a,b])
// id=12 (cannot change const once assigned a value)
a="hello"
b=true
console.table([id,a,b])
c=null;
let d;
// datatypes
// number, bigint, boolean, string,object,null,undefined,symbol
console.table([typeof(id),typeof(a),typeof(b),typeof(c),typeof(d),typeof(e)])
// typeof null is object whereas typeof undefined or undeclared varibales is undefined 
console.log(typeof NaN)

// lets do conversion
let score=12
console.log(typeof score)

let t1="12a"
let t2=null
let t3=undefined
let t4=true
let t5=false
let t6=28
let t7="12"
let t1InNumber=Number(t1)
let t2InNumber=Number(t2)
let t3InNumber=Number(t3)
let t4InNumber=Number(t4)
let t5InNumber=Number(t5)
let t6InNumber=Number(t6)
let t7InNumber=Number(t7)


console.table([t1,t1InNumber,typeof t1InNumber,t2,t2InNumber,typeof t2InNumber,t3,t3InNumber,typeof t3InNumber,t4,t4InNumber,typeof t4InNumber,t5,t5InNumber,typeof t5InNumber,t6,t6InNumber,typeof t6InNumber,t7,t7InNumber,typeof t7InNumber]) 

// for the above, the string is converted to number via the Number function and is NaN becoz its clearly not a number as it is a string but the typeof is shown as number so be careful while dealign with number in js
/*the conversions are like this

true->1
false->0
null->0
undefined->NaN
string consistinf og pure int->that int value
string consisting of not just numbers->NaN
number->number*/

let f1="wed2w"
let f2=12
let f3=-3
let f4=0
let f5=undefined
let f6=null
let f7=true
let f8=0.0

let f1InBoolean=Boolean(f1)
let f2InBoolean=Boolean(f2)
let f3InBoolean=Boolean(f3)
let f4InBoolean=Boolean(f4)
let f5InBoolean=Boolean(f5)
let f6InBoolean=Boolean(f6)
let f7InBoolean=Boolean(f7)
let f8InBoolean=Boolean(f8)



console.table([f1,f1InBoolean,typeof f1InBoolean,f2,f2InBoolean,typeof f2InBoolean,f3,f3InBoolean,typeof f3InBoolean,f4,f4InBoolean,typeof f4InBoolean,f5,f5InBoolean,typeof f5InBoolean,f6,f6InBoolean,typeof f6InBoolean,f7,f7InBoolean,typeof f7InBoolean,f8,f8InBoolean,typeof f8InBoolean]) 

/*
In Boolean(some variable)
any integer except 0 is true for 0  it is false and the same in decimal points also 
*/ 

let x=33//null//undefined;
let xInString =String(x)
console.table([x,xInString,typeof xInString])

/*in case if strings it is normal they are enclosed as strings and type gets changed to string */
let sqws=12
let dsds=String(sqws)
console.log(dsds)

//check how the output is displayed for dsds in console.log vs console.table

console.log(-false-true*2-true/false)
console.log(1+2+"2")
console.log("1"+2+2)
console.log(1+"2"+2)

let z = true;
let y = 'Hello';
let result2 = z + y; // Implicit coercion: true is converted to 1, and then 1 is concatenated with 'Hello'
console.log(result2);

//study a lot about comparisions for null undefined numbers strings boolean NaN <,>,<=,>=,==,===(strict check) etc;
// type corecions


