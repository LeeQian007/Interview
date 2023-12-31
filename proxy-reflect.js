// 目标： arr[-1] = 4
const arr = [1, 2, 3, 4];

function createArray(arr) {
  let handler = {
    // target --> arr
    // index --> -1
    // receiver --> proxy obj
    get(target, index, receiver) {
      index = Number(index);
      if (index < 0) {
        index += target.length;
      }
      return Reflect.get();
    },
  };

  // Creates a Proxy object. The Proxy object allows you to create an object that can be used in place of the original object, but which may redefine fundamental Object operations like "getting, setting, and defining properties". Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs.
  return new Proxy(arr, handler);
}

const newArr = createArray(arr);
console.log(newArr[-1]);
