// 递归的方式
function deepCopy(obj) {
  if (!obj || typeof obj === "undefined") return;

  let deepCopy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      deepCopy[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    }
  }
}
