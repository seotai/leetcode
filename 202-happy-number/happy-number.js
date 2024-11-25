/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set()
    while (n !== 1 && !set.has(n)) {
        set.add(n)
        n = n.toString().split('').reduce((acc, cur) => acc + Math.pow(cur, 2), 0)
    }
    return n === 1
};