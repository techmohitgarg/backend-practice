console.log("function Scope in JavaScript");

const globalVariable = "I am a global variable";

function outerFunction() {
  const outerVariable = "I am an outer variable";

  function innerFunction() {
    const innerVariable = "I am an inner variable";
    console.log(globalVariable); // Accessible
    console.log(outerVariable); // Accessible
    console.log(innerVariable); // Accessible
  }

  innerFunction();
  console.log(globalVariable); // Accessible
  console.log(outerVariable); // Accessible
  // console.log(innerVariable); // Not accessible, would throw an error
}

// innerFunction(); // Not accessible, would throw an error

outerFunction();
// console.log(outerVariable); // Not accessible, would throw an error
// console.log(innerVariable); // Not accessible, would throw an error
