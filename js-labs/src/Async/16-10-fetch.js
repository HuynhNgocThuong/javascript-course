// Refer: https://bytesofgigabytes.com/networking/how-http-request-and-response-works/
/**
it starts the process of fetching a resource from the network
returns a promise which fulfilled once the response is available
it only rejects when a network error is encountered.
it doesn't reject on HTTP errors (4xx, 5xx)
you can check Response.ok to handle error properly.
*/

// Example 1
const url = 'https://js-post-api.herokuapp.com/api/students?_page=1';
const init = {
  method: 'POST', // GET, PUT, PATCH. DELETE
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer YOUR_TOKEN_HERE',
  },
  body: JSON.stringify({ name: 'Easy Frontend' }),
};

// Refer: https://developer.mozilla.org/en-US/docs/Web/API/fetch#parameters
// Example 2
fetch('https://js-post-api.herokuapp.com/api/students?_page=1')
  .then((response) => response.json())
  .then((data) => console.log(data));

// Example 3
// Add new student
fetch('https://js-post-api.herokuapp.com/api/students', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Easy Frontend',
    age: 18,
    mark: 9,
    gender: 'male',
  }),
});

// Handle Error
fetch('https://js-post-api.herokuapp.com/api/invalid-endpoint', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    if (response.ok) return response.json();
    // TODO: How you handle errors here? --> It depends on what your API returns;
    // Solution 1: return Promise.reject(new Error('Something wrong!'));
    // Solution 2: throw new Error(response.statusText);
    return response.json().then((data) => {
      throw new Error(data?.message || 'Something went wrong!');
    });
  })
  .catch((error) => {
    console.log(error);
    // Toast message
    // Send report to log server (Sentry)
  });

/**
   * Refer:
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    https://developer.mozilla.org/en-US/docs/Web/API/fetch#parameters
    https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
   */
