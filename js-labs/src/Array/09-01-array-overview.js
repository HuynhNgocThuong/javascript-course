// Declared empty array
const numberList = [];
const numberList = [1, 2, 3]; // a list of numbers
const wordList = ['Easy', 'Frontend']; // a list of strings
const flagList = [true, false, false]; // a list of boolean
// a list of students
const studentList = [
  { id: 1, name: 'Van A' },
  { id: 2, name: 'Thi B' },
  { id: 3, name: 'Van C' },
];
// a list of list 
const board = [
  [1, 2],
  ['a', 'b', 'c'],
  [true, false, false, false],
];

// a list of mixed data type
const mixedList = [1, 2, 'word', true, null, undefined, { id: 1, name: 'Easy' }, [1, 2, 3]];

// Accessing element of array
const numberList = [3, 5, 7]; // recommended
numberList[0]; // 3
numberList[1]; // 5
numberList[2]; // 7
numberList.length; // 3
numberList[numberList.length - 1]; // 7 (the last element)

const board = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
board[0]; // [1, 2, 3]
board[1]; // [4, 5, 6]
board[2]; // [7, 8, 9]
board[0][1]; // 2
board[1][2]; // 6
