// 1. Get the ones of a number having 3 digits
function extractTheOnes(n) {
  if (n.toString().length !== 3) return -1;
  // 123 % 10 = 3
  return n % 10;
}
console.log(extractTheOnes(123));
console.log(extractTheOnes(1234));

// 2. Get the tens of a number having 3 digits
function extractTheTens(n) {
  if (n.toString().length !== 3) return -1;
  // 223 % 100
  // 23
  // 23 / 10 = 2.3 --> 2
  return Math.trunc((n % 100) / 10);
}
console.log(extractTheTens(223));

// 3. Get the hundreds of a number having 3 digits
function extractTheHundreds(n) {
  if (n.toString().length !== 3) return -1;
  // 523 / 100 = 5.23 --> 5
  return Math.trunc(n / 100);
}
console.log(extractTheHundreds(523));

// 4. Sum all digits of a number having 3 digits
function sumDigits(n) {
  if (n.toString().length !== 3) return -1;
  const ones = n % 10;
  const tens = Math.trunc((n % 100) / 10);
  const hundreds = Math.trunc(n / 100);
  return ones + tens + hundreds;
}
console.log(sumDigits(123));
console.log(sumDigits(235));
