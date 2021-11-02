/**
 * Refer
 * https://medium.com/swlh/introduction-to-javascript-basics-cf901c05ca47
 * http://es6-features.org/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
 * https://exploringjs.com/es6/index.html
 */
/**
    Eliminates some JavaScript silent errors by changing them to throw errors.
    Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code
    can sometimes be made to run faster than identical code that's not strict mode.
    Prohibits some syntax likely to be defined in future versions of ECMAScript. 
*/

// in non-strict mode
channelName = 'Easy Frontend'; // accidentally create global variables
console.log(channelName); // 'Easy Frontend'
console.log(window.channelName); // 'Easy Frontend' --> browser only
console.log(global.channelName); // 'Easy Frontend' --> nodejs server only

('use strict');
channelName = 'Easy Frontend';
// ReferenceError: channelName is not defined

// in non-strict mode
undefined = 1; // no error
('use strict');
undefined = 1;
// TypeError: Cannot assign to read only property 'undefined' of object

// in non-strict mode
console.log(015 + 20); // 33 
// because 015 is understand in octal
// 015 = 5 * 8^0 + 1 * 8^1 = 13

('use strict');
console.log(015 + 20);
// SyntaxError: Octal literals are not allowed in strict mode.
// correct way: use 0o (zero and small 'o' letter)
console.log(0o15 + 20);
