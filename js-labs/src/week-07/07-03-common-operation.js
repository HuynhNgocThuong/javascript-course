'Easy Frontend'.charAt(0); // E
'Easy Frontend'.charAt(3); // y
const nameA = 'Easy Frontend';
nameA.charAt(nameA.length - 1); // d (the last character)

'Easy Frontend'[0]; // E
'Easy Frontend'[3]; // y
const nameB = 'Easy Frontend';
nameB[nameB.length - 1]; // d (the last character)

const a = 'Easy';
const b = 'Frontend';
const c = a + ' ' + b; // 'Easy Frontend'
const d = a.concat(' ', b); // 'Easy Frontend'
const e = `${a} ${b}`; // 'Easy Frontend' (recommended)

const nameC = 'Easy Frontend';
for (let i = 0; i < nameC.length; i++) {
  console.log(nameC[i]);
}

'Easy Frontend'.toLowerCase(); // easy frontend
'Easy Frontend'.toUpperCase(); // EASY FRONTEND

// Find substring
const nameD = 'Hello Po';
nameD.indexOf('o'); // 4
nameD.lastIndexOf('o'); // 7

const nameZ = 'Easy and Frontend';
nameZ.startsWith('easy'); // false
nameZ.startsWith('Easy'); // true
nameZ.startsWith('and'); // false
nameZ.includes('Easy'); // true
nameZ.includes('and'); // true
nameZ.includes('Frontend'); // true
nameZ.endsWith('Frontend'); // true
nameZ.endsWith('and'); // false
nameZ.endsWith('frontend'); // false
