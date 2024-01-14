// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 解释：需要合并 [1,2,3] 和 [2,5,6] 。
// 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
let nums1 = [2, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [1, 5, 6];
let n = 3;

function merge(nums1, m, nums2, n) {
  let lastIndex = m + n - 1;

  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[lastIndex] = nums1[m - 1];
      m -= 1;
    } else {
      nums1[lastIndex] = nums2[n - 1];
      n -= 1;
    }

    lastIndex -= 1;
  }

  // n = 1 ; lastIndex = 0
  while (n > 0) {
    nums1[lastIndex] = nums2[n - 1];
    n -= 1;
    lastIndex -= 1;
  }

  return nums1;
}

console.log(merge(nums1, m, nums2, n));
