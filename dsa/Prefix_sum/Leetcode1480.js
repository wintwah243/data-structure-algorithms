/*
    Prefix sum Leetcode problem 1480 (Level-Easy)
    We use prefix sum when we need to answer many subarray sum queries
*/

var runningSum = function(nums) {
    const prefix = [];
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      count = count + nums[i];
      prefix.push(count);
    }
    return prefix;
};

const result = runningSum([1,2,3,4]);
console.log(result);