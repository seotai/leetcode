/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    console.log(intervals)
    let start = intervals[0][0], end = intervals[0][1], ans = []
    for (let [i, j] of intervals) {
        if (i <= end && j < end) continue
        if (i <= end && j >= end) {
            end = j
        } else {
            ans.push([start, end])
            start = i
            end = j
        }
    }
    ans.push([start, end])
    return ans
};