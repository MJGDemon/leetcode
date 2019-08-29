/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var dp = [];
    var row = obstacleGrid.length;
    var col = obstacleGrid[0].length;
    for(var i = 0; i<row; i++)
        dp[i] = [];
    if(obstacleGrid[0][0] == 1)
        return 0;
    else
        dp[0][0] = 1;
    for(var i = 1; i<row; i++){
        if(obstacleGrid[i][0] != 1)
            dp[i][0] = dp[i-1][0];
        else
            dp[i][0] = 0;
    }
    for(var i = 1; i<col; i++){
        if(obstacleGrid[0][i] != 1)
            dp[0][i] = dp[0][i-1];
        else
            dp[0][i] = 0;
    }
    for(var i = 1; i<row; i++)
        for(var j = 1; j<col; j++){
            if(obstacleGrid[i][j] == 1)
                dp[i][j] = 0;
            else
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }

    return dp[row-1][col-1];
};