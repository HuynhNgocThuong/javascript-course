// Refer: https://www.geeksforgeeks.org/recursive-functions/
/**
 * BASE CASE (termination point)
 * The memory is incremented by the number of times a recursive function is called
 * Mobile has very limited memory space to execute any apps. If you are developing a mobile application, avoid using recursion.
 * */

//  https://www.csestack.org/recursion/#Interview_Questioned_asked_about_recursion
/**
 * Type of recursion
 * https://www.csestack.org/recursion/
 */

// using recursive function
function calculateS(n) {
  // base case
  if (n <= 0) return 0;
  // tail recursion
  return n + calculateS(n - 1);
}
calculateS(5); // 15
// S(5) = 5 + S(4)
// S(4) = 4 + S(3)
// S(3) = 3 + S(2)
// S(2) = 2 + S(1)
// S(1) = 1 + S(0)
// S(0) = 0 BASE CASE / TERMINATION

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
