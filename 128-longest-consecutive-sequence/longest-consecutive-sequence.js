/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numsSet = new Set(nums)
    const arr = [...numsSet].sort((a, b) => a - b)
    let cnt = 1, ans = 0
    for (let i = 0; i < arr.length - 1; i ++) {
        if (arr[i + 1] - arr[i] === 1) {
            cnt += 1
            if (ans < cnt) ans = cnt
        } else {
            if (ans < cnt) ans = cnt
            cnt = 1
        }
    }
    if (arr.length === 1) return 1
    return ans
};