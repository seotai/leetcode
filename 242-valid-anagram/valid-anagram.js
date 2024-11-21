/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    const sMap = new Map();
    for (const char of s) {
        if (sMap.has(char)) {
            sMap.set(char, sMap.get(char) +1)
        } else {
            sMap.set(char, 1)
        }
    }
    for (const tChar of t) {
        if (sMap.has(tChar)) {
            sMap.set(tChar, sMap.get(tChar) -1)
        }
    }
    let ans = 0
    sMap.forEach((i) => {
        if (i > 0) {
            ans += i
        }
    })
    if (ans === 0) return true
    return false
};
