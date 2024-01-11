// spread operatorconst obj1 = { a: 1, b: 2 };
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj);
// 输出: { a: 1, b: 3, c: 4 }

console.log(Object.assign(obj1, obj2));

// 注意事项：
// 扩展运算符和 Object.assign 都是浅拷贝，如果对象的属性值是对象或数组等引用类型，只会复制引用，而不会进行深度复制。
// Lodash 的 merge 方法可以执行深度合并，适用于复杂嵌套结构的对象。
