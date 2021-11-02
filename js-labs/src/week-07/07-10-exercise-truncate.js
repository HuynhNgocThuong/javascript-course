// Easy --> truncate('Easy Frontend', 4) --> 'Eas…
// Horizontal ellipsis code is 8230.
// String.fromCodePoint(8230)
// UTF-16 '\u2026'
// https://www.compart.com/en/unicode/U+2026
// length
// length <= maxLength --> show full
// length > maxLength --> truncate

function truncate(text, maxLength) {
  if (text.length <= maxLength) return text;
  const shortStr = text.slice(0, maxlength - 1);
  return `${shortStr}\u2026`;
}
console.log(truncate('Easy', 4));
console.log(truncate('Easy Frontend', 4));
