/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (26.24%)
 * Likes:    2061
 * Dislikes: 0
 * Total Accepted:    210.1K
 * Total Submissions: 785.3K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？请你找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 示例：
 * 
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const arr = nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] === arr[i - 1]) continue;
        let start = i + 1;
        let end = arr.length - 1;
        while (start < end) {
            if (arr[i] + arr[start] + arr[end] === 0) {
                result.push([arr[i], arr[start], arr[end]]);
                start++;
                end--;
                while (start < end && arr[start] === arr[start - 1]) {
                    start++;
                }
                while (start < end && arr[end] === arr[end + 1]) {
                    end--;
                }
            } else if (arr[i] + arr[start] + arr[end] > 0) {
                end--;
            } else {
                start++;
            }
        }
    }
    return result;
};


const result = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(result);

// @lc code=end