// move default param to the right most
function sum(a, b) {}
function sum(a, b = 10) {}
function sum(a = 5, b = 10) {}

function sum(a = 5, b = 10) {
  return a + b;
}
sum(); // 15
sum(10); // 20
sum(10, 20); // 30

sum(undefined, undefined); // 15
sum(undefined, null); // 5 as null is converted to 0

// Rest parameter
// ES5
function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sum(1)); // 1
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6

// convert arguments to Array
function sum() {
  return [...arguments].reduce((total, number) => total + number);
}
console.log(sum(1, 2, 3));

// ES6 - Prefer this way instead of arguments
function sum(...numberList) {
  return numberList.reduce((total, number) => total + number);
}
console.log(sum(1, 2, 3));

// Spread operator
function sum(...numberList) {
  return numberList.reduce((total, number) => total + number);
}
console.log(sum(1, 2, 3)); // 6
const numberList = [1, 2, 3];
console.log(sum(...numberList)); // 6
