const numberList = [2, 5, 3, 1];
numberList.sort(); // [1, 2, 3, 5]
[null, 2, 1, 5, 3, undefined, null].sort(); // [1, 2, 3, 5, null, null, undefined]

// v1
function compareFn(a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  return -1;
}
[2, 1, 3].sort(compareFn); // 1, 2, 3

// v2
function compareFn(a, b) {
  return a - b;
}
[2, 1, 3].sort(compareFn); // 1, 2, 3

// v3
function compareFn(a, b) {
  return a - b;
}
[2, 1, 3].sort((a, b) => a - b); // 1, 2, 3

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/s
 * https://www.tutorialspoint.com/which-algorithm-does-the-javascript-arrayhashsort-function
 * https://stackoverflow.com/questions/234683/javascript-array-sort-implementation
 * https://visualgo.net/vi/sorting
 */
