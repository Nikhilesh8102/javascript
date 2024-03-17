// //for of loop
// const arr = [10,20,30,40,50];

// for (const item of arr) {
//     console.log(item);//output arr items each in separate line
//     }
// for (const item in arr) {
//    console.log(arr[item]);//here in for in loop item is used for index or keys in array and they are string type so user arr[item] to get their values 
// }
// arr.forEach(function (item,index,value){
//     console.log(item,index,value);//index,value are optional
// })
// arr.forEach((item)=>{
//     console.log(item);
// })

const user = {
    name:"sathish",
    age:22,
    address:{
        city:"jagtial",
        pincode:505325,
        state:"telangana",
        dd:{
            n:1
        }
    }
}
 //for (const [key] of user) {
   //  console.log(user[key]);
 //}//error objects are not iterable by default so we cant use for of loop for non iterable things
// for (const key in user) {
//     console.log(user[key]);
//     //key means keys of user object so we are using user[key] not user.key as key here is a string
// }
// Object.entries(user).forEach(function(key,index,value){
//     console.log(key,index,value);
// })
// console.log(typeof Object.values(user));
//we cant use foreach on object directly so we used object .entries on user which retunrs array of user entries then applied foreach

const map=new Map();
map.set("name","harry");
map.set("age",12);
map.set("loc","pakistan");
//console.log(map);

// for (const ele of map) {
//     console.log(ele);//name age loc
//     //console.log(value); //harry 12 pakistan
//    // console.log(ele);//

//    ///when u write key inside[] then it referes to map keys and if u jst write key of not [key] of then it refrsto both keyand value of map
    
// }

// for (const key in map) {
//     console.log(map.key);
// }//cant use for in for maps no error nothing will be printed but maps are not enumerable like objects so we cant use for in on maps
const arr1=[1,2,3,4,5,6,7,8,9,10];

const res = arr1.filter(function(item){
    return item>4;
})
console.log(res);