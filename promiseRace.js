Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    // loop promises
    promises.forEach((promise) => {
      if (promise instanceof Promise) {
        promise
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        resolve(promise);
      }
    });
  });
};
