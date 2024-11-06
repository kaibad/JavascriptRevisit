// Variables declared with the const maintain constant values.
// const declarations are block scoped
// const cannot be updated or re-declared
const greeting = "say Hi";
greeting = "say Hello instead"; // error: Assignment to constant variable.
// console.log(greeting);

const greetingtwo = "say Hi";
// const greetingtwo = "say Hello instead"; // error: Identifier 'greeting' has already been declared

// Hoisting of const
// Just like let, const declarations are hoisted to the top but are not initialized.
