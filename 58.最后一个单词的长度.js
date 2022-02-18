/*
 * @Author: your name
 * @Date: 2022-02-18 08:02:36
 * @LastEditTime: 2022-02-18 08:07:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /leetcode/58.最后一个单词的长度.js
 */
/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let ans = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      ans++;
    } else {
      if (ans > 0) {
        break;
      }
      ans = 0;
    }
  }
  return ans;
};
// @lc code=end
