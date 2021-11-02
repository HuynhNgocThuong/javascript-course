const numberList = [1, 3, 5, 2, 7];
numberList.filter((x) => x % 2 === 0); // [2]
numberList.filter((x) => x > 2); // [3, 5, 7]
numberList.filter((x) => x <= 10 || x % 5 === 0); // [5]

const wordList = ['easy', 'frontend', 'easier'];
wordList.filter((x) => x.length < 5); // ['easy']
wordList.filter((x) => x.startsWith('ea')); // ['easy', 'easier']

function filter(array, callbackFn) {
  if (!Array.isArray(array) || typeof callbackFn !== 'function') return undefined;
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (callbackFn(element, index)) {
      newArray.push(element);
    }
  }
  return newArray;
}

function conditionFn(element, index) {
  if (element > 3) return true;
  else false;
}

console.log(filter([1, 2, 3, 4, 5], conditionFn));
