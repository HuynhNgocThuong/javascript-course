/**
 * Refer
 *  https://www.educative.io/edpresso/lexical-scope-in-javascript
 *  */

// 2. Block scope
{
  const name = 'Easy Frontend';
}
console.log(name); // runtime error: name is not defined

// nested block scope
{
  {
    const name = 'Easy Frontend';
  }
  console.log(name); // runtime error: name is not defined
}

if (n > 10) {
  const name = 'Easy Frontend';
}
console.log(name); // runtime error: name is not defined

for (let i = 0; i < 10; i++) {
  const name = 'Easy Frontend';
}
console.log(name); // runtime error: name is not defined

// how about this case?
for (let i = 0; i < 10; i++) {
  if (i % 5 === 0) {
    const isDivisibleToFive = true;
  }
  console.log(isDivisibleToFive); // ???
}
console.log(isDivisibleToFive); // ???

// 3. Function scope
function sayHello() {
  const name = 'Easy Frontend';
  console.log(name); // 'Easy Frontend'
  function print() {
    const language = 'en';
    console.log(language); // 'en'
  }
  print();
  console.log(language);
  // ReferenceError: language is not defined
}
sayHello();
console.log(name);
// ReferenceError: name is not defined

// 4. Lexical scope
// Lexical scope = ability for a function scope to access variables from the parent scope.
const name = 'Easy Frontend';
function sayHello() {
  const language = 'en';
  console.log(name);
  // the lexical scope of name is global scope
  function printLanguage() {
    console.log(language);
    // the lexical scope of language is a function scope (sayHello)
  }
}

// 5. Global scope
// global scope can be accessed anywhere
// global scope = declare variable not inside any function
let count = 1;
let channelName = 'Easy Frontend';

// 6. Scope chain
// First fullName variable defined in the global scope:
const fullName = 'Easy';
// Nested functions containing two more fullName variables:
function profile() {
  const fullName = 'Frontend';
  function sayName() {
    const fullName = 'Boooom';
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}
