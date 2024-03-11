"use strict"

//alert
alert("some message");

//prompt
// syntax : prompt(title, default value)

let result=prompt("how old are you??",36);
alert(`you are ${result} years old`); //for string concatination if you use ${} then you must use backticks(``) only quotes wont work 

//confirm
// syntax : confirm(question)
let isBoss = confirm("are you the boss?");
alert(isBoss);

//the abovr code wors only in browser so open console in dev tools of your browser and paste this code there.