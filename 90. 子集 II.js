/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a-b);
    var ans = [];
    ans.push([])
    var tmp = [];
    var backtrack = function(start,len){
        for(var i = start; i<nums.length; i++){
            if(i > start && nums[i] == nums[i-1]){
                continue;
            }
            tmp.push(nums[i]);
            if(tmp.length<len){
                backtrack(i+1,len);
            }else{
                ans.push(Array.from(tmp));
            }
            tmp.pop();
        }
    }

    for(var i = 1; i<=nums.length; i++)
        backtrack(0,i);
    return ans;
};