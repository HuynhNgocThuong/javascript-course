// Type coersion
const a = 1 + '2'; // '12' as it auto convert from number 1 to string '1' before doing the addition
console.log(a);
const b = 1 - '2'; // -1 as it auto convert string '2' to number 2 before doing the substraction
console.log(b);
const message = 'JS is easy';
if (message) {
  // message here will be converted into boolean automatically
  console.log('Really!? 🤣 ');
}
// Explicit conversion
const error = 'Something wrong!';
const hasError = Boolean(error); // we ask to convert string error to
boolean;
const mark = 9;
const markString = mark.toString(); // or String(mark)
const type = '1';
const typeId = Number.parseInt(type); // or Number(type)

// https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion
// https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion
// https://stackoverflow.com/questions/8857763/what-is-the-difference-between-casting-andcoercing
