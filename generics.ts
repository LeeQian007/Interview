// function getFirstElement<T>(array: T[]) {
//   return array[0];
// }

// const numbers = [1, 2, 3];
// const firstNum = getFirstElement(numbers);

// //
// const input = document.querySelector<HTMLInputElement>(".input");
// input?.value;

// //
// const map = new Map<string, Map<string, number>>();

// //
// type ApiResponse<Data extends object> = {
//   data: Data;
//   isError: boolean;
// };
// type UserResponse = ApiResponse<{ name: string; age: number }>;
// type BlogResponse = ApiResponse<{ title: string; likes: number }>;
// const response: UserResponse = {
//   data: {
//     name: "kyle",
//     age: 28,
//   },
//   isError: false,
// };

// const a: ApiResponse<{ name: string }> = {
//   data: { name: "ll" },
//   isError: false,
// };

// type Store = {
//   name: string;
//   age: number;
//   friends: string[];
// };

// const store = createStore<Store>({
//   name: "bob",
//   age: 20,
//   friends: [],
// });

// const age = store.get("age");
// store.set("age", (currentAge) => currentAge + 1);

// //
// function createStore<T extends Record<string, any>>(initialState: T) {
//   const store = initialState;
//   return {
//     get<K extends keyof T>(key: K) {
//       return store[key];
//     },
//     set<K extends keyof T>(key: K, callback: (current: T[K]) => T[K]) {
//       store[key] = callback(store[key]);
//     },
//   };
// }

// type MyStore = typeof store;

// // type m = ReturnType

// function Header(store: MyStore) {
// store.set();
// }
