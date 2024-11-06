// let is now preferred for variable declaration.
// It's no surprise as it comes as an improvement to var declarations.
// It also solves the problem with var that we discussed in  the last part of the var.js.

let a = 2,
  b = 3,
  c = 5;
let d = 1 * b * c;
console.log(`The output is ${d}`);

// let is block scoped
// A block is a chunk of code bounded by {}.
// A block lives in curly braces. Anything within curly braces is a block.

// So a variable declared in a block with let is only available for use within that block.

let test = 4;

if (test > 3) {
  let hello = "Let is a Block scoped variable declaration method ";
  console.log(hello); // "say Hello instead"
}
// console.log(hello); // hello is not defined
//here above the hello is not defined because the hello is defined in the scopeds

// let can be updated but not re-declared.
let upadateLet = "let can be updated";
upadateLet = "let can be updated but not re-declared.";
console.log(upadateLet);

// but this will return an error:
// let reDeclareLet = "let can't be re-declared.";
// let reDeclareLet = "this will return the error"; //just by re-declaring the reDeclareLet variavle using the let it is giving the error.

// However, if the same variable is defined in different scopes, there will be no error:

let greeting = "say Hi";
if (true) {
  let greeting = "say Hello instead";
  console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi"

// Why is there no error?
// This is because both instances are treated as different variables since they have different scopes.

// This fact makes let a better choice than var.

// Hoisting of let

// Just like var, let declarations are hoisted to the top.
//  Unlike var which is initialized as undefined, the let keyword is not initialized.
// So if you try to use a let variable before declaration, you'll get a Reference Error.
