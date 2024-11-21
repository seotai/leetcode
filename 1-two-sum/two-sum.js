/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let lens = nums.length
    for (let i = 0; i < lens; i++) {
        for (let j = i + 1; j < lens; j++) {
            if (nums[i] + nums[j] === target) return [i, j]
        }
    }
};