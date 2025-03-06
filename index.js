// Function that receives a function and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("This is a named function");
    };
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function");
    };
  }
  
  // Example usage
  receivesAFunction(() => console.log("Callback function called!"));
  const namedFunc = returnsANamedFunction();
  namedFunc(); // Should log: "This is a named function"
  const anonymousFunc = returnsAnAnonymousFunction();
  anonymousFunc(); // Should log: "This is an anonymous function"
  