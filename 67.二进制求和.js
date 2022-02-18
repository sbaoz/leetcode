/*
 * @Author: your name
 * @Date: 2022-02-18 10:41:37
 * @LastEditTime: 2022-02-18 12:10:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \leetcode\67.二进制求和.js
 */
/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const len = Math.max(a.length, b.length);
  let ans = [];
  // 交换数组内容 循环按照更长的数组处理
  if (b.length > a.length) {
    ans = a;
    a = b;
    b = ans;
    ans = [];
  }
  const j = a.length - b.length;
  let flg = false;
  // 数组倒序处理
  for (let i = len - 1; i >= 0; i--) {
    // 处理1+1进位
    if (
      (a[i] === "1" && b[i - j] === "1" && !flg) ||
      (((a[i] === "1" && b[i - j] === "0") ||
        (a[i] === "0" && b[i - j] === "1") ||
        (a[i] === "1" && typeof b[i - j] === "undefined")) &&
        flg)
    ) {
      ans.unshift("0");
      flg = true;
    }
    // 处理已经存在进位 本次计算还是进位的情况
    else if (flg && a[i] === "1" && b[i - j] === "1") {
      ans.unshift("1");
      flg = true;
    } 
    // 处理单纯进位 本次计算不存在进位的情况
    else if (flg) {
      ans.unshift("1");
      flg = false;
    } 
    // 处理不存在进位的情况 分成数组长度一致和不一致的情况
    else {
      ans.unshift(+a[i] + (typeof b[i - j] === "undefined" ? 0 : +b[i - j]));
    }
  }
  // 处理完所有的元素后还存在进位未处理的情况
  if (flg) {
    ans.unshift("1");
  }
  return ans.join("");
};
// @lc code=end
