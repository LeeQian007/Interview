/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let A = nums1;
  let B = nums2;
  let total = nums1.length + nums2.length;
  const half = Math.floor(total / 2);

  // binary search the short one
  if (B.length < A.length) {
    let temp = A;
    A = B;
    B = temp;
  }

  let l = 0;
  let r = A.length - 1;
  while (true) {
    let mid = Math.floor((l + r) / 2); // mid of A
    let mid_B = half - mid - 2; // mid of B

    let A_left = A[mid]; // 3
    let A_right = A[mid + 1]; // 4

    let B_left = B[mid_B]; // 21
    let B_right = B[mid_B + 1]; // 57

    // partition is correct!
    if (A_left <= B_right && B_left <= A_right) {
      if (total % 2) {
        return min(A_right, B_right);
      }
      return max(A_left, B_left) + min(A_right, B_right);
    } else if (A_left > B_right) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
};
