/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for(var i = 0; i<nums.length; i++){
        for(var j = 0; j<nums.length; j++)
            if(nums[j]>nums[j+1])
                [nums[j],nums[j+1]] = [nums[j+1],nums[j]]
    }
    return nums;
};