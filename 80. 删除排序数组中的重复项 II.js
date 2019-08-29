/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length<=2)
        return nums.length;
    var count = 0;
    var end = 0;
    for(var i = 0; i<nums.length-1; i++){
        if(nums[i] == nums[i+1]){
            count++;
            if(count<=2){
                nums[end] = nums[i];
                end++;
            }
        }else{
            if(count >= 2)
                count = 0;
            else{
                nums[end] = nums[i];
                end++;
                count = 0;
            }
        }
    }
    if(nums[nums.length-1] != nums[nums.length-2])
        nums[end++] = nums[nums.length-1];
    else if(nums[nums.length-1] == nums[nums.length-2] && count == 1)
        nums[end++] = nums[nums.length-1];
    return end;
};