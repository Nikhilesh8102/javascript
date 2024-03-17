// function sayMyName(){
//     console.log("nikhilesh ravulapelli");
// }
// sayMyName();

// function add2Numbers(number1, number2){//number1,number2 are called as parameters
   
//     console.log(number1 + number2);
// }
// add2Numbers(2,4);//2,4 are called as arguments
// //console.log(undefined + undefined);//NaN


// function greeting(username){
//     if(!username){
//     console.log("enter username");
//     return ;//this is explicitly equal to return undefined so it prints enter username then undefinef if user doesnt pass username as argument to the greeting function.
//     }
//     return `Welcome ${username}! `
// }
// let result = greeting();
// console.log(result);

// function unknownvar(var1,var2,...var3){//...var3 is rest parameter and it rests at last so it must be the last paramenter in function declaration
//     return var3
// }
// console.log(unknownvar(1,2,3,4,5));//var1=1,var2=2,var3 = [3,4,5]

// function myobj(obj){
//     return obj.name;
// }
// obj = {
//     name:"dwsd",
//     age:20
// }
// //console.log(myobj());//error:not undefined but u willl get cannot read properties of undefined

// //pass directly object in the argument
// console.log(myobj({name:"sds",age:11}))

//same for arrays

// function myarr(arr){
//     return arr[1];
// }
// arr1= [
//     "dwsd",20
// ]

// console.log(myarr(arr1));//error:not undefined but u willl get cannot read properties of undefined

//pass directly object in the argument
// console.log(myarr(["sds",11]))

// let n1 = 10;
// const n2 = 20;
// var n3 = 30;
// if(1){
//     var n3=11;
//     let n1=12;
//     const n2=33;
//     console.log(n1);
//     console.log(n2);
//     console.log(n3);
// }
// console.log(n3); //var doesnot follow scope
// console.log(n1,n2); //let and const folllow scope

/*global scoped things can be used in local scope but not vice versa*/

/*Function declarations are hoisted. This means that they are moved to the top of their scope during the compilation phase, allowing you to call the function before it's declared in the code.
They are globally scoped or locally scoped depending on where they are defined.
They are named functions, which means they have a name identifier by which they can be referenced.
They are suitable for defining functions that need to be reused multiple times throughout the code.

one();
function one(){
    const username = "nikhil";
    two();
    function two(){
        const website = "google";
        console.log(username);
    }
    //console.log(website);//error as it is not accessible outside two()
   
}
*/
/*Function expressions are not hoisted. They can't be called before they are defined.
They are often used for anonymous functions or functions that are assigned to variables.
They can be locally scoped if defined within a block or function, or they can be globally scoped if defined in the global scope.
They can be assigned to variables, passed as arguments to other functions, or returned from other functions.
They are useful for defining functions as part of an expression, such as passing a function as a callback to another function.
//b1();//error cannot access b1 before initilisation
const b1 = function myf(){
    console.log("hi");
}
//myf();//error because above is function expression we are assigning them to a varibale so to access them poutside theor scope we have to call them by their variable name only i.e; b1()
b1();


No, in JavaScript, function expressions assigned to variables, including named function expressions, cannot be called before their declaration due to hoisting behavior.

For example, in the case of const a = function myfun() { ... }, while a is hoisted as a variable declaration, its assignment, which includes the function expression, isn't hoisted. Therefore, attempting to call a() before the line where a is assigned will result in an error, indicating that a is not a function.

const a = function myfun() {
    console.log("hi");
};

a is a constant variable that holds a function.
The function is an anonymous function expression because it doesn't have a name outside of its own scope.
However, within the function's own scope, it's named myfun.
You can call this function using a().
This pattern is particularly useful when you want to have a reference to the function inside itself (for recursion or other purposes) or when you want to have a meaningful name for the function within its own scope for debugging purposes.*/

// +++++++++++ this keyword +++++++++++++++++

// const user  = {
//     username:"nikhilesh",
//     age:21,
//     welcomeMessage :function() {
//         console.log(`${this.username}, welcome to the session!`);
//         console.log(this);

//     }
   
// };
//console.log(user.welcomeMessage);//[Function: welcomeMessage]
/*console.log(user.welcomeMessage());nikhilesh, welcome to the session!
undefined*/

// user.welcomeMessage();//only message is printed and no undefined after message
// user.username = "sam";
// user.welcomeMessage();

