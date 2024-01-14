const lengthenOf = function (substring) {
  // absaidjawa
  let result = 0;
  let left = 0;
  // to store the window
  const charSet = new Set();

  for (let right = 0; right < substring.length; right++) {
    while (charSet.has(substring.charAt(right))) {
      charSet.delete(substring.charAt(left));
      left += 1;
    }
    charSet.add(substring.charAt(right));
    result = Math.max(result, right - left + 1);
  }

  return result;
};

const s = "pwwkew";

console.log(lengthenOf(s));
