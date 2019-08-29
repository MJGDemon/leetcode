/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    for(var i = nums.length; i>=0; i--){
        if(i!=0 && nums[i]>nums[i-1]){
            for(var j = i; j<nums.length-1; j++){
                for(var k = i; k<nums.length-1; k++){
                    if(nums[k]>nums[k+1])
                        [nums[k],nums[k+1]] = [nums[k+1],nums[k]];
                }
            }
            for(var j = i; j<nums.length; j++){
                if(nums[j]>nums[i-1]){
                    [nums[i-1], nums[j]] = [nums[j], nums[i-1]];
                    return;
                }
            }

        }else if(i==0){
            return nums.sort((a,b) => a-b);
        }
    }
    console.log(nums)
    return nums;
};