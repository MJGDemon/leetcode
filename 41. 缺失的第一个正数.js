/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if(nums.length == 0)
        return 1;
    if(nums.length == 1){
        if(nums[0] == 1)
            return 2;
        else
            return 1;
    }
    for(var i = 0; i<nums.length; i++){
        if(nums[i]>=0 && nums[i]<nums.length && nums[i]!=i && nums[i] != nums[nums[i]]){
            var tmp = nums[i];
            nums[i] = nums[tmp];
            nums[tmp] = tmp;
            i--;
        }
    }
    var j = 0
    for(j = 1 ; j<nums.length; j++){
        if(nums[j] != j)
            return j;
    }
    if(nums[0] == j)
        return j+1
    else
        return j;
};