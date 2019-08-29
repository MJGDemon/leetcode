/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length == 0)
        return 0;
    var j = 0;
    for(var i = 0; i<nums.length; i++){
        if(nums[i] == val){
            while(nums[j]==val || j<i){
                j++;
            }
            if(j==nums.length)
                return i;
            else
                [nums[i],nums[j]] = [nums[j],[nums[i]]];
        }
    }
    return i
};