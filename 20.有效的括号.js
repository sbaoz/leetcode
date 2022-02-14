/*
 * @Author: your name
 * @Date: 2022-02-11 14:07:20
 * @LastEditTime: 2022-02-14 13:32:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \leetcode\20.有效的括号.js
 */
/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = new Map([
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
  ]);
  if (s.length % 2 === 1) {
    return false;
  }
  const arr = [];
  for (let cur of s) {
    if (map.has(cur)) {
      arr.push(cur);
    } else {
      if (map.get(arr[arr.length - 1]) === cur) {
        arr.pop();
      } else {
        return false;
      }
    }
  }
  return arr.length === 0;
};
// @lc code=end
