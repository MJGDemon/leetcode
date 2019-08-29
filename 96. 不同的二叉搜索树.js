/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for(var i = 2; i<=n; i++)
        dp[i] = 0;
    for(var i = 2; i<n+1; i++){
        for(var j = 1; j<i+1; j++){
            dp[i] = dp[i] + dp[j-1] * dp[i-j];
        }
    }
    console.log(dp);
    return dp[n];
};