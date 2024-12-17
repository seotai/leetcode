/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let arr = Array(nums.length).fill(1)
    let left = nums[0], right = nums[nums.length - 1]
    for (let i = 1; i < nums.length; i ++) {
        arr[i] *= left
        left *= nums[i]
        
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        arr[i] *= right
        right *= nums[i]
    }
    return arr
};