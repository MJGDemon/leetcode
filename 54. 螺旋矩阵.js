/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var ans = [];
    if(matrix.length == 0)
        return ans;
    var r1 = 0;
    var r2 = matrix.length-1;
    var c1 = 0;
    var c2 = matrix[0].length-1;
    while(r1<=r2&&c1<=c2){
        for(var i = c1; i<=c2; i++)
            ans.push(matrix[r1][i])
        for(var i = r1+1; i<=r2; i++)
            ans.push(matrix[i][c2])
        if(r1<r2&&c1<c2){
            for(var i = c2-1; i>=c1; i--)
                ans.push(matrix[r2][i]);
            for(var i = r2-1; i>r1; i--)
                ans.push(matrix[i][c1]);
        }
        r1++;
        r2--;
        c1++;
        c2--;
    }
    return ans;
};