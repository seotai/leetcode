/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const checker = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ]);
    let stack = [], lens = s.length
    for (const char of s) {
        if (!lens) {
            stack.push(char)
        } else {
            if (checker.get(stack[stack.length - 1]) === char) {
                stack.pop()
            } else {
                stack.push(char)
            }
        }
    }
    return stack.length === 0
};