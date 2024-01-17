/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];

  if (nums.length === 1) {
    return [nums];
  }

  for (let i = 0; i < nums.length; i++) {
    let n = nums.shift();
    // console.log(n);

    let perms = permute(nums);
    // console.log("im perms", perms);

    // [3]
    perms.forEach((perm) => {
      result.push([n, ...perm]); // Use spread operator to create a new array with n at the beginning
    });

    nums.push(n);
  }

  return result;
};

const nums = [1, 2, 3];

// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute(nums));
