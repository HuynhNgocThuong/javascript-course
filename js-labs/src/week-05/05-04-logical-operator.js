// && AND
// || OR
// ! NOT
// !! NOT NOT

function checkNumber(n) {
  if (n > 0) {
  }
}

function checkNumberEven(n) {
  if (n > 0 && n % 2 === 0) {
  }
}

// If positive even number or negative odd number
function checkNumberEvenOdd(n) {
  const isEvenPositive = n > 0 && n % 2 === 0;
  const isOddNegative = n < 0 && n % 2 !== 0;
  if (isEvenPositive || isOddNegative) {
  }
}
