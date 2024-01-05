from ast import List


class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        count = {}
        res, maxCount = 0
        # [3,4,2,3,3,3]
        for n in nums:
            count[n] = count.get(n, 0) + 1
            res = n if count[n] > maxCount else res
            maxCount = max(count[n], maxCount)
        return res
