/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var ans = [];
    var count = 0;
    if(nums.length<4)
        return ans;
    nums.sort((a,b) => a-b);
    for(var i = 0; i<nums.length-3; i++){
        if(i==0 || nums[i-1] != nums[i]){
            if(nums[i]>target && target>0)
                break;
            for(var j = i+1; j<nums.length-2; j++){
                if(nums[j] == nums[j-1] && j!=i+1)
                    continue;
                var l = j+1;
                var r = nums.length-1;
                while(l<r){
                    var s = nums[i]+nums[j]+nums[l]+nums[r];
                    if(s == target){
                        ans[count] = [nums[i],nums[j],nums[l],nums[r]];
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
                    }else if(s>target){
                        r--;
                    }else if(s<target){
                        l++;
                    }
                }
            }
        }
    }
    return ans;
};
