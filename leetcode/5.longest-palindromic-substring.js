/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = "";
  let resultLen = 0;

  for (let i = 0; i < s.length; i++) {
    let l = i;
    let r = i;
    while (l >= 0 && r <= s.length && s.charAt(l) === s.charAt(r)) {
      if (r - l + 1 > resultLen) {
        result = s.slice(l, r + 1);
        resultLen = result.length;
      }
      l -= 1;
      r += 1;
    }

    l = i;
    r = i + 1;
    while (l >= 0 && r <= s.length && s.charAt(l) === s.charAt(r)) {
      if (r - l + 1 > resultLen) {
        result = s.slice(l, r + 1);
        resultLen = result.length;
      }
      l -= 1;
      r += 1;
    }
  }

  return result;
};

longestPalindrome("babad");
