const result = [2, 4, 6].reduce((sum, number) => sum + number, 0);
console.log(result);

// reduce(arr, callbackFn, initialValue)
// rules:
// - arr should be an array and callbackFn should be a function
// - arr.length = 0 and initialValue === undefined --> throw error
// - arr.length = 0 and initialValue !== undefined --> return initialValue

function reduce(array, callbackFn, initialValue) {
  if (!Array.isArray(array) || typeof callbackFn !== 'function') {
    throw new Error('Invalid parameters');
  }
  if (array.length === 0) {
    if (initialValue === undefined) {
      throw new Error('Should have initialValue when arr is empty');
    }
    return initialValue;
  }
  const hasInitialValue = initialValue !== undefined;
  const startIndex = hasInitialValue ? 0 : 1;
  let accumulator = hasInitialValue ? initialValue : array[0];

  for (let index = startIndex; index < array.length; index++) {
    accumulator = callbackFn(accumulator, array[index], index);
  }
  return accumulator;
}

function calcSum(prevSum, curentValue, index) {
  return prevSum + curentValue;
}

reduce([2, 4, 6], calcSum, 0);
console.log(reduce([2, 4, 6], calcSum, 0));
