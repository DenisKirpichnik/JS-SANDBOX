/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

//  '?' Matches any single character.
//  '*' Matches any sequence of characters (including the empty sequence).

var isMatch = function (s, p) {
  if (p === "*" || s === p) {
    return true;
  }
};

console.log(isMatch("aa", "*"));
