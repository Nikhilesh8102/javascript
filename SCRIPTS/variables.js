// let name1;
// name1="Earth";
// console.log(name1);


let name1="Earth";
console.log(name1);  //both are same this approach is best as it saves code lines  and we get error as we are re delcaring name using let  so commented the first one
  
// let a=3,b=4,c=5;
let a=3;
let b=4;
let c=5;  //ise this for multiple variables not the above one even though it is optimum but readability messy


let mon="helo"
let sun=mon;
console.log(sun);//assigning another variable to this variable

//let let=1;//error as we cannot use reserved keywords as varibale names

const BIRTHDAY = '18.04.1982';

const age = someCode(BIRTHDAY);//someCode is some function which is not yet definewd inthis xscript so ignore  it for the moment  use captial names for constants if they are used for storing hard coded values and use small cases otherwise like here for age

/*              SUMMARY

We can declare variables to store data by using the var, let, or const keywords.

let – is a modern variable declaration.
var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
const – is like let, but the value of the variable can’t be changed.
Variables should be named in a way that allows us to easily understand what’s inside them.

*/