# JavaScript Variable Declarations: `var`, `let`, and `const`

JavaScript provides three main ways to declare variables: `var`, `let`, and `const`. Each has unique behaviors and scoping rules. Below is a summary of their differences:

### Key Differences

1. **Scope**

   - `var`: Variables declared with `var` are either **globally scoped** or **function scoped**.
   - `let` and `const`: Variables declared with `let` and `const` are **block scoped** (they exist only within the nearest set of `{ }` braces).

2. **Updating and Re-declaring**

   - `var`: Can be **updated** and **re-declared** within its scope.
   - `let`: Can be **updated** but **not re-declared** within the same scope.
   - `const`: Cannot be **updated** or **re-declared** within the same scope.

3. **Hoisting**

   - All three are **hoisted** to the top of their scope. However:
     - `var` variables are initialized with `undefined`.
     - `let` and `const` variables are not initialized, so accessing them before declaration results in a **ReferenceError**.

4. **Initialization Requirements**
   - `var` and `let`: Can be declared without being initialized.
   - `const`: Must be **initialized during declaration**.

### Examples

```javascript
// Scope example
if (true) {
  var varVariable = "I'm accessible outside this block!";
  let letVariable = "I'm block-scoped!";
  const constVariable = "I'm also block-scoped!";
}
console.log(varVariable); // Works
console.log(letVariable); // ReferenceError
console.log(constVariable); // ReferenceError

// Hoisting example
console.log(hoistedVar); // undefined
var hoistedVar = "var is hoisted with undefined";
console.log(hoistedLet); // ReferenceError
let hoistedLet = "let is hoisted without initialization";
console.log(hoistedConst); // ReferenceError
const hoistedConst = "const is also hoisted without initialization";
```
