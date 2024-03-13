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

function myarr(arr){
    return arr[1];
}
arr1= [
    "dwsd",20
]

console.log(myarr(arr1));//error:not undefined but u willl get cannot read properties of undefined

//pass directly object in the argument
console.log(myarr(["sds",11]))
