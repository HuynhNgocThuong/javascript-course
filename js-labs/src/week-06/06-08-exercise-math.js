// 1. Write a function to calculate the area of a rectangle
function calcAreaOfRectangle(a, b) {
  if (a <= 0 || b <= 0) return -1;
  return a * b;
}
console.log(calcAreaOfRectangle(0, 1));
console.log(calcAreaOfRectangle(4, 2));

// 2. Write a function to calculate perimeter of a rectangle
function calcPerimeterOfRectangle(a, b) {
  if (a <= 0 || b <= 0) return -1;
  return (a + b) * 2;
}
console.log(calcPerimeterOfRectangle(4, 2));

// 3. Write a function to calculate the area of a circle
// S = PI * R * R
function calcAreaOfCircle(r) {
  if (r <= 0) return -1;
  return Math.PI * r * r;
}
console.log;
