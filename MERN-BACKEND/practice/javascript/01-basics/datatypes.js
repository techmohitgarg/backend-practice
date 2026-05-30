console.log("Learning Data Types");

// JavaScript has several built-in data types. Here are some of the most common ones:

// 1. String: Represents text. Enclosed in single quotes, double quotes, or backticks.
let name = "Alice";
console.log("");
console.log("Name:", name);

// 2. Number: Represents both integer and floating-point numbers.
let age = 25;
let pi = 3.14;
console.log("");
console.log("Age:", age);
console.log("Pi:", pi);

// 3. Boolean: Represents true or false values.
let isStudent = true;
console.log("");
console.log("Is Student:", isStudent);

// 4. Null: Represents the intentional absence of any object value.
let emptyValue = null;
console.log("");
console.log("Empty Value:", emptyValue);

// 5. Undefined: Represents a variable that has been declared but not assigned a value.
let uninitialized;
console.log("");
console.log("Uninitialized:", uninitialized);

// 6. Object: A collection of key-value pairs.
let person = {
    name: "Bob",
    age: 30,
    isStudent: false
};
console.log("");
console.log("Object: A collection of key-value pairs.");
console.log("Person:", person);
console.log("Person's Name:", person.name);
console.log("Person's Age:", person.age);
console.log("Person's Is Student:", person.isStudent);


// 7. Array: An ordered list of values.
let numbers = [1, 2, 3, 4, 5];
console.log("");
console.log("Array: An ordered list of values.");
console.log("Numbers:", numbers);


//list object person
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
console.log("");
console.log("list object person");
console.log("People:", people);
console.log("First Person's Name:", people[0].name);
console.log("Second Person's Age:", people[1].age);
console.log("Third Person's Age:", people[2].age);


//Mixed Array: An array that can contain different data types.
let mixedArray = [1, "Hello", true, null, { name: "Alice" }, [1, 2, 3]];
console.log("");
console.log("Mixed Array: An array that can contain different data types.");
console.log("Mixed Array:", mixedArray);

// List of objects with personal details
let peopleDetails = [
    { person }
];
console.log("");
console.log("List of objects with personal details");
console.log("People Details:", peopleDetails);
