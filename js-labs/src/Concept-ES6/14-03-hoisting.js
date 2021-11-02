// https://dev.to/lydiahallie/javascript-visualized-hoisting-478h

console.log(num); // Returns 'undefined' from hoisted var declaration
var num; // Declaration
num = 6; // Initialization

// no var declaration
console.log(num); // ReferenceError: num is not defined
num = 6; // Initialization

sum(1, 2); // also works
function sum(a, b) {
  return a + b;
}
sum(1, 2); // works

// https://github.com/yeungon/In-JavaScript-we-trust#5-whats-the-output
var tip = 100;
(function () {
  console.log('I have $' + husband());
  function wife() {
    return tip * 2;
  }
  function husband() {
    return wife() / 2;
  }
  var tip = 10;
})();
/**
 *  https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */
var channelName = '';
var channelName = 'Easy Frontend'; // it works =))

const channelName = '';
const channelName = 'Easy Frontend';
// Uncaught SyntaxError: Identifier 'channelName' has already been declared;

let channelName = '';
let channelName = 'Easy Frontend';
// Uncaught SyntaxError: Identifier 'channelName' has already been declared;

// function scope vs block scope
function sayHello() {
  {
    const language = 'en'; // block scope
    var message = 'hello'; // function scope
  }
  console.log(language); // ReferenceError: language is not defined
  console.log(message); // 'hello'
}
