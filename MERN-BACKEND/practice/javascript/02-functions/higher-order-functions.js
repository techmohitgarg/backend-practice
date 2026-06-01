console.log("Higher-Order Functions in JavaScript")

// A higher-order function is a function that takes another function as an argument or returns a function as a result.

// Example 1: A higher-order function that takes a function as an argument
function greet(name) {
  return `Hello, ${name}!`;
}

function processUserInput(callback) {
  const name = "Mohit Garg"; // Simulating user input
  console.log(callback(name)); // Calling the callback function with the user input
} 

// Using the processUserInput function with greet as the callback
processUserInput(greet);



// forEach is a higher-order function that takes a callback function and executes it for each element in an array. It is commonly used to iterate over arrays and perform operations on each element and same with map and filter functions.
let listofNumbers = [1, 2, 3, 4, 5];
listofNumbers.forEach((number)=> {
  console.log(number);
});


let users = ["Mohit", "Garg", "John", "Doe"];
users.map((user) => {
  console.log(user);
});

console.log("Using filter and forEach together:");
console.log("------------------------------");

users.filter((user) => {
  return user.length <= 4;
}).forEach((user) => {
  console.log(user);
});
