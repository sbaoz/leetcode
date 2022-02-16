/*
 * @Author: your name
 * @Date: 2022-02-15 11:12:27
 * @LastEditTime: 2022-02-16 09:25:38
 * @LastEditors: Please set LastEditors
 * @Description: 双指针
 * @FilePath: \leetcode\27.移除元素.js
 */
/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let fast = 0;
  let slow = 0;
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      if (fast !== slow) {
        nums[slow] = nums[fast];
        nums[fast] = val;
      }
      slow++;
    }
    fast++;
  }
  return slow;
};
// @lc code=end
