/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let arr = Array(n).fill(0)
    arr[0] = 1, arr[1] = 2
    if (n >= 2) {
        for (let i = 2; i < arr.length; i++) {
            arr[i] = arr[i - 1] + arr[i - 2]
        }
        return arr[arr.length - 1]
    }
    if (n === 1) return 1
    if (n === 2) return 2
};