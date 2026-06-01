console.log("Practice Challenge Basic Calculator");

function add(a, b) {
  return a + b; // Return the sum of a and b
}

function subtract(a, b) {
  return a - b; // Return the difference of a and b
}

function multiply(a, b) {
  return a * b; // Return the product of a and b
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed.";
  }
  return a / b; // Return the quotient of a and b
}

// Example usage:
const num1 = 10;
const num2 = 5;

console.log("Addition:", add(num1, num2)); // Output: Addition: 15
console.log("Subtraction:", subtract(num1, num2)); // Output: Subtraction: 5
console.log("Multiplication:", multiply(num1, num2)); // Output: Multiplication: 50
console.log("Division:", divide(num1, num2)); // Output: Division: 2
