/*
 * @Author: your name
 * @Date: 2022-02-10 13:37:36
 * @LastEditTime: 2022-02-10 16:59:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \leetcode\9.回文数.js
 */
/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let result = false;
  if (typeof x === "undefined" || x === null || x < 0) {
    result = false;
  } else {
    const xArr = Array.from(x.toString());
    const finIdx = Math.round(xArr.length / 2);
    let lIdx = 0;
    let rIdx = xArr.length - 1;
    do {
      if (xArr[lIdx++] !== xArr[rIdx--]) {
        result = false;
        break;
      } else {
        result = true;
      }
    } while (lIdx !== finIdx);
  }
  return result;
  // 不将整数转为字符串来解决这个问题
  //   if (x < 0 || (x % 10 === 0 && x !== 0)) {
  //     return false;
  //   }
  //   let y = 0;
  //   while (x > y) {
  //     y = y * 10 + (x % 10);
  //     x = Math.floor(x / 10);
  //   }
  //   return x === y || x === Math.floor(y / 10);
};
// @lc code=end
