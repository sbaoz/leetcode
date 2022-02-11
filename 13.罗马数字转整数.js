/*
 * @Author: your name
 * @Date: 2022-02-11 09:30:56
 * @LastEditTime: 2022-02-11 10:41:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \leetcode\13.罗马数字转整数.js
 */
/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const arr = [];
  const length = s.length;
  const map = new Map();
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);
  map.set("IV", 4);
  map.set("IX", 9);
  map.set("XL", 40);
  map.set("XC", 90);
  map.set("CD", 400);
  map.set("CM", 900);
  for (let i = 0, j = i + 1, curRoman, nextRoman; i < length; ) {
    curRoman = s[i++];
    nextRoman = s[j++];
    if (
      (curRoman === "I" && (nextRoman === "V" || nextRoman === "X")) ||
      (curRoman === "X" && (nextRoman === "L" || nextRoman === "C")) ||
      (curRoman === "C" && (nextRoman === "D" || nextRoman === "M"))
    ) {
      arr.push(curRoman + nextRoman);
      i++;
      j++;
    } else {
      arr.push(curRoman);
    }
  }
  const result = arr.reduce((pre, cur) => {
    return (pre += map.get(cur));
  }, 0);
  return result;
};
// @lc code=end
