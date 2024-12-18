/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let ans = {}
    for (let str of strs) {
        let key = str.split('').sort().join('')
        if (!ans[key]) {
            ans[key] = []
        }
        ans[key].push(str)
    }
    return Object.values(ans)
};