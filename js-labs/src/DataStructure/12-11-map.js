// Refer:  https://www.educative.io/blog/what-is-javascript-map#whatismap
const cityList = [
  { id: 1, name: 'TP. Hồ Chí Minh' },
  { id: 2, name: 'TP. Phan Thiê ́t' },
];
const studentList = [
  { id: 123, name: 'Alice', cityId: 1 },
  { id: 321, name: 'Bob', cityId: 2 },
];

// Question: how to show city name for each student?
const cityMap = cityList.reduce((map, city) => {
  map[city.id] = city;
  return map;
}, {});

console.log(cityMap);
const map = new Map();
map.size; // 0
const map = new Map([
  ['a', 1],
  ['b', 2],
  [3, 3],
]);
map.size; // 3
const map = new Map();
map.set('a', 1);
map.set('a', 2);
map.size; // 1
map.get('a'); // 2
map.get('b'); // undefined
map.delete('b'); // false
map.delete('a'); // true
map.get('a'); // undefined
map.size; // 0

const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
for (const [key, value] of map) {
  console.log(key, value);
}
for (const key of map.keys()) {
  console.log(key);
}
for (const value of map.values()) {
  console.log(value);
}
map.forEach((value, key) => {
  console.log(key, value);
});
// a 1
// b 2
// c 3

const studentList = [
  { id: 123, name: 'Alice', cityId: 1 },
  { id: 321, name: 'Bob', cityId: 2 },
];
const keys = Object.keys(studentList);
console.log(studentList[keys[0]]);
console.log(studentList[keys[1]]);

// Question: how to show city name for each student?
// using forEach
const cityMap = new Map();
cityList.forEach((city) => {
  cityMap.set(city.id, city);
});
// or using reduce
const cityMap = cityList.reduce((map, city) => {
  map.set(city.id, city);
  return map;
}, new Map());
cityMap.get(1).name; // TP. Hô ̀ Chí Minh
cityMap.get(2).name; // TP. Phan Thiê ́t

// Refer:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
