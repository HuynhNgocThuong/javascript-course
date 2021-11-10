// Refer: https://twitter.com/profulsadangi/status/1303186190380625921
// Refer: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
/** 
    What: An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined
    When: function has only one call
    Why: shorter, no need to name it. 
*/
// syntax
(function () {
  console.log('IIFE');
})();

// IIFE with arrow function
(() => {})();

(() => {
  console.log('IIFE');
})();

// IIFE with params
((a, b) => {
  console.log(a + b);
})(5, 10);

// IIFE with async arrow function
(async () => {})();
(async () => {
  await fetchData();
})();

// BEFORE
function App() {
  useEffect(() => {
    async function fetchData() {
      // fetching data
    }
    fetchData();
  }, []);
  return null;
}

// AFTER
function App() {
  useEffect(() => {
    (async () => {
      // fetch data
    })();
  }, []);
  return null;
}

// Prefer block scope instead of IIFE
(() => {
  var name = 'Easy Frontend';
})();
console.log(name); // ReferenceError: name is not defined

// Prefer way
{
  let name = 'Easy Frontend';
}
console.log(name); // ReferenceError: name is not defined
