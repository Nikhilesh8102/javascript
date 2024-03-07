// // No strict mode

// // Variable assignment without declaration (silent failure)
// undeclaredVariable = 10;
// console.log(undeclaredVariable);  // No error, but not a good practice

// // Using a reserved keyword as a variable name
// var let = "Hello";  // No error without strict mode, but 'let' is a reserved keyword

// // Deleting a variable (silent failure)
// var myVar = 42;
// delete myVar;  // No error, but 'delete' on variables is not allowed in strict mode
// console.log(myVar);  // Output: 42 (variable not deleted)

// // Creating a duplicate parameter name in a function (silent failure)
// function example(arg1, arg1) {
//     console.log(arg1);
// }
// example(1, 2);  // No error without strict mode, but not allowed in strict mode

"use strict";

// // Variable assignment without declaration (throws an error)
// undeclaredVariable = 10;  // ReferenceError: undeclaredVariable is not defined
// console.log(undeclaredVariable); 

// // Using a reserved keyword as a variable name (throws an error)
// var let = "Hello";  // SyntaxError: Unexpected strict mode reserved word

// // Deleting a variable (throws an error)
// var myVar = 42;
// delete myVar;  // TypeError: Cannot delete property 'myVar' of [object Object]

// // Creating a duplicate parameter name in a function (throws an error)
// function example(arg1, arg1) {
//     console.log(arg1);
// }
// example(1, 2);  // SyntaxError: Duplicate parameter name not allowed in this context


let myObject = { key: 'value' };
delete myObject.key;
console.log(myObject.key); 