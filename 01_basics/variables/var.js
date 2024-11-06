// JavaScript Variables can be declared in 4 ways:

// Automatically
// Using var
// Using let
// Using const

// It is considered good programming practice to always declare variables before use.

// a simple example using the var keyword

// let variableOutput = document.querySelector(".var");
var x = 5;
var y = 6;
var z = x + y;

console.log(`The output of the summation is ${z}`);

// if (variableOutput) {
//   variableOutput.textContent = `The output of the summation is ${z}`;
// } else {
//   console.error();
// }

//The var keyword should only be used in code written for older browsers.
//Scope essentially means where these variables are available for use. var declarations are globally scoped or function/locally scoped.

var tester = "hey hi";

function newFunction() {
  var hello = "hello";
  console.log(hello);
}
newFunction();

// console.log(hello); // error: hello is not defined

// We'll get an error which is as a result of hello not being available outside the function.
var greeter = "hey hi";
greeter = "say Hello instead";
console.log(greeter);

// Hoisting of var
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that if we do this:
console.log(hoistinginvar);
var hoistinginvar = "say hello";

// The code returns undefined because of how JavaScript handles hoisting with var.
// When a variable is declared using var, JavaScript "hoists" the declaration to the top of its scope, but not its assignment.

// To resolve this we must do as below
var hoistinginvarnew;
console.log(hoistinginvarnew);
hoistinginvarnew = "say hello by the hoisting";

//stiil it is the same
//So var variables are hoisted to the top of their scope and initialized with a value of undefined.

// To avoid the confusion of undefined due to hoisting, consider using let or const, which do not allow access to the variable before it's declared:

// Problem with var
// There's a weakness that comes with var.
var varProblem = "kailash";
var times = 4;

if (times > 3) {
  var varProblem = "Hello Kailash";
}

console.log(varProblem); // "say Hello instead"

// So, since times > 3 returns true, varProblem is redefined to "say Hello instead".
//  While this is not a problem if you knowingly want varProblem to be redefined, it becomes a problem when you do not realize
//   that a variable varProblem has already been defined before.

// If you have used varProblem in other parts of your code, you might be surprised at the output you might get.
//  This will likely cause a lot of bugs in your code. This is why let and const are necessary.
