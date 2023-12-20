// new set method
let array = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = [...new Set(array)];
console.log(uniqueArray);

// filter method
let uniqueArray2 = array.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
