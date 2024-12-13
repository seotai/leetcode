/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let cnt = 0, reverse = 0, copy = x
    const y = String(x).length
    while (x > 0) {
        const rest = x % 10
        reverse += rest * 10 ** (y - cnt - 1)
        x = Math.floor(x / 10)
        cnt += 1
    }
    return copy === reverse

};