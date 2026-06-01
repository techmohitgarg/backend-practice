console.log("Arrow Functions in JavaScript");

// OLD WAY
function add(a, b) {
  return a + b;
}

// NEW WAY - Arrow Function
const addArrow = (a, b) => {
  return a + b;
};

// More concise version for single expression
const addArrowConcise = (a, b) => a + b;

// Example usage:
console.log("Old Way:", add(5, 3)); // Output: Old Way: 8
console.log("Arrow Function:", addArrow(5, 3)); // Output: Arrow Function: 8
console.log("Concise Arrow Function:", addArrowConcise(5, 3)); // Output: Concise Arrow Function: 8
