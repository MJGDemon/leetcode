/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var ans = [];
    var set = new Set();
    var backtrack = function(set){
        for(var i = 0; i<nums.length; i++){
            if(set.has(nums[i])){

                continue;
            }
            else{
                set.add(nums[i]);
                if(set.size == nums.length){
                    ans.push(Array.from(set));
                    set.delete(nums[i]);
                    return;
                }
                else{
                    backtrack(set)
                    set.delete(nums[i])
                }
            }
        }

    }
    backtrack(set);
    return ans;
};
