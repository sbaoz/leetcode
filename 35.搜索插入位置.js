/*
 * @Author: your name
 * @Date: 2022-02-16 14:15:49
 * @LastEditTime: 2022-02-16 16:06:55
 * @LastEditors: Please set LastEditors
 * @Description: 二分法
 * @FilePath: \leetcode\35.搜索插入位置.js
 */
/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return left;
};
// @lc code=end
