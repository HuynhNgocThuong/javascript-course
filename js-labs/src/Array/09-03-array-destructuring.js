// object destructuring
const student = {
  id: 1,
  name: 'Easy Frontend',
};
const { id, name } = student;
console.log(id); // 1
console.log(name); // 'Easy Frontend'

const numberList = [3, 5, 7];
// old way
const firstA = numberList[0]; // 3
const secondA = numberList[1]; // 5
const thirdA = numberList[2]; // 7
// similar but new way
const [firstB, secondB, thirdB] = numberList;

// or even direct array
const [firstC, secondC, thirdC] = [3, 5, 7, 9, 11];

// rest operator (...)
const [firstD, secondD, thirdD, ...rest] = [3, 5, 7, 9, 11];
console.log(rest); // [9, 11]
