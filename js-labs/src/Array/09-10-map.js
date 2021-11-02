// https://www.jbakebwa.dev/posts/js-array-map.html
const numberList = [1, 3, 5, 7];
numberList.map((x) => x + 1); // [2, 4, 6, 8]
numberList.map((x) => x * 2); // [ 2, 6, 10, 14]

const wordList = ['easy', 'frontend'];
wordList.map((x) => x.length); // [4, 8]
wordList.map((x) => `super-${x}`); // ['super-easy', 'super-frontend']

// map(mappingFn)
// map(transformFn)
// map(callbackFn)
function map(numberList, mappingFn) {
  if (!Array.isArray(numberList) || typeof mappingFn !== 'function') return undefined;
  const newArray = [];
  // Mapping
  for (let index = 0; index < numberList.length; index++) {
    const element = numberList[index];
    const newElement = mappingFn(element, index);
    newArray.push(newElement);
  }
  return newArray;
}

function mappingFn(element, index) {
  return element + 1;
}
console.log(map([1, 2, 3], mappingFn));
