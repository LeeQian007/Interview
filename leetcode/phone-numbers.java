// 回溯算法

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

// input: "278"
class Solution {
    public List<String> letterCombinations(String digits) {
        List<String> combinations = new ArrayList<String>();
        if(digits.length() == 0) {
            return combinations;
        }
        Map<Character, String> phoneMap = new HashMap<Character, String>() {{
            put('2', "abc");
            put('3', "def");
            put('4', "ghi");
            put('5', "jkl");
            put('6', "mno");
            put('7', "pqrs");
            put('8', "tuv");
            put('9', "wxyz");
        }};
        // 本质： 使用递归 来嵌套n个for loop
        backtrack(combinations, phoneMap, digits, 0, new StringBuffer());
        
        return combinations;
    }

    // digits: 23

    public void backtrack(List<String> combinations, Map<Character,String> phoneMap, String digits, int index, StringBuffer combination) {
        if(index == digits.length()) {
            combinations.add(combination.toString());
        } else {
            char digit = digits.charAt(index);   // 2
            String letters = phoneMap.get(digit);  // "abc"
            int lettersCount = letters.length();  // 3
            for (int i = 0 ; i< lettersCount; i++) {
                // A thread-safe, mutable sequence of characters. A string buffer is like a String, but can be modified.
                combination.append(letters.charAt(i)); // a
                backtrack(combinations, phoneMap, digits, index+1, combination);
            }
        }
    }
}

