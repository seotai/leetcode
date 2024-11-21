/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1, tot = 0
    while (left < right) {
        let cur = (right - left) * Math.min(height[left], height[right])
        if (tot < cur) tot = cur
        if (height[left] <= height[right]) {
            left += 1
        } else {
            right -= 1
        }
    }
    return tot
};