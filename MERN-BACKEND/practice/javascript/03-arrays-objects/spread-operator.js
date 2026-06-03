console.log("Spread Operator in JavaScript");

// The spread operator (...) is a powerful feature in JavaScript that allows you to expand elements of an iterable (like an array or object) into individual elements. It can be used in various contexts, such as function calls, array literals, and object literals.

// 1. Spread Operator with Arrays Means merging two arrays or creating a new array by combining existing arrays.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Merging two arrays using spread operator
let mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

let person = {
  name: "Mohit Garg",
  age: 25,
};

let mergePerson = {
  ...person,
  phone: "1234567890",
};

console.log(mergePerson); // { name: 'Mohit Garg', age: 25, phone: '1234567890' }

// 2. Spread Operator with Objects Means merging two objects or creating a new object by combining existing objects.
let obj1 = { a: 1, b: 2 };
let obj2 = { a: 3, b: 4 };

// Merging two objects using spread operator
let mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // { a: 1, b: 2 } --- IGNORE --- { a: 3, b: 4 } --- IGNORE --- { a: 3, b: 4 }

let mergedObject1 = { ...obj2, ...obj1 };
console.log(mergedObject1); // { a: 3, b: 4 } --- IGNORE --- { a: 1, b: 2 } --- IGNORE --- { a: 1, b: 2 }



// 3. Spread Operator in Function Calls Means passing elements of an array as individual arguments to a function.
function sum(x, y, z) {
  return x + y + z;
}

let numbers = [1, 2, 3];

// Using spread operator to pass array elements as individual arguments
let result = sum(...numbers);
console.log(result); // 6



const product = {
  id: 1,
  name: "Laptop",
  price: 50000,
};

const updatedProduct = {
  ...product,
  price: 60000,
  brand: "Dell",
};

console.log(updatedProduct); // { id: 1, name: 'Laptop', price: 60000, brand: 'Dell' }