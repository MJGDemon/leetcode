/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var sum = nums[0];
    var ans = nums[0];
    for(var i = 1; i<nums.length; i++){
        if(sum>0)
            sum = sum+nums[i];
        else
            sum = nums[i];
        if(ans<sum)
            ans=sum;
    }
    return ans;
};