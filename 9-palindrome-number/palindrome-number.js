/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverse = 0, copy = x
    while (x > 0) {
        const rest = x % 10
        reverse = reverse * 10 + rest
        x = Math.floor(x / 10)
    }
    return copy === reverse

};