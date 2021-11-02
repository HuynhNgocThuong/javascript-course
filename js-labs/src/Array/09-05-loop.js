// before ES5
const numberList = [2, 4, 6];
for (let i = 0; i < numberList.length; i++) {
  const number = numberList[i];
  console.log(number); // 2, 4, 6
}

numberList.forEach((x) => console.log(x));

// ES6 for...of
for (const number of numberList) {
  console.log(number); // 2, 4, 6
}
