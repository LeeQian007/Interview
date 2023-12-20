function group(objArr, groupBy) {
  const result = {};
  // 遍历数组
  for (let arrObj of objArr) {
    // say we wanna groupBy age and address
    // groupBy is a function and take a Obj, and then return a string "age-address", "18-Shanghai"
    const groupKey = groupBy(arrObj);

    if (result[groupKey]) {
      // 向数组末尾添加一个或多个元素，并返回新的长度。
      // 在已有cate的里面加Obj
      result[groupKey].push(arrObj);
    } else {
      // 初始化新的cate，然后丢进去第一个obj
      result[groupKey] = [arrObj];
    }

    return result;
  }
}

const objArr = [
  {
    name: "小明",
    age: 18,
    address: "上海",
  },
  {
    name: "小红",
    age: 18,
    address: "北京",
  },
  {
    name: "小王",
    age: 20,
    address: "上海",
  },
  {
    name: "小芳",
    age: 19,
    address: "北京",
  },
  {
    name: "小绿",
    age: 18,
    address: "上海",
  },
  {
    name: "小张",
    age: 19,
    address: "上海",
  },
];

console.log(group(objArr, (item) => `${item.age}-${item.address}`));
