/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const parsedPath = path.split('/')
    console.log(parsedPath)
    let stack = []
    for (let i = 0; i < parsedPath.length; i ++) {
        if (parsedPath[i] === '') {

        } else if (parsedPath[i] === '.') {

        } else if (parsedPath[i] === '..') {
           stack.pop()
        } else {
            stack.push('/' + parsedPath[i])
        }
    }
    if (!stack.length) stack.push('/')
    const ans = stack.join('')
    return ans
};