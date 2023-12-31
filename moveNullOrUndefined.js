const arrayWithNulls = [1, 2, null, 3, 4, undefined, 5];
const cleanedArry = arrayWithNulls.flatMap((item) => (item ? [item] : []));
