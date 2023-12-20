import java.util.HashMap;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        // value  --  index
        HashMap<Integer, Integer> hashTable = new HashMap<Integer, Integer>();
        for(int i = 0 ; i<nums.length ; i++) {
            int needed = target - nums[i];
            if(hashTable.containsKey(needed)) {
                // return value is a list and with indexes
                return new int[]{hashTable.get(needed),i};
            } else {
                hashTable.put(nums[i], i);
            }
        }
        // 如果没有找到就返回一个长度为 0 的整数数组
        return new int[0];
    }
}