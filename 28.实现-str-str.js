/*
 * @Author: your name
 * @Date: 2022-02-16 10:09:06
 * @LastEditTime: 2022-02-16 14:15:38
 * @LastEditors: Please set LastEditors
 * @Description: 暴力实现 还有KMP算法的解法没看懂
 * @FilePath: \leetcode\28.实现-str-str.js
 */
/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) {
    return 0;
  } else if (!haystack) {
    return -1;
  }
  if (haystack && needle) {
    const cnt = needle.length;
    let idx = 0;
    let flg = true;
    while (idx + cnt <= haystack.length) {
      if (haystack[idx] === needle[0]) {
        flg = true;
        for (let j = 0; j < cnt; j++) {
          if (haystack[idx + j] !== needle[j]) {
            flg = false;
            break;
          }
        }
        if (flg) {
          return idx;
        }
      }
      idx++;
    }
    return -1;
  }
};
// @lc code=end
