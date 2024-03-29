/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    return encoded.reduce((acc, item) => {
        acc.push(item ^ acc[acc.length-1]);
        return acc;
    }, [first]);
    
};
