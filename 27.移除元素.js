/*
 * @Author: your name
 * @Date: 2022-02-15 11:12:27
 * @LastEditTime: 2022-02-15 11:52:32
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
