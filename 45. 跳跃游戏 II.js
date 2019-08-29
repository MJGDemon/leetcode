/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums.length == 1)
        return 0;
    var dp = [];
    dp[0] = 0;
    for(var i = 0; i<nums.length; i++){
        for(var j = nums[i]; j>0; j--){
            if(i + j >= nums.length-1)
                return (dp[i] +1);
            else if(dp[i+j] == undefined)
                dp[i+j] = dp[i] + 1;
            else
                break;
        }
    }
};