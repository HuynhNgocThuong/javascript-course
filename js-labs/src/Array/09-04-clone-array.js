const numberList = [1, 2, 3];
const anotherList = numberList;
anotherList[0] = 4; // anotherList = [4, 2, 3]
console.log(numberList); // [4, 2, 3] 

const anotherListA = [...numberList, 1, 1, 1];
anotherListA[0] = 5; // anotherList = [4, 2, 3]
console.log(anotherListA);
console.log(numberList); // [1, 2, 3] 😍
