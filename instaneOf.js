function myInstanceof(target, origin) {
  origin = origin.prototype;
  target = target.__prototype__;

  while (true) {
    if (target === null) {
      return false;
    }

    if (target === origin) {
      return true;
    }
    console.log(target);
    target = target.__prototype__;
  }
}

const arr = [1, 2, 3];
console.log(myInstanceof(arr, Array));
console.log(myInstanceof(arr, Object));

// what problem does instanceof solve?
class Test {}
const test = new Test();
Object.prototype.toString.call(test);
// will get : [object Object]

// test 是不是被 Test 构造出来
test instanceof Test; // true

// arr.__proto__ === Array.prototype   true
// arr.__proto__.__proto === OBject.prototype   true
