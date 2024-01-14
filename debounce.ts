type handler = (...args: any[]) => any;

function debounce<T extends handler>(fn: T, delay: number): T {
  let timerId: number | null;

  return ((...args: Parameters<T>) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }) as T;
}

// const handleInput = () => {
//   console.log("hey");
//   return 123;
// };
// type inputFn = (...args: any[]) => number;

// debounce<inputFn>(handleInput, 200);
