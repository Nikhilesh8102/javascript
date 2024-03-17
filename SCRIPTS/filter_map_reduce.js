// Filter Method: Filter method creates a new array with all elements that pass the test implemented by the provided function.
// javascript
// Copy code
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 200];

// Example: Filtering out numbers greater than 50
const filteredArray = arr.filter(num => num > 50);
console.log(filteredArray); // Output: [60, 70, 80, 90, 200]
// Map Method: Map method creates a new array with the results of calling a provided function on every element in the calling array.
// javascript
// Copy code
// Example: Mapping each element to its square
const squaredArray = arr.map(num => num * num);
console.log(squaredArray); // Output: [100, 400, 900, 1600, 2500, 3600, 4900, 6400, 8100, 40000]
// Reduce Method: Reduce method applies a function to each element of the array (from left to right) to reduce it to a single value.
// javascript
// Copy code
// Example: Summing up all the elements
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 650
// These are basic examples demonstrating the usage of filter, map, and reduce methods. They can be powerful tools for manipulating and processing arrays in JavaScript.