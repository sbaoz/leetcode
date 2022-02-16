/*
 * @Author: your name
 * @Date: 2022-02-11 10:57:22
 * @LastEditTime: 2022-02-16 16:08:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \leetcode\14.最长公共前缀.js
 */
/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs = strs.sort((a, b) => a.length - b.length);
  let result = strs.splice(0, 1)[0];
  let minLength = result.length;
  let eqCnt = 0;
  while (minLength >= 0) {
    eqCnt = 0;
    result = result.slice(0, minLength);
    strs.forEach((str) => {
      str = str.slice(0, minLength);
      if (result === str) {
        eqCnt++;
      }
    });
    if (eqCnt === strs.length) {
      break;
    } else {
      minLength--;
    }
  }
  return result;
};
// @lc code=end
