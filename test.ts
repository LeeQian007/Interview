// type handleFn = (...args: any[]) => any;

// function debounce<T extends handleFn>(fn: T, dealy: number): T {
//   let timerId: number | null;

//   return ((...args: Parameters<T>) => {
//     if (timerId) {
//       clearTimeout(timerId);
//     }
//     setTimeout(() => {
//       fn.apply(this, args);
//     }, dealy);
//   }) as T;
// }
