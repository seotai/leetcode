/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mapp = new Map(), lens = nums.length
    for (let i = 0; i < lens; i++) {
        const pair = target - nums[i]
        if (mapp.has(pair)) {
            return [mapp.get(pair), i]
        } else {
            mapp.set(nums[i], i)
        }
    }

};