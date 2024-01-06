function insertSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    const currentElement = arr[i];

    let j = i - 1;
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentElement;
  }
  return arr;
}

// 示例
var myArray = [4, 2, 7, 1, 9, 5];
console.log("原始数组: " + myArray);
var sortedArray = insertSort(myArray);
console.log("排序后数组: " + sortedArray);
