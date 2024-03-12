// const myarr=[1,2,3,4,5];
// console.log(myarr);
// console.log(typeof myarr);

//convert the array elements from object to sttring type and prints them separated by comma if no separator is provided in join method
//console.log(arr.join(" "));//how u want to separate the elements here im using a space to seoarate them so it wqwill be 1 2 3 4 

// console.log("A ", myarr.slice(1,3));
// console.log(myarr);//slice extracts a portion of array starting from start index and ending till endindex start(inclusive) end index(exclusive) and slice doesnt change the array
// console.log("B ", myarr.splice(1,3));
// console.log(myarr);//splice on the other hand removes or adds or replaces the array here we used splice(1,3,) meaning stating from idex1 remove 3 items in the array so the items of index1,2,3, got removed from myarr
//splice(startIndex, deleteCount, item1, item2, ...): It takes at least two parameters. startIndex is the index at which to start changing the array. deleteCount is the number of elements to remove from the array. Additional parameters (item1, item2, etc.) are the elements to add to the array.

const marvel_heros = ["thor","spiderman","ironman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros[3][1]);

// console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros);
console.log(marvel_heros);
console.log(all_heros);


//push() Method: 

// Purpose: The push() method is used to add one or more elements to the end of an array.
// Modification: It modifies the original array by adding the specified elements.
// Return Value: It returns the new length of the array.
// javascript
// Copy code
// const originalArray = [1, 2, 3];
// originalArray.push(4, 5);
// // originalArray is now [1, 2, 3, 4, 5]
// concat() Method:

// Purpose: The concat() method is used to merge two or more arrays or values into a new array without modifying the existing arrays.
// Modification: It does not modify the original arrays; instead, it returns a new array.
// Return Value: It returns a new array that contains the elements of the original array followed by the elements specified in the concat() method.
// javascript
// Copy code
// const array1 = [1, 2, 3];
// const array2 = [4, 5];
// const newArray = array1.concat(array2);
// // array1 is still [1, 2, 3], array2 is still [4, 5], and newArray is [1, 2, 3, 4, 5]
// In summary, push() is used to add elements to the end of an existing array, modifying the original array, while concat() is used to create a new array by combining existing arrays or values without modifying the original arrays.
