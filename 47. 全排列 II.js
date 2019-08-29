/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a,b) => a-b);
    var ans = [];
    var set = [];
    var visit = [];
    var backtrack = function(set,visit){
        for(var i = 0; i<nums.length; i++){
            if(visit[i] != undefined)
                continue;
            else if(visit[i-1] != undefined && nums[i] == nums[i-1])
                continue;
            else{
                set.push(nums[i])
                visit[i] = nums[i];
                if(set.length == nums.length){
                    ans.push(Array.from(set));

                    set.pop();
                    visit[i] = undefined;
                    return;
                }
                else{
                    backtrack(set,visit);
                    visit[i] = undefined;
                    set.pop();
                }
            }
        }
    }
    backtrack(set,visit);
    return ans;
};

