/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    var l = 0;
    var r = nums.length-1;
    while(l<=r){
        var mid = Math.floor((l+r)/2);
        if(nums[mid] == target)
            return true;
        if(nums[l] == nums[mid] && nums[mid] == nums[r]){
            l++;
            r--;
        }else if(nums[l] <= nums[mid]){
            if(nums[l]<=target && target<nums[mid])
                r = mid-1;
            else
                l = mid+1;
        }else{
            if(nums[mid]<target && target <= nums[r])
                l = mid+1;
            else
                r = mid-1;
        }
    }
    return false;
};