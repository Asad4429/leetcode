/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    return stones.split('').reduce((acc, s) => acc + jewels.includes(s), 0)
};
