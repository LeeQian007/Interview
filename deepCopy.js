// 递归的方式
function deepCopy(obj) {
  if (typeof obj === "object" && obj != null) {
    // typeof null --> object
    let cloneTarget = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
      cloneTarget[key] = deepCopy(obj[key]);
    }
    return cloneTarget;
  } else {
    return obj;
  }
}
