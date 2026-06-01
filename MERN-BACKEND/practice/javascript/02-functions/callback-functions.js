console.log("Function Callbacks in JavaScript")


function processUser(name){
  console.log("Processing user:", name);
}

function getUserInput(callback) {
  const name = "Mohit Garg"; // Simulating user input
  callback(name); // Calling the callback function with the user input
}

// Using the getUserInput function with processUser as the callback
getUserInput(processUser);