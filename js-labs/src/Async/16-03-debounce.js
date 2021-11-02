// Refer: https://css-tricks.com/debouncing-throttling-explained-examples/
// https://css-tricks.com/debouncing-throttling-explained-examples/#debounce-examples
function debounce(callback, wait) {
  let timeoutId;
  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(callback, wait);
  };
}
function log() {
  console.log('tada');
}
const debounceLog = debounce(log, 500);
debounceLog();
debounceLog();
debounceLog();
debounceLog();
debounceLog();

// Utils function in lodash
// Refer: https://lodash.com/docs/4.17.15#debounce
