/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    for (const token of tokens) {
        // 숫자면
        if (!isNaN(token)) {
            stack.push(Number(token))
        } else {
            const first = stack.pop(), second = stack.pop()
            let total = 0
            if (token === '+') {
                total = first + second
            } else if (token === '-') {
                total = second - first
            } else if (token === '*') {
                total = second * first
            } else if (token === '/') {
                total = Math.trunc(second / first)
            }
            stack.push(total)
            console.log(stack)
        }
    }
    return stack[0]
};