// A list of error codes from server
// E01: Invalid username or password
// E02: Too many attempts
// E03: Missing data
// Other code: Something went wrong
// Write a function that take errorCode and return the according message
function getErrorMessage(errorCode) {
  let message = '';
  switch (errorCode) {
    case 'E01': {
      message = 'Invalid username or password';
      break;
    }
    case 'E02': {
      message = 'Too many attempts';
      break;
    }
    case 'E03': {
      message = 'Missing data';
      break;
    }
    default: {
      message = 'Something went wrong';
    }
  }
  return message;
}
// v2
function getErrorMessage(errorCode) {
  const errorMap = {
    E01: 'Invalid username or password',
    E02: 'Too many attempts',
    E03: 'Missing data',
  };
  return errorMap[errorCode] || 'Something went wrong';
}
console.log(getErrorMessage('E01'));
console.log(getErrorMessage('E02'));
console.log(getErrorMessage('E03'));
console.log(getErrorMessage('E04'));
