/*
 * @Author: your name
 * @Date: 2022-02-18 09:27:37
 * @LastEditTime: 2022-02-18 10:41:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \leetcode\66.加一.js
 */
/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 * 需要将数组末尾值为9的元素设置为0后做进位处理
 * 都是9的时候 要在数组最前面多加一个值为1的元素
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let idx = digits.length - 1;
  let flg = false;
  while (idx >= 0) {
    if (digits[idx] === 9) {
      digits[idx] = 0;
      flg = true;
    } else {
      digits[idx] = digits[idx] + 1;
      flg = false;
      break;
    }
    idx--;
  }
  if (flg) {
    digits.unshift(1);
  }
  return digits;
};
// @lc code=end
