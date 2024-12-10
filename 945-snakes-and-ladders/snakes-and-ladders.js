/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    const N = board.length
    let q = [1], visited = { '1' : 0 }
    
    while (q.length) {
        const node = q.shift()
        if (node === N * N) return visited[node]
        for (let i = node + 1; i <= Math.min(node + 6, N * N); i++) {
            const [r, c] = getPos(i)
            const next = board[r][c] === -1 ? i : board[r][c]
            if (visited[next] === undefined) {
                q.push(next)
                visited[next] = visited[node] + 1
            }
        }
    }
    return - 1

    function getPos(pos) {
        let row = Math.floor((pos - 1) / N), col = (pos - 1) % N
        col = row % 2 === 0 ? col : N - col - 1
        row = N - row - 1
        return [row, col]
    }
};