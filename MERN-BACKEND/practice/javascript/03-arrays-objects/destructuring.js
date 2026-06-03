console.log("Destructuring in JavaScript");

// Destructuring is a convenient way of extracting values from arrays or objects and assigning them to variables. It allows you to unpack values from arrays or properties from objects into distinct variables.

let person = {
  name: "Mohit Garg",
  age: 25,
  phone: "1234567890",
  email: "abc@gmail.com",
};


const {name, age, phone, email} = person;
console.log();
console.log("------------------------");
console.log(name); // Mohit Garg
console.log(age); // 25
console.log(phone); // 1234567890
console.log(email); // abc@gmail.com



// Destructuring with nested objects and renaming variables
const result = {
  body: {
    name: "Mohit Garg",
    age: 25,
    phone: "1234567890",
    email: "abc@gmail.com"
  }
};

const {name: personName, age: personAge} = result.body;
console.log();
console.log("------------------------");
console.log(personName); // Mohit Garg
console.log(personAge); // 25

// Destructuring with arrays
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log();
console.log("------------------------");
console.log(firstFruit); // Apple
console.log(secondFruit); // Banana
console.log(thirdFruit); // Cherry

// Destructuring with arrays objects
let people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const [{ name: firstPersonName }, { name: secondPersonName }] = people;
console.log();
console.log("------------------------");
console.log(firstPersonName); // Alice
console.log(secondPersonName); // Bob

// Destructuring with nested objects
let employee = {
  name: "John Doe",
  position: "Software Engineer",
  department: {
    name: "Engineering",
    location: "New York",
  },
};

const {
  name: employeeName,
  position,
  department: { name: departmentName, location },
} = employee;

console.log();
console.log("------------------------");
console.log(employeeName); // John Doe
console.log(position); // Software Engineer
console.log(departmentName); // Engineering
console.log(location); // New York


// Destructuring with default values
let user = {
  username: "johndoe",
  email: "johndoe@gmail.com",
};

const { username, email, age: userAge = 30 } = user;


