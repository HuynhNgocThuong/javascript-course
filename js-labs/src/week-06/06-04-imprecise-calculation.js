/**
 * Imprecise Calculations
 */
0.3 === 0.1 + 0.2; // true or false ???

console.log((0.1).toFixed(20));
console.log((0.2).toFixed(20));
console.log((0.1 + 0.2).toFixed(20));
console.log((0.3).toFixed(20));
console.log(0.1 + 0.2 == 0.3);
console.log(0.1 + 0.2 === 0.3);
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);
console.log((0.1 + 0.2).toFixed(1) === (0.3).toFixed(1));
