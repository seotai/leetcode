/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let arr = Array(nums.length).fill(0)
    for (let i = 0 ; i < nums.length; i ++) {
        let before = arr[i - 2] !== undefined ? arr[i - 2] : 0
        let after = arr[i - 1] !== undefined ? arr[i - 1] : 0
        arr[i] = Math.max(before + nums[i], after)
    }
    return arr[nums.length - 1]
};