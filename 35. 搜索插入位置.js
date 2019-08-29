/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.length == 0 || nums[0]>=target)
        return 0;
    if(nums[nums.length-1] < target)
        return nums.length;
    if(nums[nums.length-1] == target)
        return nums.length-1;
    for(var i = 0; i<nums.length-1; i++){
        if(nums[i]==target)
            return i;
        else if(nums[i]<target && nums[i+1]>target)
            return i+1;
    }
};