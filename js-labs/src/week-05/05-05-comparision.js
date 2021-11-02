/**
 * Number Comparision
 */
// Greater than / Less than
1 > 2; // false
1 < 2; // true
// Greater than or equal / Less than or equal
1 >= 2; // false
2 <= 2; // true
// Equal / Not equal
1 == 2; // false
1 != 2; // true

/**
 * String Comparision
 */
'a' > 'b'; // false
'aa' <= 'b'; // true (longer doesn't mean will be greater  )
'abc' > 'abd'; // false (because c is less than d)
'a' > 'A'; // true
'A' > '9'; // true
'easy' == 'easy'; // true
'easy frontend' != 'easy'; // true
'easy frontend' > 'easy'; // true

/**
 * Boolean Comparision
 */
true > false; // true
true == true; // true
true == false; // false
true != false; // true

/**
 * Type Data Comparision
 */
123 == '123'; // true because '123' will be converted to 123
123 == '0123'; // true because '0123' will be converted to 123
false == 0; // true because false will be converted to 0
true == 1; // true because true will be converted to 1
'0' == false; // true
'2' > true; // true
'123' >= 100; // true

// Refer: https://getify.github.io/coercions-grid/

/**
 * Strict Equality Comparision
 * Fisrtly, compare data type, then compare data value
 */
111 === '111'; // false because they are different data types
0 === false; // false
'' === 0; // false
1 === 1; // true
'abc' === 'abc'; // true

/**
 * null/undefined Comparision
 *
 */
// non-strict ==, null and undefined equal but not any other value.
null == undefined; // true
// strict check ===
null === undefined; // false because they are different type
// other comparisons
// null will converted to 0
// undefined will converted to NaN
null > 0; // false
null == 0; // false
null >= 0; // true WHAT??? 
