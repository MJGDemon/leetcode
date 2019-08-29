/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var fun = function(nums,target,l,r,ans){
    if(l>r)
        return ans;
    var mid = Math.floor((l+r)/2);
    if(nums[mid] == target){
        if(mid<ans[0])
            ans[0] = mid;
        if(mid>ans[1])
            ans[1] = mid;
        fun(nums,target,l,mid-1,ans);
        fun(nums,target,mid+1,r,ans);
        return ans;
    }else if(nums[mid]<target){
        return fun(nums,target,mid+1,r,ans);
    }else{
        return fun(nums,target,l,mid-1,ans);
    }
}

var searchRange = function(nums, target) {
    var ans = [nums.length,-1];
    ans = fun(nums,target,0,nums.length-1,ans);
    if(ans[0]==nums.length || nums[1] == -1)
        return [-1,-1]
    else
        return ans;
};