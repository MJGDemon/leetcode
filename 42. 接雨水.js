/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length == 0)
        return 0;
    var ans = 0;
    var len = height.length;
    var maxLeft = [];
    var maxRight = [];
    maxLeft[0] = height[0];
    for(var i = 1; i<len; i++){
        maxLeft[i] = Math.max(height[i],maxLeft[i-1]);
    }
    maxRight[len-1] = height[len-1];
    for(var i = len-2; i>=0; i--){
        maxRight[i] = Math.max(height[i],maxRight[i+1])
    }
    for(var i = 1; i<len-1; i++){
        ans = ans + Math.min(maxLeft[i],maxRight[i]) - height[i];
    }
    return ans;
};