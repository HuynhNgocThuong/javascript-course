// value type, the variable store the value
const name = 'Easy Frontend';
const age = 18;
const isHero = true;
const selectedStudent = null;

// reference type, the variable store the address/ref of the value
// so in this example
// object value { name, age, ... } will be store at address 123456 (somewhere in memory)
// and the student variable just hold the address 123456 (that's why wecall reference)
const student = {
  name: 'Easy Frontend',
  age: 18,
};

// primitive type
const a = 5;
let b = a;
b = 10;
console.log(a); // 5

// reference type
const student1 = { name: 'Easy Frontend' };
const student2 = student1;
student2.name = 'Thuong Huynh';
console.log(student1.name); // Thuong Huynh ???

// Compare object
const student1 = { name: 'Easy Frontend' };
const student2 = student1; // copy reference from student1 to student2
student1 === student2; // true as they both point to the same reference

const student1 = { name: 'Easy Frontend' }; // reference 1
const student2 = { name: 'Easy Frontend' }; // reference 2
student1 === student2; // false as they are different refs

/**
 * Pass by value vs Pass by reference
 * */
function changePrimitive(name, age) {
  name = 'Easy Frontend';
  age = 18;
}
let name = 'Easy';
let age = 17;
changePrimitive(name, age);
console.log(name); // 'Easy'
console.log(age); // 17

function changeReference(student) {
  student.name = 'Easy Frontend';
  student.age = 18;
}
const student = {
  name: 'Easy',
  age: 17,
};
changeReference(student);
console.log(student.name); // 'Easy Frontend' 
console.log(student.age); // 18
