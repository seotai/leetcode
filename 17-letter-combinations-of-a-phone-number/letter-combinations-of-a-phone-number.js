/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const words = { 
        2 : 'abc',
        3 : 'def', 
        4 : 'ghi', 
        5 : 'jkl', 
        6 : 'mno', 
        7 : 'pqrs', 
        8 : 'tuv', 
        9 : 'wxyz' 
    }
    let ans = []
    if (!digits.length) return []
    function permute(pos, str) {
        if (pos === digits.length) ans.push(str)
        else {
            let letters = words[digits[pos]]
            for (let i = 0; i < letters.length; i++) {
                permute(pos + 1, str + letters[i])
            }
        }
    }
    permute(0, '')
    return ans
};