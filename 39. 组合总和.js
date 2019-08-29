/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var ans = [];
    var path = [];
    var fun = function(candidates, target, it, ans, path){
        if(target<0)
            return;
        if(target == 0){
            path = path.slice()
            ans.push(path);
            return;
        }
        for(var i = it; i<candidates.length; i++){
            path.push(candidates[i]);
            fun(candidates,target-candidates[i],i,ans,path);
            path.pop();
        }
    }


    candidates.sort((a,b) => a-b);
    fun(candidates,target,0,ans,path);
    return ans;
};