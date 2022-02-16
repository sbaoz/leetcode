/*
 * @Author: your name
 * @Date: 2022-02-15 09:50:11
 * @LastEditTime: 2022-02-16 16:07:21
 * @LastEditors: Please set LastEditors
 * @Description: 双指针
 * @FilePath: \leetcode\26.删除有序数组中的重复项.js
 */
/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let fast = 1;
  let slow = 1;
  while (fast < nums.length) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
};
// @lc code=end
