// JSON.parse(text) JSON -> Javascript value
// JSON.stringify(value) Javascript value -> JSON string

const student = { id: 1, name: 'Easy Frontend', age: undefined };
JSON.stringify(student); // '{"id": 1, "name": "Easy Frontend" }'

const list = [null, undefined, NaN];
JSON.stringify(list); // [null, null, null]

// Refer: https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

JSON.parse('123'); // 123
JSON.parse('true'); // true
JSON.parse('null'); // null
JSON.parse('{}'); // {}
JSON.parse('[]'); // []
JSON.parse('0123'); // Syntax Error
JSON.parse('NaN'); // Syntax Error
JSON.parse('Infinity'); // Syntax Error
// property name must use double quotes
JSON.parse("{ 'id': 123 }"); // Syntax Error
JSON.parse('{ "id": 123 }'); // { id: 123 } it works
// Not allow trailing commas
JSON.parse('[1, 2, 3, 4, ]');
JSON.parse('{"foo" : 1, }');

// Refer: https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#json.parse_does_not_allow_trailing_commas;
