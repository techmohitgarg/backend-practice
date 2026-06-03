console.log("Mini CRED Operations on Users Array");

// Create an array of users
let users = [
  { id: 1, name: "Alice", email: "abc@gmail.com" },
  { id: 2, name: "Bob", email: "bob@gmail.com" },
];
console.log(users);

// Add tje new user to the users array
users.push(createUser("Charlie", "charlie@gmail.com"));
console.log(users);

// Get the user by id
console.log(getUserById(1));
console.log(getUserById(2));

// Create a new user
function createUser(name = "Unknown", email = "unknown@gmail.com") {
  const newUser = {
    id: users.length + 1,
    name: name,
    email: email,
  };
  return newUser;
}

// Read a user by id
function getUserById(id) {
  return users.find((user) => user.id === id);
}

// Update a user by id
function updateUser(id) {
  const user = getUserById(id);
  return user
    ? { ...user, name: "Updated Name", email: "hello@gmail.com" }
    : null;
}

// Delete a user by id
function deleteUser(id) {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    return true;
  }
  return false;
}

// Update the user with id 1
const updatedUser = updateUser(1);
console.log(updatedUser);

// Delete the user with id 2
const isDeleted = deleteUser(2);
console.log(isDeleted);
console.log(users);