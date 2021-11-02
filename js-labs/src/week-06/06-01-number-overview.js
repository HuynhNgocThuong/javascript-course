// Type number
const count = 1;
const mark = 9.5;
const long = 1000000;
const longer = 1_000_000; // rare usage
const short = 1e6; // usually see this
const smaller = 0.0001;
const smallerShort = 1e-4; // 😜

/*
 * Arithmetic operators
 */
const sum = 1 + 2; // 3
const substract = 1 - 2; // -1
const multiply = 1 * 2; // 2
const divide = 1 / 4; // 0.25

const remainder = 7 % 5; // 2 because 7 = 5x1 + 2 (remainder)

// increment
let count = 1;
const n = count++; // 1 postfix, return first, then increase
let count = 1;
const n = ++count; // 2 prefix, increase first, then return
// decrement
let count = 1;
const n = count--; // 1 postfix, return first, then decrease
let count = 1;
const n = --count; // 0 prefix, decrease first, then return
// unary plus: attempts to convert to number if it's not a number
const n = +'123'; // 123
// unary negation: return the negation of the operand
const n = -'123'; // -123
// exponentiation operator
const n = 2 ** 3; // means 2^3 = 8

/*
 * Assignment operators
 */
// addition assignment
let n = 1;
n += 1; // 2, similar to n = n + 1
// subtraction assignment
let n = 1;
n -= 1; // 0 similar to n = n - 1
// multiplication assignment
let n = 1;
n *= 3; // 3 similar to n = n * 3
// division assignment
let n = 1;
n /= 2; // 0.5 similar to n = n / 2

/*
 * toString(base)
 */
const n = 20;
n.toString(); // '20' (default is 10)
n.toString(10); // '20' Decimal
n.toString(16); // '14' Hexadecimal
n.toString(8); // '24' Octal
n.toString(2); // '10100' Binary
