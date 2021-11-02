// Refer:  https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Array
Array.isArray(123); // false
Array.isArray('Easy Frontend'); // false
Array.isArray(true); // false
Array.isArray([]); // true
Array.isArray([1, 2, 3]); // true
[null, undefined].fill(false); // [false, false]
Array(5).fill(1); // [1, 1, 1, 1, 1]
['easy', 'frontend'].join('-'); // 'easy-frontend'
[1, 2, 3].reserve(); // [3, 2, 1]
