/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);

  nums.forEach((num, idx, self) => {
    if (idx > 0 && num === nums[idx - 1]) {
      return;
    }

    let l = idx + 1;
    let r = self.length - 1;
    while (l < r) {
      let threeSum = num + nums[l] + nums[r];
      if (threeSum > 0) {
        r -= 1;
      } else if (threeSum < 0) {
        l += 1;
      } else {
        result.push([num, nums[l], nums[r]]);
        l += 1;
        while (nums[l] === nums[l - 1] && l < r) {
          l += 1;
        }
      }
    }
  });
  return result;
};
