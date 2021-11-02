// p1.toUpperCase()
// p2.toLowerCase()
// p1 p2
function capitalize(str) {
  if (str === '') return '';
  const firstLetter = str[0].toUpperCase();
  const rest = str.slice(1).toLowerCase();
  return `${firstLetter}${rest}`;
}
console.log(capitalize(''));
console.log(capitalize('ABC'));
console.log(capitalize('ThUOng HUyNH'));
