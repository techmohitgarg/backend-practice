console.log("Arrays Basics in JabvaScript");

// Array is a collection of items stored at contiguous memory locations. It is a data structure that can hold more than one value at a time. Each item in an array is called an element, and each element is identified by an index.

let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
console.log(fruits);

console.log("Length of the fruits array:", fruits.length); // 5

// Accessing elements in an array
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Cherry
console.log(fruits[4]); // Elderberry

// Modifying elements in an array
fruits[1] = "Blueberry";
console.log(fruits); // ["Apple", "Blueberry", "Cherry", "Date", "Elderberry"]

// Pusinng the new element at the end of the array
fruits.push("Pine Apple");
console.log(fruits); // ["Apple", "Blueberry", "Cherry", "Date", "Elderberry", "Pine Apple "]

// Pushing the new element at the any index of the array
fruits.splice(2, 0, "Grapes");
console.log(fruits); // ["Apple", "Blueberry", "Grapes", "Cherry", "Date", "Elderberry", "Pine Apple "]

// Removing the last element from the array
fruits.pop();
console.log(fruits); // ["Apple", "Blueberry", "Cherry", "Date", "Elderberry"]

// Adding an element at the beginning of the array
fruits.unshift("Mango");
console.log(fruits); // ["Mango", "Apple", "Blueberry", "Cherry", "Date", "Elderberry"]

// Removing the first element from the array
fruits.shift();
console.log(fruits); // ["Apple", "Blueberry", "Cherry", "Date", "Elderberry"]

// finding the index of an element in the array
let index = fruits.indexOf("Cherry");
console.log("Index of Cherry:", index); // 2
