// Refer: https://scoutapm.com/blog/async-javascript
// https://dzone.com/articles/v8-javascript-engine-the-non-stop-improvement
// https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers/
// https://en.wikipedia.org/wiki/List_of_ECMAScript_engines
// https://scoutapm.com/blog/async-javascript

console.log('a');
setTimeout(() => console.log('b'), 0);
new Promise((resolve, reject) => {
  resolve();
}).then(() => {
  console.log('c');
});
console.log('d');
// a -> d -> c -> b
