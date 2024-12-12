/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [], arr = []
    const recursion = (start) => {
        if (arr.length === nums.length) {
            res.push([...arr])
            return
        }
        for (const num of nums) {
            if (!arr.includes(num)) {
            arr.push(num)
            recursion(num)
            arr.pop()
            }
        }
    }
    recursion(1)
    return res
};