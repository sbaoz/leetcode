/*
 * @Author: your name
 * @Date: 2022-02-17 09:22:39
 * @LastEditTime: 2022-02-17 16:20:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \leetcode\53.最大子数组和.js
 */
/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  /**
   * 贪心算法
   */
  //   let max = nums[0];
  //   let tmpVal = null;
  //   for (let i = 0; i < nums.length; i++) {
  //     if (tmpVal === null) {
  //       tmpVal = nums[i];
  //     } else {
  //       // 之前元素的和小于0并且当前指针的值大于之前元素的和 丢弃当前元素之前的和
  //       if (tmpVal < 0 && nums[i] > tmpVal) {
  //         tmpVal = nums[i];
  //       } else {
  //         tmpVal += nums[i];
  //       }
  //     }
  //     if (tmpVal > max) {
  //       max = tmpVal;
  //     }
  //   }
  //   return max;
  /**
   * 动态规划
   * 以子序列的结束节点为基准 可以产生递推关系 采用动态规划时 经常通过此种遍历方式
   */
  let max = nums[0];
  let tmpVal = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > tmpVal + nums[i]) {
      tmpVal = nums[i];
    } else {
      tmpVal = tmpVal + nums[i];
    }
    if (tmpVal > max) {
      max = tmpVal;
    }
  }
  return max;
};
// @lc code=end
