const arrayWithNulls = [1, 2, null, 3, 4, undefined, 5];
// flatMap can use flat and map at the same time but "only depth with 1"
const cleanedArry = arrayWithNulls.flatMap((item) => (item ? [item] : []));
const a = arrayWithNulls.map((value) => {
  return value ? [value] : [];
});
console.log(a);
