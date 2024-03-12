console.log(1+2+'3');//33
console.log(1+'2'+'3');//123
console.log(1+'2'+3);//123
console.log('1'+2+'3');//123
console.log('1'+2+3);//123
console.log('1'+2-'3');//9
console.log('1'-2+'3');//-13
console.log('1'+'2'-'3');//9

console.log(123%3);
console.log(typeof ('120.4'%7).toPrecision(4));
console.log(12%'8');
console.log('121'%'3');
console.log(typeof ('121.4'%7));
console.log(typeof '121.4'%7);//NaN because typeof 121.4 here is string then for that u are using modulus by 7 so use brackets for the expression


let n=2;
n=n*(3+5);
console.log(n);
let n2=2;
n2*=3+5;//here 3+5 is calaculated first then multiplied with 2 and assigned t n2. This is shorthand for above n
console.log(n2);

let w=2;
w++;
console.log(w);//3
//console.log(2++);//error when u use incremnt or decrement for a number

let counter1=counter2=2;
let cd=counter1++;
let dc=++counter2;
console.log(cd,dc);//cd=2,dc=3 because counter1++ is postfix or postincremment which  means it assigns the old counter1 value to cd but incremnts couinter1 by 1 whereas ++counter2 is prefix or preincrement and it incremnts the counter2 by 1 then assigns it to dc . to understand wrtie console.log(counter1,counter2);
console.log(counter1,counter2);//3 3

/*
Bitwise operators
Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

These operators are not JavaScript-specific. They are supported in most programming languages.

The list of operators:

AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )
These operators are used very rarely, when we need to fiddle with numbers on the very lowest (bitwise) level. We won’t need these operators any time soon, as web development has little use of them, but in some special areas, such as cryptography, they are useful. You can read the Bitwise Operators chapter on MDN when a need arises.

Comma
The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.

The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.

For example:

let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)
Here, the first expression 1 + 2 is evaluated and its result is thrown away. Then, 3 + 4 is evaluated and returned as the result.

Comma has a very low precedence
Please note that the comma operator has very low precedence, lower than =, so parentheses are important in the example above.

Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a = 3, 7, then the assignment operator = assigns a = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4.

Why do we need an operator that throws away everything except the last expression?

Sometimes, people use it in more complex constructs to put several actions in one line.

For example:

// three operations in one line
for (a = 1, b = 3, c = a * b; a < 10; a++) {
 ...
}
Such tricks are used in many JavaScript frameworks. That’s why we’re mentioning them. But usually they don’t improve code readability so we should think well before using them.
*/
console.log('-9'+5);//'-95'
console.log(Number(null));//0
console.log(Number(undefined));//NaN




