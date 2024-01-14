/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let idx = 0;
  for (let r = 0; r < nums.length; r++) {
    if (nums[r] !== 0) {
      let temp = nums[idx];
      nums[idx] = nums[r];
      nums[r] = temp;
      idx += 1;
    }
  }
  return nums;
};

let nums = [0, 1, 0, 3, 12];

console.log(moveZeroes(nums));
