[2, 1, 3].find((x) => x % 2 === 0); // 2
[2, 1, 3].findIndex((x) => x % 2 === 0); // 0

['easy', 'frontend'].find((x) => x.length > 4); // 'frontend'
['easy', 'frontend'].findIndex((x) => x.length > 4); // 1

function main(callbackFn) {
  // processing ...
  // do another stuff
  callbackFn();
}
function callback() {
  console.log('call me when needed');
}
main(callback);

function main(onFinish) {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += i;
  }
  onFinish(sum);
}
function handleOnFinish(sum) {
  console.log('Sum is:', sum);
}
main(handleOnFinish);
