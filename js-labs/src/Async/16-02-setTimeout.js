// Refer: https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif
// Refer: https://developer.mozilla.org/en-US/docs/Web/API
const timeoutId = setTimeout(callback, timeout);
// callback is the function will be executed once the timer is expired
// timeout is the time in milliseconds, default to 0. 1 second = 1000 milliseconds;
// timeoutId is a positive integer, used to identify a timeout
// and clear it by using clearTimeout(timeoutId)

function sayHello() {
  console.log('Hi');
}
// say hello after 1 second
setTimeout(sayHello, 1000);

// say hello after 1 second
setTimeout(() => {
  console.log('Hi');
}, 1000);

// say hello as soon as you can (not immediately)
setTimeout(() => {
  console.log('Hi');
}, 0);

setTimeout(() => {
  console.log('Hi');
});

console.log('log 1');
setTimeout(() => {
  console.log('log 2');
});
console.log('log 3');
// log 1
// log 3
// log 2 🤣

/**
 * Clear Timeout
 *  */
const timeoutId = setTimeout(() => {
  console.log('Tada!!!');
}, 5000);
clearTimeout(timeoutId); // cancel the timeout
// should be called before the timeout expired

/**
 * Late timeout
 */
setTimeout(() => {
  console.log('Tada!!!');
});
let count = 1;
for (let i = 0; i < 1e9; i++) {
  count++;
}
console.log('done');
