const mysymbol = Symbol("key1");

const myobj = {
    name : "Sumukh",
    age : 21,
    location : "Dharmapuri",
    email : "sumu8224@gmail.com",
    isLoggedIn : false,
    "surname" : "Ravulapelli", //must use [] to access surname
    [mysymbol]: "unique" //must use [] to use mysymbol to get unique as output if u use operator u will get undefined
};

/*console.log(myobj[mysymbol]);*/
//console.log(typeof myobj);
//console.log(myobj.name);//sumukh
//console.log(myobj["name"]);//sumukh
//console.log(myobj."surname");//error as surname as a key is declared as string so we have to use []

//console.log(myobj["surname"]);

//console.log(myobj[mysymbol]);//since mysymbol is declared inside[] this means u  cannot use dot operator to access it u have to use myobj[mysymbol] only
// console.log(myobj.mysymbol)
// console.log(myobj);
// console.log(myobj);//after adding mysymbol inside[]

/*Object.freeze(myobj);
myobj.name="nikhil"//object got freezed and cannot be modifed in anyway unless you unfreeze
console.log(myobj.name);*/


// myobj.greeting = function(){
//     console.log("Hello JS user!");
// }

// console.log(myobj.greeting());

// myobj.greeting2 = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }
// console.log(myobj.greeting2());


// const obj = new Object();
// console.log(obj);

// obj.name = "cscb";
// obj.age = 12;
// obj.email = "dwc@google.com";
// obj.location = "india";

// console.log(obj);

const nested_obj = {
    age:22,
    
    fullname:{
        firstname:"jdvd",
        lastname:"dlvnd",
        surname:"sjscs"
    },
    location:"delhi"
    
}
// console.log(nested_obj);
// console.log(nested_obj.fullname);
// console.log(nested_obj.fullname.firstname);

// const nestedobj_array = [
//     {
//         age:22, 
//         name:"jvnd" 
//     },
//     {
//         age:23, 
//         name:"wvnd" 
//     },
//     {
//         age:25, 
//         name:"jvfnd" 
//     }
// ]
// console.log(nestedobj_array[1]);
// console.log(nestedobj_array[1].name);

// const o1 = {name:"a",age:1};
// const o2 = {name:"b",age:2};
// const o3 = {name:"c",age:3};

// const o =/*{o1,o2,o3};*/Object.assign(o1,o2,o3);
// console.log(o);//in assign and spread methodas in this case since all objects have same properties name and age the later values override formal values and u output as name:'c', age:3

console.log(Object.keys(nested_obj));//keys in nested_obj are returned in array manner
console.log(Object.values(nested_obj));//values of nested_obj are returned in array manner
console.log(nested_obj.hasOwnProperty("name")); //checks for name property in nested_obj and since it doesnt have returns false

             //OBJECT DESTRUCTURING

const {fullname : fln} = nested_obj;
console.log(fln);//here we are renaming fullname of nested_obj as fln so when we say fln we mean nested_obj.fullname it helps in reducing the code by shortening lengthy names





