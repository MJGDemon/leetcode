/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var end = nums.length-1;
    var start = nums.length-2;
    while(start>=0){
        if(start+nums[start] >= end)
            end = start;
        start--;
    }
    if(end<=0)
        return true;
    else
        return false;
};