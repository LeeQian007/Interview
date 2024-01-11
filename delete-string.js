function deletestring(str1, str2) {
  // aeiou
  // ["a", "e", "i", "o", "u"]
  const strArr = str2.split("");

  for (let char of str1) {
    if (strArr.includes(char)) {
      str1 =
        str1.slice(0, str1.indexOf(char)) + str1.slice(str1.indexOf(char) + 1);
    }
  }
  return str1;
}

console.log(deletestring("They are students.", "aeiou"));
