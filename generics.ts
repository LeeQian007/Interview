function getFirstElement<T>(array: T[]) {
  return array[0];
}

const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers);

//
const input = document.querySelector<HTMLInputElement>(".input");
input?.value;

//
const map = new Map<string, Map<string, number>>();

//
type ApiResponse<Data extends object> = {
  data: Data;
  isError: boolean;
};
type UserResponse = ApiResponse<{ name: string; age: number }>;
type BlogResponse = ApiResponse<{ title: string; likes: number }>;
const response: UserResponse = {
  data: {
    name: "kyle",
    age: 28,
  },
  isError: false,
};

const a: ApiResponse<{ name: string }> = {
  data: { name: "ll" },
  isError: false,
};
