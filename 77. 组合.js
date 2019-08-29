/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var ans = [];
    var nums = [];
    for(var i = 0; i<n; i++)
        nums[i] = i+1;
    var tmp = [];
    var backtrack = function(start){
        for(var i = start; i<n; i++){
            tmp.push(nums[i]);
            if(tmp.length<k)
                backtrack(i+1);
            else
                ans.push(Array.from(tmp));
            tmp.pop();
        }
    }
    backtrack(0);
    return ans;
};