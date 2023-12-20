function shallowCopy(obj) {
  if (!obj && typeof obj == "undefined") return;
  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    // to make sure that all come from my own instead of properties from the prototype chain!
    if (obj.hasOwnProperty(key)) {
      copy[key] = obj[key];
    }
  }
  return copy;
}
myarry = [{ name: "jason" }, 43, 567, 1];
const a = shallowCopy(myarry);
console.log(a);
console.log(a[0] === myarry[0]);

// in real life, we use 'concat' or 'slice' to shallow copy 'arrays'
// and we use 'Object.assign()' to shallow copy 'Obj'
