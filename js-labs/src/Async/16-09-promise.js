//Refer: https://www.freecodecamp.org/news/learn-promise-async-await-in-20-minutes/
// Example 1
const promise = new Promise((resolve, reject) => {});
console.log(promise);

// Example 2
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 3000);
});
promise.then((result) => console.log(result)).catch((error) => console.log(error));

// Example 3
const promise = new Promise((resolve, reject) => {
  reject(new Error('oops, something wrong!!!'));
});
promise.then((result) => console.log(result)).catch((error) => console.log(error));

// Example 4
const b = new Promise((resolve) => {
  resolve('BBB');
});
const promiseA = Promise.resolve('AAA');
const promiseB = Promise.resolve(b);
Promise.all([promiseA, promiseB])
  .then(([resultA, resultB]) => {
    console.log(resultA, resultB);
  })
  .catch((error) => console.log(error));

// Example 5
Promise.resolve('tada')
  .then((message) => console.log(message))
  .catch((error) => console.log(error))
  .finally(() => {
    // usually we hide loading here
  });

// Example 6
Promise.resolve(5)
  .then((n) => n * 2)
  .then((n) => Promise.resolve(n * 2))
  .then((n) => {
    const finalNumber = n + 10;
    console.log(finalNumber); // -> 30
    return finalNumber;
  })
  .catch((error) => console.log(error));

// Example 7
fetch('https://js-post-api.herokuapp.com/api/students?_page=1')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

/**
 * Fake API
 *  */
// Sometimes, the API from Backend is not ready, you need to fake it your self first to not block your works.
const studentApi = {
  getAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
          ],
          pagination: {
            _total: 2,
            _page: 1,
            _limit: 10,
          },
        });
      }, 1000);
    });
  },
};

studentApi
  .getAll()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// Refer: https://scoutapm.com/blog/async-javascript
// Refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