//console.log(this);//{} becuase in global scope no object is present so prints empty object but when u do this in browser u get window object as it is the global object in browser.



// function chai(){
//     //let username="inc"
//     console.log(this/*.username*/);
// }
// chai();//undefined if u use username and this.username
//global object and its all properties are printed basically global object definiton is printed if u use console.log(this);

// const chai = function (){
//        let username="inc"
//         console.log(this.username);
//     }
//      chai();//refere above function declaration type for output

// ++++++++++++ arrow function ++++++++++++++++

// const arrowfun = (num1,num2) => {
//     return num1 + num2 ;
// }//if u use {} then have to use return keyword

// const arrowfun  = (num1,num2) => (num1+num2)//implicit return syntax used only when u have single line of code inside the arrow function use paranthesis useful in react
// console.log(arrowfun(1,2));

/*why is it so that arrow fuinctons dint have names
and are anonymous
ChatGPT
The decision to make arrow functions always anonymous in JavaScript is largely due to their nature and intended use cases.

Conciseness and Clarity: Arrow functions were introduced to provide a more concise syntax for writing functions, especially for short, one-liner functions or when passing functions as arguments to higher-order functions like map, filter, and reduce. By making arrow functions anonymous, it emphasizes their role as simple, inline functions without adding unnecessary clutter.

Lexical this Binding: Arrow functions also have lexical this binding, which means they inherit the this value from the surrounding lexical context (the context where they are defined), rather than having their own this context. This feature is very useful in many cases, such as when defining methods in object literals or when working with event handlers. Naming an arrow function could lead to confusion regarding its this binding.

Function Expressions: Arrow functions are primarily used as function expressions rather than function declarations. Function expressions don't require a name; they can be assigned to a variable, passed as an argument to another function, or returned from another function, all without needing to be named explicitly.

Given these factors, making arrow functions anonymous by design simplifies their syntax, encourages their use in concise and clear code, and aligns with their primary use cases in modern JavaScript programming.*/

//application of concept in comments of line 156,158 is this, suppose u have to return an object in arrow function so 

// const af2=(num1,num2) => {username:"nikhil"}
// console.log(af2(1,2));//undefined
// so proper way is
//console.log(af2(1,2));//error: function expressions are not hoisted, and as a result, they cannot be called before they are defined. Due to the fact that the  function is assigned to a variable,af2  that is not hoisted before execution, it cannot be called before its definition, and as a result, this code will not run
// const af2=(num1,num2) => ({username:"nikhil"})
// console.log(af2(2,3));


//++ Immediately invoked function expressions(IIFE) ++++

// function chai(){
//     console.log('DB connected');
// }
// chai()
//the above can also be written as 

// (function chai(){
//     console.log("db connected");
// })();//if u want to write 2 iife one after other u must end the first iife with semicolon 

// ( () => {
//     console.log("db connected");
// })();


let user = {
    name: "John",
    hi(){
       console.log(123); 
    },
    bye(){
       console.log((this))
     }
     
  };
  //console.log(user.hi);//[Function: hi]
  /*console.log(user.hi());{ name: 'John', hi: [Function: hi], bye: [Function: bye] }
  undefined(beccuase the hi function is not returning anything so implicitly its undefined*/
  //user
 // console.log(this);//{}
  
//user.a(); // works
//console.log(user.a()==user.c());//true
  
  // now let's call user.hi or user.bye depending on the name
 /* (user.name == "Johnm" ? user.hi : user.bye)(); // Error!
  user.bye();*/

//   console.log(Object.keys(user));
//   console.log(Object.values(user));
//   console.log(Object.entries(user));



// function greet() {
    
//     console.log(`Hello, ${this.name}!`);
//   }
//   greet();

//   function Person(name) {
//     this.name = name;
//   }
//   const person = new Person('Bob');
//   console.log(person.name); // Output: Bob

//   const obj = {
//     name: 'David',
//     outerFunction: function() {
//       console.log(`Outer function: Hello, ${this.name}!`);
  
//       function innerFunction() {
//         console.log(`Inner function: Hello, ${this.name}!`);
//       }
  
//       innerFunction(); // Call innerFunction immediately after it's defined
//     }
//   };
  
//   obj.outerFunction();


function printme(item){
    console.log(item);
}
printme;