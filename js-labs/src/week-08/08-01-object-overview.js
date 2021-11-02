const student = {
  id: 1,
  name: 'Van A',
  name: 'Van B', // same key come later will take precedence
  isHero: true,
  'key has space': 'super', // key with spaces should be wrapped in quotes
  sayHi() {
    console.log('Hello!');
  },
};

const studentA = {
  id: 1,
  name: 'Van A',
  isHero: true,
  'avg mark': 9,
};
console.log(studentA.name);
// console.log(studentA.avg mark); // Syntax Error
console.log(studentA['avg mark']); // 9
const key = 'avg mark';
console.log(studentA.key); // undefined 
console.log(studentA[key]); // 9

/**
 * Add new key
 */
const studentB = {
  id: 1,
  name: 'Van A',
  isHero: true,
};
// update value of a key
studentB.name = 'Van B';
// simply set new key for object
studentB.age = 18;
studentB['mark'] = 10;
console.log(studentB.age); // 18
console.log(studentB.mark); // 10

/**
 * Delete key
 */
const student = {
  id: 1,
  name: 'Van A',
  isHero: true,
};
// Remove "name" key
delete student.name;
console.log(student.name); // undefined
