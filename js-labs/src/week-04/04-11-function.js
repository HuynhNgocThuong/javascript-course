function printMessage(message) {
  console.log(message);
}

function sumTwoPositive(a, b) {
  // IMPORTANT: check a and b should be positive
  if (a <= 0 || b <= 0) return -1; // should return -1 instead of
  null / undefined;
  return a + b;
}

// Function name usually use prefix: create, update, add, check, convert, map, get, ...
function addNewStudent() {}
function getAllStudents() {}
function convertNumberToString() {}
function checkIfPositive() {}
function updateProduct() {}
function removeTodo() {}
// ...
