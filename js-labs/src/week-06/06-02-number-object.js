/** 
 * Use Number as a function 
 * When used as a function, Number(value) converts a string or other value to the Number type. If the
value can't be converted, it returns NaN.
 */

Number(123); // 123
Number('123'); // 123
Number('abc'); // NaN

// Refer: https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Number#static_properties

/**
 * Convert to numbers (parseInt and parseFloat)
 */
Number('123'); // 123
Number.parseInt('1.5'); // 1
Number.parseFloat('1.5'); // 1.5
Number('123.5a'); // NaN
Number.parseInt('123.5a'); // 123
Number.parseFloat('123.5a'); // 123.5
Number(null); // 0
Number(undefined); // NaN
Number(true); // 1
Number(false); // 0

/**
 * toFixed() and toPrecision()
 * toFixed() and toPrecision(): convert number to string
 * toFixed(digits) fixed amount digits after point character
 * toPrecision(digits) a Number object in fixed-point or exponential notation rounded to precision significant digits
 * */
const n = 123.525;
n.toFixed(); // 124 as default value for arg is 0
n.toFixed(0); // 124
n.toFixed(1); // 123.5
n.toFixed(2); // 123.53
n.toFixed(3); // 123.525
n.toFixed(4); // 123.5250
n.toFixed(5); //

const n = 123.525;
n.toPrecision(); // 123.525 similar to n.toString()
n.toString(); // 123.525
n.toPrecision(0); // error argument must be between 1 and 100
n.toPrecision(1); // 100
n.toPrecision(2); // 120
n.toPrecision(3); // 124
n.toPrecision(4); // 123.5
n.toPrecision(5); // 123.53
n.toPrecision(6); // 123.525
n.toPrecision(7); // 123.5250
n.toPrecision(8); // 123.52500
