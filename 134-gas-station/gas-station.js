/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const gasSum = gas.reduce((a, b) => a + b, 0), costSum = cost.reduce((a, b) => a + b, 0)
    if (costSum > gasSum) return -1
    let start = 0, curr = 0
    for (let i = 0; i < gas.length; i ++) {
        curr += gas[i] - cost[i]
        if (curr < 0) {
            curr = 0
            start = i + 1
        }
    }
    return start
};