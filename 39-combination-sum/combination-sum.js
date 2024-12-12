/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [], arr = []
    const recursion = (idx) => {
        const summ = arr.reduce((a, b) => a + b, 0)
        if (summ > target) return
        if (summ === target) {
            res.push([...arr])
            return
        }
        for (let i = idx; i < candidates.length; i ++) {
            arr.push(candidates[i])
            recursion(i)
            arr.pop()
        }
    }
    recursion(0)
    return res
};