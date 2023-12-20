const arr = new Array(1, 2, 3);
arr.sort();

arr.__proto__ === Array.prototype; // true
console.log(Object.prototype); // null
