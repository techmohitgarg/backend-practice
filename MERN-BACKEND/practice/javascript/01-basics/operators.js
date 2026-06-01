console.log("Learning Operators");

// JavaScript has various operators that allow you to perform operations on variables and values. Here are some of the most common ones:

// 1. Arithmetic Operators: Used for mathematical operations.
let a = 10;
let b = 5;

console.log("Arithmetic Operators: a =", a, "b =", b);
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus (remainder)

// 2. Assignment Operators: Used to assign values to variables.
let c = 20;
console.log("");
console.log("Assignment Operators: c = ", c);
c += 5; // Equivalent to c = c + 5
console.log("c += 5:", c);
c -= 3; // Equivalent to c = c - 3
console.log("c -= 3:", c);
c *= 2; // Equivalent to c = c * 2
console.log("c *= 2:", c);
c /= 4; // Equivalent to c = c / 4
console.log("c /= 4:", c);

// 3. Comparison Operators: Used to compare values.
let x = 10;
let y = "10";

console.log("");
console.log("Comparison Operators: x = ", x, "y = ", y);
console.log("x == y:", x == y); // Equality (loose)
console.log("x === y:", x === y); // Strict equality
console.log("x != y:", x != y); // Inequality (loose)
console.log("x !== y:", x !== y); // Strict inequality
console.log("x > b:", x > b); // Greater than
console.log("x < b:", x < b); // Less than

// 4. Logical Operators: Used to combine multiple conditions.
let isAdult = true;
let hasID = false;

console.log("");
console.log("Logical Operators: isAdult = ", isAdult, "hasID = ", hasID);
console.log("isAdult && hasID:", isAdult && hasID);
console.log("isAdult || hasID:", isAdult || hasID);
console.log("!isAdult:", !isAdult);

// 5. Ternary Operator: A shorthand for an if-else statement.
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log("");
console.log("Ternary Operator: age = ", age);
console.log("Can Vote:", canVote);