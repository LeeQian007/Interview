/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const neededTarget = target - nums[i];

    if (hashMap.has(neededTarget)) {
      return [i, hashMap.get(neededTarget)];
    }

    hashMap.set(nums[i], i);
  }
};

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target)); // Output: [0, 1]
