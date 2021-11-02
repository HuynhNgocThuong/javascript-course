// Asignment
const count = 1;
const result = 1 + 2 * 3;
const name = 'Easy Frontend';
const isValid = true;

// Unary
const count = 1;
const negativeCount = -count; // -1
let idx = 1;
const incrementPrefix = ++idx; // 2
let idx = 1;
const incrementSuffix = idx++; // 1
const quantity = +'2'; // number 2
const isValid = !true; // false

// Ternary [condition ? exprIfTrue : exprIfFalse]
const grade = mark > 8 ? 'GOOD' : 'BAD';
// Avoid nested ternary
const grade = mark > 8 ? 'GOOD' : mark > 5 ? 'OK' : 'BAD';

//Operator Precedence
const result = 1 + (2 + -2) * 3 - +'3';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
