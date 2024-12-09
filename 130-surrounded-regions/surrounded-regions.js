/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const r = board.length, c = board[0].length
    const dfs = (x, y) => {
        if (x<0 || y<0 || x>=r || y>=c || board[x][y]==='visited' || board[x][y]==='X') return
        board[x][y] = 'visited'
        dfs(x+1, y)
        dfs(x, y+1)
        dfs(x-1, y)
        dfs(x, y-1)
    }
    for (let i = 0; i < r; i ++) {
        for (let j = 0; j < c; j ++) {
            if ((i===0 || j===0 || i===r-1 || j===c-1) && board[i][j]==='O' ) dfs(i, j)
        }
    }
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] === 'visited') {
                board[i][j] = 'O';
            } else  {
                board[i][j] = 'X';
            }
        }    
    }
    
};