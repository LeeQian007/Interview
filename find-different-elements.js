function findUniqueElements(arr1, arr2) {
  return arr1
    .filter((element) => !arr2.includes(element))
    .concat(arr2.filter((element) => !arr1.includes(element)));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const uniqueElements = findUniqueElements(array1, array2);
console.log(uniqueElements); // 输出 [1, 2, 6, 7]

// find-different-elements
