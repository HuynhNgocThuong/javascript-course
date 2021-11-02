// indexOf
// lastIndexOf
// includes
function hasEmail(str) {
  return str.includes('@gmail.com');
  // return str.indexOf('@gmail.com') >= 0;
  // return str.lastIndexOf('@gmail.com') >= 0;
}
console.log(hasEmail('abc abc@gmail.com def'));
console.log(hasEmail('abc abc@gmail def'));
