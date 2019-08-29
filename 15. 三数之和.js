/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var ans = [];
    var len = nums.length;
    var count = 0;
    nums.sort((a,b) => a - b);
    for(var i = 0; i<len; i++){
        if(i == 0 || nums[i]>nums[i-1]){
            var l = i+1;
            var r = len-1;
            while(l<r){
                var s = nums[i]+nums[l]+nums[r];
                if(s == 0){
                    ans[count] = [nums[l],nums[i],nums[r]];
                    count++;
                    l++;
                    r--;
                    while(l<r){
                        if(nums[l] == nums[l-1])
                            l++;
                        else
                            break;
                    }
                    while(l<r){
                        if(nums[r] == nums[r+1])
                            r--;
                        else
                            break;
                    }
                }else if(s>0)
                    r--;
                else if(s<0)
                    l++;
            }
        }
    }
    return ans;
};