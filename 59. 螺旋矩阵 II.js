/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var count = 1;
    var r1 = 0;
    var r2 = n-1;
    var c1 = 0;
    var c2 = n-1;
    var ans = [];
    for(var i = 0; i<n;i++)
        ans[i] = [];
    while(r1<=r2&&c1<=c2){
        for(var i = c1; i<=c2; i++){
            ans[r1][i] = count;
            count++;
        }
        for(var i = r1+1; i<=r2; i++){
            ans[i][c2] = count;
            count++;
        }
        if(r1<r2&&c1<c2){
            for(var i = c2-1; i>=c1; i--){
                ans[r2][i] = count;
                count++;
            }
            for(var i = r2-1; i>r1; i--){
                ans[i][c1] = count;
                count++;
            }
        }
        r1++;
        r2--;
        c1++;
        c2--;
    }
    return ans;
};