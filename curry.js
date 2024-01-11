// const sum = curry(1)(2)  // 3
// const sum = curry(1)(3)  // 4
// 每次调用函数时，它只接受"一部分参数"，并返回一个"函数"，直到传递所有参数为止。
// 场景： 减少不必要的固定入参

// const add = (x) => (y) => (z) => x + y + z;

function curry(fn, ...args) {
  return args.length >= fn.length
    ? fn(...args)
    : (..._args) => curry(fn, ...args, ..._args);
}

function add(x, y, z) {
  return x + y + z;
}

const newCurryFn = curry(add);
console.log(newCurryFn(1, 2)(3));
