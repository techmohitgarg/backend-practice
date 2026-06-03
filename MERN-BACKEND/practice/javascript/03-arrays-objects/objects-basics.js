console.log("Learning Objects Basics in JavaScript");

// Object is a collection of properties, and a property is an association between a name (or key) and a value. The value can be a function, which is then known as a method. Objects are used to store data in key-value pairs.

// Creating an object

let person = {
  name: "Mohit Garg",
  age: 25,
  phone: "1234567890",
  email: "abc@gmail.com",
};

console.log(person);

// Accessing properties of an object
console.log();
console.log("------------------------");
console.log(person.name); // Mohit Garg
console.log(person.age); // 25
console.log(person["phone"]); // 1234567890

// uodate the properties of an object
person.age = 26;
console.log();
console.log("------------------------");
console.log(person.age); // 26

// Adding new properties to an object
person.address = "123 Main St, City, Country";
console.log();
console.log("------------------------");
console.log(person.address); // 123 Main St, City, Country

// Deleting a property from an object
delete person.email;
console.log();
console.log("------------------------");
console.log(person.email); // undefined

// Checking if a property exists in an object
console.log();
console.log("------------------------");
console.log("name" in person); // true
console.log("email" in person); // false

// Looping through the properties of an object
console.log();
console.log("------------------------");
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// creating a method in an object
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  getCarInfo: function () {
    return this.make + " " + this.model + " (" + this.year + ")";
  },
  getCarInfoArrow: () => {
    return car.make + " " + car.model + " (" + car.year + ")";
  },
  checkModelUppreOrLower: (year) => {
    return car.year < year ? "Upper" : "Lower";
  },
};

console.log();
console.log("------------------------");
console.log(car.getCarInfo()); // Toyota Camry (2020)
console.log(car.getCarInfoArrow()); // Toyota Camry (2020)
console.log(car.checkModelUppreOrLower(2020)); // Lower
console.log(car.checkModelUppreOrLower(2021)); // Upper


// Creating the object using constructor function
function Person(name, age, phone, email) {
  this.name = name;
  this.age = age;
  this.phone = phone;
  this.email = email;
}

let person1 = new Person("Mohit Garg", 25, "1234567890", "abc@gmail.com");
console.log();
console.log("------------------------");
console.log(person1);


// creating the array of objects
let people = [
  new Person("Mohit Garg", 25, "1234567890", "abc@gmail.com"),
  new Person("John Doe", 30, "0987654321", "john.doe@gmail.com"),
  new Person("Jane Smith", 28, "1122334455", "jane.sm ith@gmail.com")
];
console.log();
console.log("------------------------");
console.log(people);