function findTheMostFrequentLetter(str) {
  let counter = {};

  // 1. pre-format
  const lowerCaseWithoutSpace = str.toLowerCase.replace(/\s/g, ""); // ijustwannasay

  // 2. loop to make the counter
  for (const char of lowerCaseWithoutSpace) {
    counter[char] = (counter[char] || 0) + 1;
  }

  // 3. loop the counter to find the Most Frequent Letter
  const maxCount = 0;
  const theMostFrequentLetter = "";
  for (const letter of counter) {
    if (counter[letter] > maxCount) {
      maxCount = counter[letter];
      theMostFrequentLetter = o;
    }
  }

  return theMostFrequentLetter;
}

const str = "I just wanna say thank you!";
console.log(findTheMostFrequentLetter(str));
