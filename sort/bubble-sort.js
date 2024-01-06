function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// 示例
var myArray = [4, 2, 7, 1, 9, 5];
console.log("原始数组: " + myArray);
var sortedArray = bubbleSort(myArray);
console.log("排序后数组: " + sortedArray);
