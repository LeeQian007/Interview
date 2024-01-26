Promise.myAll = function (proms) {
  let res, rej;

  const p = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });

  const result = [];
  let count = 0;

  // proms: is a iterable thing so use for of
  for (const prom of proms) {
    // i for obtain index
    // fulFilledCount for counting total resolves
    // count for checking wether is iterable.
    const i = count;
    let fulFilledCount = 0;
    count++;
    // It takes one or two optional arguments: a function to be executed when the promise is resolved, and an optional function to be executed when the promise is rejected.
    Promise.resolve(prom)
      .then((data) => {
        // can use push because we want the same order
        result[i] = data;
        fulFilledCount++;
        if (fulFilledCount === count) {
          res(result);
        }
      })
      .catch((err) => {
        rej(err);
      });
  }

  if (count === 0) {
    res(result);
  }

  return p;
};

Promise.all([]).then((data) => {
  console.log(data);
});
