/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [], arr = []
    const comb = (start) => {
        if (arr.length === k) {
            res.push([...arr])
            return
        }
        for (let num = start; num <= n; num++) {
            arr.push(num)
            comb(num + 1)
            arr.pop()
        }
    }
    comb(1)
    return res
};