/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = binSearch(nums, target, true);
  let right = binSearch(nums, target, false);
  return [left, right];
  //
  function binSearch(nums, target, leftBias) {
    let l = 0;
    let r = nums.length - 1;
    let idx = -1;
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (target > nums[mid]) {
        l = mid + 1;
      } else if (target < nums[mid]) {
        r = mid - 1;
      } else {
        idx = mid;
        if (leftBias) {
          r = mid - 1;
        } else {
          l = mid + 1;
        }
      }
    }
    return idx;
  }
};

const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
console.log(searchRange(nums, 8));
