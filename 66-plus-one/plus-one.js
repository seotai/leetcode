/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let adder = 0, lens = digits.length
    for (let i = lens -1; i >= 0; i--) {
       const num = i === lens - 1 ? digits[i] + 1 : digits[i]
       if (num + adder === 10) {
        digits[i] = 0
        adder = 1
       } else {
        digits[i] = num + adder
        adder = 0
       }
       if (i === 0 && adder === 1) digits.unshift(1)
    }
    return digits
};