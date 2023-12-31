function range(start: number, end: number, step = 1) {
  return {
    // so you can use in "for of loop"
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (start < end) {
        start = start + step;
        return { value: start, done: false };
      }
      return { done: true, value: end };
    },
  };
}

for (const n of range(0, 20, 5)) {
  console.log(n);
}
