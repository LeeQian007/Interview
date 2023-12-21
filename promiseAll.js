// when upload files by slice. it is essetial to use Promise.all
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    if (typeof promises[Symbol.iterator] !== "function")
      return reject("Type error");

    if (promises.length === 0) return resolve([]);
    else {
      const res = [];
      const maxLen = promises.length;
      // to count how many finished
      let count = 0;

      for (let i = 0; i < maxLen; i++) {
        Promise.resolve(promises[i])
          .then((data) => {
            res[i] = data;
            count++;
            if (count === maxLen) {
              resolve(res);
            }
          })
          .catch((err) => {
            reject(err);
          });
      }
    }
  });
};
