/**
 * Single or double quoted
 * Using backticks for formating string, span multiple lines
 * String in JS is case-sensitive
 */
const name = 'Should use single quote!'; // recommend
const formatName = `My name is ${name} ${1 + 2}`;

// Escape ' " back slash
const name = "I'm a developer";

// String is immutable
// Refer: https://javascript.info/string
let name = 'Easy Frontend';
// name[0] = 'e';
// name = 'easy Frontend'
console.log(name);
