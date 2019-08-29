/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var ans = [];
    ans.push([]);
    if(nums.length == 0)
        return ans;
    var tmp = [];
    var backtrack = function(start,len){
        for(var i = start; i<nums.length; i++){
            tmp.push(nums[i]);
            if(tmp.length < len)
                backtrack(i+1,len);
            else
                ans.push(Array.from(tmp));
            tmp.pop();
        }
    }
    for(var i = 1; i<=nums.length; i++)
        backtrack(0,i);
    return ans;
};