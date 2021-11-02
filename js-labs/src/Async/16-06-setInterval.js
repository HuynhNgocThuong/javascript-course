const intervalId = setInterval(() => {
  console.log('Hey, are you there?');
}, 2000);

clearInterval(intervalId);
function countdown(seconds) {
  let currentSecond = seconds;
  const intervalId = setInterval(() => {
    console.log(currentSecond);
    if (currentSecond <= 0) {
      clearInterval(intervalId);
    }
    currentSecond -= 1;
  }, 1000);
}
countdown(10);

/**
 * Refer: https://javascript.info/settimeout-setinterval
 **/

let i = 1;
setInterval(function () {
  func(i++);
}, 100);

// Nested timeout
let i = 1;
setTimeout(function run() {
  func(i++);
  setTimeout(run, 100);
}, 100);
