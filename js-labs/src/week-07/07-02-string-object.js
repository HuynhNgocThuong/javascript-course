'Easy Frontend'.charAt(0); // E
'Easy Frontend'.charAt(3); // y
const name = 'Easy Frontend';
name.charAt(name.length - 1); // d (the last character)
''.concat('Easy'); // 'Easy'
''.concat('Easy', ' ', 'Frontend'); // 'Easy Frontend'

'a'.padStart(5, '*'); // ****a
'ab'.padStart(5, '*'); // ***ab
'abc'.padStart(5, '*'); // **abc
'a'.padEnd(5, '*'); // a****
'ab'.padEnd(5, '*'); // ab***
'abc'.padEnd(5, '*'); // abc**
