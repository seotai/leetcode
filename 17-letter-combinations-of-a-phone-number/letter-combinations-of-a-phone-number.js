/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const mapp = {
        '2' : 'abc',
        '3' : 'def',
        '4' : 'ghi',
        '5' : 'jkl',
        '6' : 'mno',
        '7' : 'pqrs',
        '8' : 'tuv',
        '9' : 'wxyz'
    }
    let leng = digits.length, ans = []
    if (leng === 0) return []
    const permute = (pos, str) => {
        if (pos === leng) {
            ans.push(str)
        } else {
            let letters = mapp[digits[pos]]
            for (let letter of letters) {
                permute(pos + 1, str + letter)
            }
        }
    }
    permute(0, '')
    return ans
};