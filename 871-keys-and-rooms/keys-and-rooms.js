/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let stack = [0], cnt = 1, vis = new Array(rooms.length)
    vis[0] = 1
    function dfs() {
        while (stack.length) {
            let keys = rooms[stack.pop()]
            for (let key of keys) {
                if (!vis[key]) vis[key] = 1, cnt++, stack.push(key)
            }
        }
    }
    dfs()
    console.log(cnt)
    return cnt === rooms.length ? true : false
};