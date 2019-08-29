/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var dp = [];
    var row = grid.length;
    var col = grid[0].length;
    for(var i = 0; i<row; i++)
        dp[i] = [];
    dp[0][0] = grid[0][0];
    for(var i = 1; i<row; i++){
        dp[i][0] = dp[i-1][0] + grid[i][0];
    }
    for(var i = 1; i<col; i++){
        dp[0][i] = dp[0][i-1] + grid[0][i];
    }

    for(var i = 1; i<row; i++)
        for(var j = 1; j<col; j++)
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
    return dp[row-1][col-1]
};
