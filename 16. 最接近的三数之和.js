/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var ans = 0;
    var len = nums.length;
    var min = 100000000;
    nums.sort((a,b) => a-b)
    for(var i = 0; i<len; i++){
        if(i==0 || nums[i]>nums[i-1]){
            var l = i+1;
            var r = len-1;
            while(l<r){
                var s = nums[l] + nums[i] + nums[r];
                if(s == target){
                    return s;
                }else if(s>target){
                    if((s-target)<min){
                        min = s-target;
                        ans = s;
                    }
                    r--;
                }else if(s<target){
                    if((target-s)<min){
                        min = target-s;
                        ans = s;
                    }
                    l++;
                }
            }
        }
    }
    return ans
};