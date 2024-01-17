/**
 * @param {number[]} height
 * @return {number}
 */
var maxAge = function (height) {
  let l = 0;
  let r = height.length - 1;
  let area = 0;

  // width --> be smaller
  for (let width = height.length - 1; width > 0; width--) {
    area = Math.max(area, width * Math.min(height[l], height[r]));
    if (height[r] > height[l]) {
      l += 1;
    } else {
      r -= 1;
    }
  }
};

// var maxArea = function (height) {
//   let result = 0;
//   for (let left = 0; left < height.length; left++) {
//     for (let right = 0; right < height.length - left; right++) {
//       let area = (right - left) * Math.min(right, left);
//       result = Math.max(result, area);
//     }
//   }
//   return result;
// };

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
