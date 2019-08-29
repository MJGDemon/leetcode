/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    var ans = [];
    intervals.sort((a,b) => a[0]-b[0]);
    for(var i = 0; i<intervals.length; i++){

        if(ans.length == 0 || ans[ans.length-1][1] < intervals[i][0]){
            
            ans.push(intervals[i]);
        }else{
            ans[ans.length-1][1] = Math.max(ans[ans.length-1][1],intervals[i][1])
        }
    }
    return ans;
};