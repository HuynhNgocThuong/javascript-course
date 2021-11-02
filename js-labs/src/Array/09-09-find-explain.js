// v1
function findFirstEven(numberList) {
  if (!Array.isArray(numberList)) return undefined;
  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (number % 2 === 0) {
      return number;
    }
  }
  return undefined;
}

console.log(findFirstEven([1, 1, 3, 1, 5]));
console.log(findFirstEven(1));
console.log(findFirstEven([1, 2, 3, 1, 5]));

// v2
function findFirstEven(numberList, callbackFn) {
  if (!Array.isArray(numberList)) return undefined;
  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (callbackFn(number, index)) {
      return number;
    }
  }
  return undefined;
}

function isEven(number, index) {
  return number % 2 === 0;
}
console.log(findFirstEven([1, 2, 3, 1, 5], isEven));
console.log(findFirstEven(1, isEven));
console.log(findFirstEven([1, 1, 3, 1, 5], isEven));

// inline function
// anonymous function
console.log(
  findFirstEven([1, 1, 3, 1, 5], function (number) {
    return number % 2 === 0;
  })
);

// arrow function
console.log(
  findFirstEven([1, 1, 3, 1, 5], (number) => {
    return number % 2 === 0;
  })
);

// arrow function shorthand
console.log(findFirstEven([1, 1, 3, 1, 5], (number) => number % 2 === 0));
