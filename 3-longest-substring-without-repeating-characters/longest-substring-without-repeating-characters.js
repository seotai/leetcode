/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let res = [];
    for (let i = 0; i < s.length; i++) {
        while (res.includes(s[i])) {
            res.shift()
        };
        res.push(s[i])
        console.log(res)
        if (res.length > start) {
            start = res.length
        }
    }
    return start
};