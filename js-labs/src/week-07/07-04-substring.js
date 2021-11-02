// slice
'Easy Frontend'.slice(0, 4); // 'Easy'
'Easy Frontend'.slice(2); // 'sy Frontend'
'Easy Frontend'.slice(-3); // 'end'
'Easy Frontend'.slice(-3, -1); // 'en'

// substring
'Easy Frontend'.substring(0, 4); // 'Easy'
'Easy Frontend'.substring(2); // 'sy Frontend'
'Easy Frontend'.substring(-3); // 'Easy Frontend'
'Easy Frontend'.substring(-3, -1); // ''

// slice vs substring
'Easy Frontend'.slice(4, 0); // ''
'Easy Frontend'.substring(4, 0); // 'Easy'
