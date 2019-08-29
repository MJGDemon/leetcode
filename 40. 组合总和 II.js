/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
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
            if(i>it&&candidates[i-1]==candidates[i])
                continue;
            path.push(candidates[i]);
            fun(candidates,target-candidates[i],i+1,ans,path);
            path.pop();
        }
    }


    candidates.sort((a,b) => a-b);
    fun(candidates,target,0,ans,path);
    return ans;
};