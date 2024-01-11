function deepClone(obj, visited = new WeakMap()) {
  if (typeof obj === "object" && obj !== null) {
    if (visited.has(obj)) {
      return visited.get(obj);
    }

    let cloneTarget = Array.isArray(obj) ? [] : {};
    visited.set(obj, cloneTarget);

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloneTarget[key] = deepClone(obj[key], visited);
      }
    }

    return cloneTarget;
  } else {
    return obj;
  }
}
