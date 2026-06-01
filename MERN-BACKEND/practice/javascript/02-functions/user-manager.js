console.log("Creating a User Manager in JavaScript");

// A user manager is a simple application that allows you to manage a list of users. It can include functionalities such as adding, removing, and displaying users.

// Let's create a simple user manager using JavaScript.

const users = ["Mohit Garg", "John Doe", "Jane Smith"];

getAllUsers();
const result = mapAllUsersToUpperCase();
console.log("Users in Upper Case:", result);
getAllUpperCaseUsers()
addUser("Alice Johnson");
getAllUsers();


function getAllUsers() {
  console.log("List of Users:");
  users.forEach((user, index) => {
    console.log(`${index + 1}. ${user}`);
  });
}


function mapAllUsersToUpperCase() {
  const upperUsers = users.map((user) => {
    return user.toUpperCase();
  });

  return upperUsers;
};


function getAllUpperCaseUsers() {
  console.log("List of Users in Upper Case:");
  mapAllUsersToUpperCase().forEach((user) => {
    console.log(user);
  });
}

function addUser(name) {
  users.push(name);
  console.log(`User "${name}" added successfully!`);
}
