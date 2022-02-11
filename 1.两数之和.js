/*
 * @Author: your name
 * @Date: 2022-02-10 09:35:45
 * @LastEditTime: 2022-02-10 13:32:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \leetcode\1.两数之和.js
 */
/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  nums = nums.map((num, index) => ({
    num,
    index,
  }));
  nums = nums.sort((a, b) => a.num - b.num);
  let aIdx = 0;
  let bIdx = nums.length - 1;
  let result = [];
  while (aIdx !== bIdx) {
    if (nums[aIdx].num + nums[bIdx].num === target) {
      result = [nums[aIdx].index, nums[bIdx].index];
      break;
    } else if (nums[aIdx].num + nums[bIdx].num > target) {
      --bIdx;
    } else if (nums[aIdx].num + nums[bIdx].num < target) {
      ++aIdx;
    }
  }
  return result;
};
// @lc code=end
