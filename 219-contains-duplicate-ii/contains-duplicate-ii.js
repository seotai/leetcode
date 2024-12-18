/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let mapp = new Map()
    for (let i = 0; i < nums.length; i ++) {
        if (i - mapp.get(nums[i]) <= k) return true
        mapp.set(nums[i], i)
    }
    return false
};