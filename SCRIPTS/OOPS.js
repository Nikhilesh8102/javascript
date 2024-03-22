// const user = {
//     username:"sathiah",
//     age:22,
//     getUserDetails(){
//       //const username ="hireath";
//       //console.log(username);
//          console.log(this.username);
//     }

// }
//console.log(user.getUserDetails());
function user(name,age,loc){
    this.name = name;;
    this.age = age;
    this.loc = loc;
    // return this;   //if u create an instance of this function using new keyword basically a constructor then it implicitly returns this context of the function but if u directly call the function and assign it to the variable then it returns nothing so u have to explicitely write reurn this to get the inner properties of the user function
}
const user1 =  new user('hello',13,'washington');
const user2 =  new user("hi",12,'india');
console.log(user1);
console.log(user1.constructor)//[function:user]