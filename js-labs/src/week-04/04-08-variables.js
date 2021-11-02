// ES5
var name = 'Easy Frontend';
// ES6
const PI = 3.14;
const name = 'Easy';
name = 'Frontend'; // error Assignment to constant variable
let count = 1;
count = 2; // works

const sanPham = 'js course'; // BAD
const product = 'js course'; // BAD
const productName = 'js course'; // GOOD
// true/false variables
let hasValidItem = true;
let isSelected = false;
let show = false;
let hasPositiveNumber = false;
// single noun
const student = {
  name: 'Easy Frontend',
};
// plural noun
const students = [].map((student) => console.log(student.name)); // OK
const studentList = [].map((student) => console.log(student.name)); // GOOD
