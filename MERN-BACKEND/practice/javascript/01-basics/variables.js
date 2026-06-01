console.log("Learning Variables");

// `var` is the older JavaScript keyword and has function scope.
// In modern code, prefer `let` or `const` instead.
var name = "John Doe";
var age = 30;
var isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// In backend development:
// - Use `const` most of the time.
// - Use `let` when the value needs to change.
// - Avoid `var` for new code.

//let → mutable Kotlin var
let city = "New York";
console.log("City:", city);

city = "Los Angeles"; // Reassigning a new value to the variable
console.log("Updated City:", city);

// const (block-scoped, cannot be reassigned)
//const → immutable Kotlin val
const country = "USA";
console.log("Country:", country);
//country= "Canada"; // This will throw an error because const variables cannot be reassigned