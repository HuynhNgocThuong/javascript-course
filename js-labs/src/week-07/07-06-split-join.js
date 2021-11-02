// Split
'easy'.split(); // ['easy']
'easy'.split(' '); // ['easy']
'easy'.split('-'); // ['easy']
'easy'.split('as'); // ['e', 'y']
'easy'.split(''); // ['e', 'a', 's', 'y']

// count words
const nameH = 'Easy Frontend';
const words = nameH.split(' '); // ['Easy', 'Frontend']
console.log(words.length); // 2

const words = ['Easy', 'Frontend'];
words.join(); // 'Easy,Frontend' as default separator is comma
words.join(''); // 'EasyFrontend'
words.join(' '); // 'Easy Frontend'
words.join('-'); // 'Easy-Frontend'
