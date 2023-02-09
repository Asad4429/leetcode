/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const decompressedArr = [];
    
    const len = nums.length;
    for(let i=0; i< len; i+=2){
        for(let j=0; j<nums[i]; j++) decompressedArr.push(nums[i+1]);
    }
    return decompressedArr;
};
