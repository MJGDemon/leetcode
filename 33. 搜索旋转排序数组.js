/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var fun = function(nums, target, l, r){
    if(l>r)
        return -1;
    var mid = Math.floor((l+r)/2);
    if(nums[mid] == target)
        return mid;
    if(nums[l]<nums[r]){
        if(nums[mid]<target){
            return fun(nums,target,mid+1,r);
        }else{
            return fun(nums,target,l,mid-1);
        }
    }else{
        var ans = fun(nums,target,l,mid-1);
        if(ans == -1)
            return fun(nums,target,mid+1,r);
        else
            return ans;
    }
}

var search = function(nums, target) {
    return fun(nums,target,0,nums.length);
};