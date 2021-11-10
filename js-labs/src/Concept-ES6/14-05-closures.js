// Refer: https://dmitripavlutin.com/simple-explanation-of-javascript-closures/
/**
 * A closure is a function having access to the parent scope, even after the parent function has closed
 *
 */

function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() {
    // the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();

function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}
var myFunc = makeFunc();
myFunc();

// Counter example
function createCounter(initValue = 0) {
  let value = initValue; // private variable
  function increase() {
    value++;
  }
  function decrease() {
    value--;
  }
  function getValue() {
    return value;
  }
  return {
    getValue,
    increase,
    decrease,
  };
}
